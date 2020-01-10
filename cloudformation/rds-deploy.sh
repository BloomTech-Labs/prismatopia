#!/bin/sh

aws cloudformation deploy \
  --template-file rds.cf.yaml \
  --stack-name labs19-rds \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides $(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' rds-params.json)
