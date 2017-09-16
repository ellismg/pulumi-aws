// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class ReceiptFilter extends fabric.Resource {
    public readonly cidr: fabric.Computed<string>;
    public readonly name: fabric.Computed<string>;
    public readonly policy: fabric.Computed<string>;

    constructor(urnName: string, args: ReceiptFilterArgs, dependsOn?: fabric.Resource[]) {
        if (args.cidr === undefined) {
            throw new Error("Missing required property 'cidr'");
        }
        if (args.policy === undefined) {
            throw new Error("Missing required property 'policy'");
        }
        super("aws:ses/receiptFilter:ReceiptFilter", urnName, {
            "cidr": args.cidr,
            "name": args.name,
            "policy": args.policy,
        }, dependsOn);
    }
}

export interface ReceiptFilterArgs {
    readonly cidr: fabric.MaybeComputed<string>;
    readonly name?: fabric.MaybeComputed<string>;
    readonly policy: fabric.MaybeComputed<string>;
}

