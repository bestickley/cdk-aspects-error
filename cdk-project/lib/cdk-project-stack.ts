import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CoolBucket } from "../../cdk-lib/index";

export class CdkProjectStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new CoolBucket(this, "MyCoolBucket");
  }
}
