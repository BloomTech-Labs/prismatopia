# This layer may not be needed, still considering

brew install amazon-ecs-cli

ecs-cli configure --cluster labs19-stage --default-launch-type FARGATE --config-name labs19 --region us-east-1

ecs-cli up

