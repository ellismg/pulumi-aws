// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Permission extends fabric.Resource {
    public readonly allowSsh: fabric.Computed<boolean>;
    public readonly allowSudo: fabric.Computed<boolean>;
    public /*out*/ readonly permissionId: fabric.Computed<string>;
    public readonly level: fabric.Computed<string>;
    public readonly stackId: fabric.Computed<string>;
    public readonly userArn: fabric.Computed<string>;

    constructor(urnName: string, args: PermissionArgs, dependsOn?: fabric.Resource[]) {
        if (args.userArn === undefined) {
            throw new Error("Missing required property 'userArn'");
        }
        super("aws:opsworks/permission:Permission", urnName, {
            "allowSsh": args.allowSsh,
            "allowSudo": args.allowSudo,
            "level": args.level,
            "stackId": args.stackId,
            "userArn": args.userArn,
            "permissionId": undefined,
        }, dependsOn);
    }
}

export interface PermissionArgs {
    readonly allowSsh?: fabric.MaybeComputed<boolean>;
    readonly allowSudo?: fabric.MaybeComputed<boolean>;
    readonly level?: fabric.MaybeComputed<string>;
    readonly stackId?: fabric.MaybeComputed<string>;
    readonly userArn: fabric.MaybeComputed<string>;
}

