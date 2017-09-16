// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Domain extends fabric.Resource {
    public readonly name: fabric.Computed<string>;

    constructor(urnName: string, args?: DomainArgs, dependsOn?: fabric.Resource[]) {
        super("aws:simpledb/domain:Domain", urnName, {
            "name": args.name,
        }, dependsOn);
    }
}

export interface DomainArgs {
    readonly name?: fabric.MaybeComputed<string>;
}

