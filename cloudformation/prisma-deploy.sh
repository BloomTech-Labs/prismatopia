#!/bin/sh

aws cloudformation deploy \
  --template-file prisma.cf.yaml \
  --stack-name labs19-prisma \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides $(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' prisma-params.json)
