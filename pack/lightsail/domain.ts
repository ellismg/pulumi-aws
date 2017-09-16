// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Domain extends fabric.Resource {
    public /*out*/ readonly arn: fabric.Computed<string>;
    public readonly domainName: fabric.Computed<string>;

    constructor(urnName: string, args: DomainArgs, dependsOn?: fabric.Resource[]) {
        if (args.domainName === undefined) {
            throw new Error("Missing required property 'domainName'");
        }
        super("aws:lightsail/domain:Domain", urnName, {
            "domainName": args.domainName,
            "arn": undefined,
        }, dependsOn);
    }
}

export interface DomainArgs {
    readonly domainName: fabric.MaybeComputed<string>;
}

