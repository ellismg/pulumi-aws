// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class S3BucketPolicy extends fabric.Resource {
    public readonly bucket: fabric.Property<string>;
    public readonly policy: fabric.Property<string>;

    constructor(urnName: string, args: S3BucketPolicyArgs) {
        if (args.bucket === undefined) {
            throw new Error("Missing required property 'bucket'");
        }
        if (args.policy === undefined) {
            throw new Error("Missing required property 'policy'");
        }
        super("aws:s3/s3BucketPolicy:S3BucketPolicy", urnName, {
            "bucket": args.bucket,
            "policy": args.policy,
        });
    }
}

export interface S3BucketPolicyArgs {
    readonly bucket: fabric.PropertyValue<string>;
    readonly policy: fabric.PropertyValue<string>;
}
