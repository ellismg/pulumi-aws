// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Activation extends fabric.Resource {
    public readonly description?: fabric.Computed<string>;
    public readonly expirationDate?: fabric.Computed<string>;
    public /*out*/ readonly expired: fabric.Computed<string>;
    public readonly iamRole: fabric.Computed<string>;
    public readonly name: fabric.Computed<string>;
    public /*out*/ readonly registrationCount: fabric.Computed<number>;
    public readonly registrationLimit?: fabric.Computed<number>;

    constructor(urnName: string, args: ActivationArgs, dependsOn?: fabric.Resource[]) {
        if (args.iamRole === undefined) {
            throw new Error("Missing required property 'iamRole'");
        }
        super("aws:ssm/activation:Activation", urnName, {
            "description": args.description,
            "expirationDate": args.expirationDate,
            "iamRole": args.iamRole,
            "name": args.name,
            "registrationLimit": args.registrationLimit,
            "expired": undefined,
            "registrationCount": undefined,
        }, dependsOn);
    }
}

export interface ActivationArgs {
    readonly description?: fabric.MaybeComputed<string>;
    readonly expirationDate?: fabric.MaybeComputed<string>;
    readonly iamRole: fabric.MaybeComputed<string>;
    readonly name?: fabric.MaybeComputed<string>;
    readonly registrationLimit?: fabric.MaybeComputed<number>;
}

