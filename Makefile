SHELL = /bin/sh

$(info Loading environment variables from .env file)
include .env
export

# =================================================================
# General controls
# =================================================================
.PHONY: clean
clean:
	@echo
	@echo Cleaning up
	rm -rf apollo/dist apollo/node_modules apollo/src/generated apollo/schema/generated

.PHONY: init
init: clean
	@echo
	@echo Initializing
	cd apollo && npm install -production && npm prune


# =================================================================
# Prisma controls
# =================================================================
.PHONY: prisma-gen
prisma-gen:
	@echo
	@echo Generating Prisma schema
	cd prisma
	prisma generate

.PHONY: prisma-deploy
prisma-deploy:
	@echo
	@echo Deploying Prisma schema
	cd prisma
	prisma deploy

.PHONY: prisma-token
prisma-token:
	@echo
	@echo Generating Prisma token
	cd prisma
	prisma token


# =================================================================
# Apollo controls
# =================================================================
.PHONY: apollo-gen
apollo-gen: prisma-gen
	@echo
	@echo Generating Apollo code
	cd apollo && npx graphql-codegen

.PHONY: apollo-build
apollo-build: apollo-gen
	@echo
	@echo Building Apollo image
	cd apollo && \
	npm run build && \
	docker build -t lambdaschoollabs/prismatopia:latest .

.PHONY: apollo-push
apollo-push: apollo-build
	@echo
	@echo Pushing Apollo image to registry
	cd apollo && docker push lambda-school-labs/prismatopia:latest

.PHONY: apollo-token-gen
apollo-token-gen:
	@echo
	@echo Generating token that can be used for Apollo
	curl --request POST \
		--url ${OAUTH_TOKEN_ENDPOINT}/v1/token \
		--header 'content-type: application/x-www-form-urlencoded' \
		--data 'grant_type=client_credentials&scope=groups' -u ${TEST_OAUTH_CLIENT_ID}:${TEST_OAUTH_CLIENT_SECRET}


# =================================================================
# Cloudformation controls
# =================================================================
.PHONY: cf-deploy-app-network
cf-deploy-app-network:
	@echo
	@echo ===================================================================
	@echo Deploying the application network components
	@echo ===================================================================
	cd cloudformation && \
	aws cloudformation deploy \
	--no-fail-on-empty-changeset \
  --template-file app-network.cf.yaml \
  --stack-name $(APPLICATION_NAME)-network \
	--capabilities CAPABILITY_IAM \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json) \
	--tags application=$(APPLICATION_NAME) environment=$(ENVIRONMENT_NAME)

.PHONY: cf-deploy-app-dns
cf-deploy-app-dns:
	@echo
	@echo ===================================================================
	@echo Deploying the main application DNS
	@echo ===================================================================
	cd cloudformation && \
	aws cloudformation deploy \
	--no-fail-on-empty-changeset \
  --template-file app-dns.cf.yaml \
  --stack-name $(APPLICATION_NAME)-dns \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json) \
	--tags application=$(APPLICATION_NAME) environment=$(ENVIRONMENT_NAME)


.PHONY: cf-deploy-env-network
cf-deploy-env-network:
	@echo
	@echo ===================================================================
	@echo Deploying the environment specific network components
	@echo ===================================================================
	cd cloudformation && \
	aws cloudformation deploy \
	--no-fail-on-empty-changeset \
  --template-file env-network.cf.yaml \
  --stack-name $(APPLICATION_NAME)-$(ENVIRONMENT_NAME)-network \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json) \
	--tags application=$(APPLICATION_NAME) environment=$(ENVIRONMENT_NAME)

.PHONY: cf-deploy-env-db
cf-deploy-env-db:
	@echo
	@echo ===================================================================
	@echo Deploying the DB for the environment
	@echo ===================================================================
	cd cloudformation && \
	aws cloudformation deploy \
	--no-fail-on-empty-changeset \
  --template-file env-db.cf.yaml \
  --stack-name $(APPLICATION_NAME)-$(ENVIRONMENT_NAME)-db \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json) \
	--tags application=$(APPLICATION_NAME) environment=$(ENVIRONMENT_NAME)

.PHONY: cf-deploy-env-prisma
cf-deploy-env-prisma:
	@echo
	@echo ===================================================================
	@echo Deploying the Prisma service for the environment
	@echo ===================================================================
	cd cloudformation && \
	aws cloudformation deploy \
	--no-fail-on-empty-changeset \
  --template-file env-prisma.cf.yaml \
  --stack-name $(APPLICATION_NAME)-$(ENVIRONMENT_NAME)-prisma \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json) \
	--tags application=$(APPLICATION_NAME) environment=$(ENVIRONMENT_NAME)

.PHONY: cf-deploy-env-apollo
cf-deploy-env-apollo:
	@echo
	@echo ===================================================================
	@echo Deploying the Apollo service for the environment
	@echo ===================================================================
	cd cloudformation && \
	aws cloudformation deploy \
	--no-fail-on-empty-changeset \
  --template-file env-apollo.cf.yaml \
  --stack-name $(APPLICATION_NAME)-$(ENVIRONMENT_NAME)-apollo \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json) \
	--tags application=$(APPLICATION_NAME) environment=$(ENVIRONMENT_NAME)


.PHONY: cf-deploy-all
cf-deploy-all: cf-deploy-app-network cf-deploy-app-dns cf-deploy-env-network cf-deploy-env-db cf-deploy-env-prisma cf-deploy-env-apollo
	@echo
	@echo Deploying all AWS resources
