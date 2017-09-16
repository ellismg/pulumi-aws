// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class LogStream extends fabric.Resource {
    public /*out*/ readonly arn: fabric.Computed<string>;
    public readonly logGroupName: fabric.Computed<string>;
    public readonly name: fabric.Computed<string>;

    constructor(urnName: string, args: LogStreamArgs, dependsOn?: fabric.Resource[]) {
        if (args.logGroupName === undefined) {
            throw new Error("Missing required property 'logGroupName'");
        }
        super("aws:cloudwatch/logStream:LogStream", urnName, {
            "logGroupName": args.logGroupName,
            "name": args.name,
            "arn": undefined,
        }, dependsOn);
    }
}

export interface LogStreamArgs {
    readonly logGroupName: fabric.MaybeComputed<string>;
    readonly name?: fabric.MaybeComputed<string>;
}

