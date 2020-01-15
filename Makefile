SHELL := bash

.SHELLFLAGS := -eu -o pipefail -c  
.ONESHELL:

include .env
export

# =================================================================
# General controls
# =================================================================
clean:
	@echo
	@echo Cleaning up
	@rm -rf apollo/dist apollo/node_modules apollo/src/generated apollo/schema/generated

init: clean
	@echo
	@echo Initializing
	@cd apollo && npm install -production && npm prune


# =================================================================
# Local Prisma controls
# =================================================================
local-prisma-generate:
	@echo
	@echo Generating Prisma schema
	@cd prisma && \
	prisma generate

local-prisma-deploy:
	@echo
	@echo Deploying Prisma schema
	@cd prisma && \
	prisma deploy

local-prisma-token:
	@echo
	@echo Generating Prisma token
	@cd prisma && \
	prisma token


# =================================================================
# Apollo controls
# =================================================================
apollo-gen: prisma-gen
	@echo
	@echo Generating Apollo code
	cd apollo && npx graphql-codegen

apollo-build: apollo-gen
	@echo
	@echo Building Apollo image
	cd apollo && \
	npm run build && \
	docker build -t lambdaschoollabs/prismatopia:latest .

apollo-push: apollo-build
	@echo
	@echo Pushing Apollo image to registry
	cd apollo && docker push lambda-school-labs/prismatopia:latest

apollo-token:
	@echo
	@echo Generating token that can be used for Apollo
	@curl --request POST \
		--url ${OAUTH_TOKEN_ENDPOINT}/v1/token \
		--header 'content-type: application/x-www-form-urlencoded' \
		--data 'grant_type=client_credentials&scope=groups' -u ${TEST_OAUTH_CLIENT_ID}:${TEST_OAUTH_CLIENT_SECRET}


# =================================================================
# AWS Cloudformation controls
# =================================================================
aws-deploy-app-network:
	@echo
	@echo ===================================================================
	@echo Deploying the application network components
	@echo ===================================================================
	cd aws && \
	aws cloudformation deploy \
	--no-fail-on-empty-changeset \
  --template-file app-network.cf.yaml \
  --stack-name $(APPLICATION_NAME)-network \
	--capabilities CAPABILITY_IAM \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json) \
	--tags application=$(APPLICATION_NAME) environment=$(ENVIRONMENT_NAME)

aws-deploy-app-dns:
	@echo
	@echo ===================================================================
	@echo Deploying the main application DNS
	@echo ===================================================================
	cd aws && \
	aws cloudformation deploy \
	--no-fail-on-empty-changeset \
  --template-file app-dns.cf.yaml \
  --stack-name $(APPLICATION_NAME)-dns \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json) \
	--tags application=$(APPLICATION_NAME) environment=$(ENVIRONMENT_NAME)

aws-deploy-env-network:
	@echo
	@echo ===================================================================
	@echo Deploying the environment specific network components
	@echo ===================================================================
	cd aws && \
	aws cloudformation deploy \
	--no-fail-on-empty-changeset \
  --template-file env-network.cf.yaml \
  --stack-name $(APPLICATION_NAME)-$(ENVIRONMENT_NAME)-network \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json) \
	--tags application=$(APPLICATION_NAME) environment=$(ENVIRONMENT_NAME)

aws-deploy-env-db:
	@echo
	@echo ===================================================================
	@echo Deploying the DB for the environment
	@echo ===================================================================
	cd aws && \
	aws cloudformation deploy \
	--no-fail-on-empty-changeset \
  --template-file env-db.cf.yaml \
  --stack-name $(APPLICATION_NAME)-$(ENVIRONMENT_NAME)-db \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json) \
	--tags application=$(APPLICATION_NAME) environment=$(ENVIRONMENT_NAME)

aws-deploy-env-prisma:
	@echo
	@echo ===================================================================
	@echo Deploying the Prisma service for the environment
	@echo ===================================================================
	cd aws && \
	aws cloudformation deploy \
	--no-fail-on-empty-changeset \
  --template-file env-prisma.cf.yaml \
  --stack-name $(APPLICATION_NAME)-$(ENVIRONMENT_NAME)-prisma \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json) \
	--tags application=$(APPLICATION_NAME) environment=$(ENVIRONMENT_NAME)

aws-deploy-env-apollo:
	@echo
	@echo ===================================================================
	@echo Deploying the Apollo service for the environment
	@echo ===================================================================
	cd aws && \
	aws cloudformation deploy \
	--no-fail-on-empty-changeset \
  --template-file env-apollo.cf.yaml \
  --stack-name $(APPLICATION_NAME)-$(ENVIRONMENT_NAME)-apollo \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json) \
	--tags application=$(APPLICATION_NAME) environment=$(ENVIRONMENT_NAME)

aws-deploy-all: aws-deploy-app-network aws-deploy-app-dns aws-deploy-env-network aws-deploy-env-db aws-deploy-env-prisma aws-deploy-env-apollo
	$(info Finished deploying all AWS resources)


# =================================================================
# AWS Secrets
# =================================================================
PRISMA_MANAGEMENT_API_ARN_EXPORT := mission-control-stage-PrismaManagementAPISecret
PRISMA_MANAGEMENT_API_ARN = $(shell aws cloudformation list-exports --query 'Exports[?Name==`$(PRISMA_MANAGEMENT_API_ARN_EXPORT)`].Value' --output text)
PRISMA_MANAGEMENT_API_SECRET = $(shell aws secretsmanager get-secret-value --secret-id $(PRISMA_MANAGEMENT_API_ARN) --query 'SecretString' --output text)

aws-prisma-management-secret:
	$(info PRISMA_MANAGEMENT_API_ARN:    $(PRISMA_MANAGEMENT_API_ARN))
	$(info PRISMA_MANAGEMENT_API_SECRET: $(PRISMA_MANAGEMENT_API_SECRET))


PRISMA_SERVICE_API_ARN_EXPORT := mission-control-stage-PrismaServiceAPISecret
PRISMA_SERVICE_API_ARN = $(shell aws cloudformation list-exports --query 'Exports[?Name==`$(PRISMA_SERVICE_API_ARN_EXPORT)`].Value' --output text)
PRISMA_SERVICE_API_SECRET = $(shell aws secretsmanager get-secret-value --secret-id $(PRISMA_SERVICE_API_ARN) --query 'SecretString' --output text)

aws-prisma-service-secret:
	$(info PRISMA_SERVICE_API_ARN:    $(PRISMA_SERVICE_API_ARN))
	$(info PRISMA_SERVICE_API_SECRET: $(PRISMA_SERVICE_API_SECRET))


aws-prisma-token:
	@cd prisma && \
	export PRISMA_MANAGEMENT_API_SECRET='$(PRISMA_MANAGEMENT_API_SECRET)' && \
	export PRISMA_SECRET='$(PRISMA_SERVICE_API_SECRET)' && \
	export PRISMA_ENDPOINT="https://prisma-stage.use-mission-control.com/" && \
	prisma token


aws-prisma-deploy:
	@cd prisma && \
	export PRISMA_MANAGEMENT_API_SECRET='$(PRISMA_MANAGEMENT_API_SECRET)' && \
	export PRISMA_SECRET='$(PRISMA_SERVICE_API_SECRET)' && \
	export PRISMA_ENDPOINT='https://prisma-stage.use-mission-control.com/' && \
	prisma deploy

aws-prisma-update-service:
	aws ecs update-service --cluster mission-control-stage --service prisma-stage --force-new-deployment

aws-apollo-update-service:
	aws ecs update-service --cluster mission-control-stage --service apollo-stage --force-new-deployment

