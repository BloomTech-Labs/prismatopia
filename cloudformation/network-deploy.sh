#!/bin/sh

aws cloudformation deploy \
  --template-file network.cf.yaml \
  --stack-name pma-network \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides $(jq -r '.[] | [.ParameterKey, .ParameterValue] | join("=")' network-params.json)
