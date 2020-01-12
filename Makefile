SHELL = /bin/sh

$(info Loading environment variables from .env file)
include .env
export

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

.PHONY: prisma-gen
prisma-gen:
	@echo
	@echo Generating Prisma schema
	cd prisma
	prisma generate

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
	docker build -t $(APOLLO_DOCKER_REGISTRY)/lambda-school-labs/prismatropolis/default:1.0 .

.PHONY: apollo-push
apollo-push: apollo-build
	@echo
	@echo Pushing Apollo image to registry: $(APOLLO_DOCKER_REGISTRY)
	cd apollo && docker push $(APOLLO_DOCKER_REGISTRY)/lambda-school-labs/prismatropolis/default:1.0


.PHONY: ecs-up
ecs-up:
	@echo
	@echo Firing up the ECS cluster
	ecs-cli up

.PHONY: ecs-compose-up
ecs-compose-up:
	@echo
	@echo Firing up the ECS services
	cd ecs && ecs-cli compose up


.PHONY: cf-deploy-app-network
cf-deploy-app-network:
	@echo
	@echo Deploying the application network components
	cd cloudformation && \
	aws cloudformation deploy \
  --template-file app-network.cf.yaml \
  --stack-name pma-network \
	--capabilities CAPABILITY_IAM \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json)

.PHONY: cf-deploy-app-dns
cf-deploy-app-dns:
	@echo
	@echo Deploying the main application DNS
	cd cloudformation && \
	aws cloudformation deploy \
  --template-file app-dns.cf.yaml \
  --stack-name mission-control-dns \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json)


.PHONY: cf-deploy-env-network
cf-deploy-env-network:
	@echo
	@echo Deploying the environment specific network components
	cd cloudformation && \
	aws cloudformation deploy \
  --template-file env-network.cf.yaml \
  --stack-name $(APPLICATION_NAME)-$(ENVIRONMENT_NAME)-network \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json)

.PHONY: cf-deploy-env-db
cf-deploy-env-db:
	@echo
	@echo Deploying the DB for the environment
	cd cloudformation && \
	aws cloudformation deploy \
  --template-file env-db.cf.yaml \
  --stack-name $(APPLICATION_NAME)-$(ENVIRONMENT_NAME)-db \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json)

.PHONY: cf-deploy-env-prisma
cf-deploy-env-prisma:
	@echo
	@echo Deploying the Prisma service for the environment
	cd cloudformation && \
	aws cloudformation deploy \
  --template-file env-prisma.cf.yaml \
  --stack-name $(APPLICATION_NAME)-$(ENVIRONMENT_NAME)-prisma \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json)

.PHONY: cf-deploy-env-apollo
cf-deploy-env-apollo:
	@echo
	@echo Deploying the Apollo service for the environment
	cd cloudformation && \
	aws cloudformation deploy \
  --template-file env-apollo.cf.yaml \
  --stack-name $(APPLICATION_NAME)-$(ENVIRONMENT_NAME)-apollo \
	--parameter-overrides $$(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' params.json)
