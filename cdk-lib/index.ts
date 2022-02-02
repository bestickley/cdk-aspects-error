import { Construct } from "constructs";
import { Bucket } from "aws-cdk-lib/aws-s3";

export class CoolBucket extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new Bucket(this, "CoolBucket");
  }
}