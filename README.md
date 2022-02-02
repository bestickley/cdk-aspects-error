# CDK Aspects Bug

## Aspects don't pick up resources that have been symlinked

Steps:
1. `cd cdk-project && npm i && cd  ../..`
1. `cd cdk-lib && npm i`
1. `npm link && cd ../cdk-project`
1. `npm link cool-bucket`
1. `cdk synth`
1. Expect error to throw from aspect, ResourceChecker, but no error is thrown.