#!/bin/sh

aws cloudformation deploy --template-file network.yaml --stack-name pma-network --capabilities CAPABILITY_IAM

# aws cloudformation deploy --template-file dns.yaml --stack-name mission-control-dns --capabilities CAPABILITY_IAM