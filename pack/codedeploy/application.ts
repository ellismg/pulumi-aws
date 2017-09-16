// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Application extends fabric.Resource {
    public readonly name: fabric.Computed<string>;
    public readonly uniqueId: fabric.Computed<string>;

    constructor(urnName: string, args?: ApplicationArgs, dependsOn?: fabric.Resource[]) {
        super("aws:codedeploy/application:Application", urnName, {
            "name": args.name,
            "uniqueId": args.uniqueId,
        }, dependsOn);
    }
}

export interface ApplicationArgs {
    readonly name?: fabric.MaybeComputed<string>;
    readonly uniqueId?: fabric.MaybeComputed<string>;
}

