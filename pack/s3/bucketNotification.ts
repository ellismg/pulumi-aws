// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class BucketNotification extends fabric.Resource {
    public readonly bucket: fabric.Computed<string>;
    public readonly lambdaFunction?: fabric.Computed<{ events: string[], filterPrefix?: string, filterSuffix?: string, id: string, lambdaFunctionArn?: string }[]>;
    public readonly queue?: fabric.Computed<{ events: string[], filterPrefix?: string, filterSuffix?: string, id: string, queueArn: string }[]>;
    public readonly topic?: fabric.Computed<{ events: string[], filterPrefix?: string, filterSuffix?: string, id: string, topicArn: string }[]>;

    constructor(urnName: string, args: BucketNotificationArgs, dependsOn?: fabric.Resource[]) {
        if (args.bucket === undefined) {
            throw new Error("Missing required property 'bucket'");
        }
        super("aws:s3/bucketNotification:BucketNotification", urnName, {
            "bucket": args.bucket,
            "lambdaFunction": args.lambdaFunction,
            "queue": args.queue,
            "topic": args.topic,
        }, dependsOn);
    }
}

export interface BucketNotificationArgs {
    readonly bucket: fabric.MaybeComputed<string>;
    readonly lambdaFunction?: fabric.MaybeComputed<{ events: fabric.MaybeComputed<fabric.MaybeComputed<string>>[], filterPrefix?: fabric.MaybeComputed<string>, filterSuffix?: fabric.MaybeComputed<string>, id?: fabric.MaybeComputed<string>, lambdaFunctionArn?: fabric.MaybeComputed<string> }>[];
    readonly queue?: fabric.MaybeComputed<{ events: fabric.MaybeComputed<fabric.MaybeComputed<string>>[], filterPrefix?: fabric.MaybeComputed<string>, filterSuffix?: fabric.MaybeComputed<string>, id?: fabric.MaybeComputed<string>, queueArn: fabric.MaybeComputed<string> }>[];
    readonly topic?: fabric.MaybeComputed<{ events: fabric.MaybeComputed<fabric.MaybeComputed<string>>[], filterPrefix?: fabric.MaybeComputed<string>, filterSuffix?: fabric.MaybeComputed<string>, id?: fabric.MaybeComputed<string>, topicArn: fabric.MaybeComputed<string> }>[];
}

