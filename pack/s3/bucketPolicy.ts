// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class BucketPolicy extends fabric.Resource {
    public readonly bucket: fabric.Computed<string>;
    public readonly policy: fabric.Computed<string>;

    constructor(urnName: string, args: BucketPolicyArgs, dependsOn?: fabric.Resource[]) {
        if (args.bucket === undefined) {
            throw new Error("Missing required property 'bucket'");
        }
        if (args.policy === undefined) {
            throw new Error("Missing required property 'policy'");
        }
        super("aws:s3/bucketPolicy:BucketPolicy", urnName, {
            "bucket": args.bucket,
            "policy": args.policy,
        }, dependsOn);
    }
}

export interface BucketPolicyArgs {
    readonly bucket: fabric.MaybeComputed<string>;
    readonly policy: fabric.MaybeComputed<string>;
}

