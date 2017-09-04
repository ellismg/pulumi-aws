// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {ARN} from "../index";

export class Role extends fabric.Resource {
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly assumeRolePolicy: fabric.Property<string>;
    public /*out*/ readonly createDate: fabric.Property<string>;
    public readonly description?: fabric.Property<string>;
    public readonly forceDetachPolicies?: fabric.Property<boolean>;
    public readonly name: fabric.Property<string>;
    public readonly namePrefix?: fabric.Property<string>;
    public readonly path?: fabric.Property<string>;
    public /*out*/ readonly uniqueId: fabric.Property<string>;

    constructor(urnName: string, args: RoleArgs) {
        if (args.assumeRolePolicy === undefined) {
            throw new Error("Missing required property 'assumeRolePolicy'");
        }
        super("aws:iam/role:Role", urnName, {
            "assumeRolePolicy": args.assumeRolePolicy,
            "description": args.description,
            "forceDetachPolicies": args.forceDetachPolicies,
            "name": args.name,
            "namePrefix": args.namePrefix,
            "path": args.path,
            "arn": undefined,
            "createDate": undefined,
            "uniqueId": undefined,
        });
    }
}

export interface RoleArgs {
    readonly assumeRolePolicy: fabric.PropertyValue<string>;
    readonly description?: fabric.PropertyValue<string>;
    readonly forceDetachPolicies?: fabric.PropertyValue<boolean>;
    readonly name?: fabric.PropertyValue<string>;
    readonly namePrefix?: fabric.PropertyValue<string>;
    readonly path?: fabric.PropertyValue<string>;
}

