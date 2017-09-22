// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an OpsWorks permission resource.
 */
export class Permission extends pulumi.Resource {
    /**
     * Whether the user is allowed to use SSH to communicate with the instance
     */
    public readonly allowSsh: pulumi.Computed<boolean>;
    /**
     * Whether the user is allowed to use sudo to elevate privileges
     */
    public readonly allowSudo: pulumi.Computed<boolean>;
    /**
     * The computed id of the permission. Please note that this is only used internally to identify the permission. This value is not used in aws.
     */
    public /*out*/ readonly permissionId: pulumi.Computed<string>;
    /**
     * The users permission level. Mus be one of `deny`, `show`, `deploy`, `manage`, `iam_only`
     */
    public readonly level: pulumi.Computed<string>;
    /**
     * The stack to set the permissions for
     */
    public readonly stackId: pulumi.Computed<string>;
    /**
     * The user's IAM ARN to set permissions for
     */
    public readonly userArn: pulumi.Computed<string>;

    /**
     * Create a Permission resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Permission instance
     * @param args A collection of arguments for creating this Permission intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: PermissionArgs, dependsOn?: pulumi.Resource[]) {
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

/**
 * The set of arguments for constructing a Permission resource.
 */
export interface PermissionArgs {
    /**
     * Whether the user is allowed to use SSH to communicate with the instance
     */
    readonly allowSsh?: pulumi.ComputedValue<boolean>;
    /**
     * Whether the user is allowed to use sudo to elevate privileges
     */
    readonly allowSudo?: pulumi.ComputedValue<boolean>;
    /**
     * The users permission level. Mus be one of `deny`, `show`, `deploy`, `manage`, `iam_only`
     */
    readonly level?: pulumi.ComputedValue<string>;
    /**
     * The stack to set the permissions for
     */
    readonly stackId?: pulumi.ComputedValue<string>;
    /**
     * The user's IAM ARN to set permissions for
     */
    readonly userArn: pulumi.ComputedValue<string>;
}

