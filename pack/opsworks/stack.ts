// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Stack extends fabric.Resource {
    public readonly agentVersion: fabric.Property<string>;
    public readonly berkshelfVersion?: fabric.Property<string>;
    public readonly color?: fabric.Property<string>;
    public readonly configurationManagerName?: fabric.Property<string>;
    public readonly configurationManagerVersion?: fabric.Property<string>;
    public readonly customCookbooksSource: fabric.Property<{ password?: string, revision?: string, sshKey?: string, type: string, url: string, username?: string }[]>;
    public readonly customJson?: fabric.Property<string>;
    public readonly defaultAvailabilityZone: fabric.Property<string>;
    public readonly defaultInstanceProfileArn: fabric.Property<string>;
    public readonly defaultOs?: fabric.Property<string>;
    public readonly defaultRootDeviceType?: fabric.Property<string>;
    public readonly defaultSshKeyName?: fabric.Property<string>;
    public readonly defaultSubnetId: fabric.Property<string>;
    public readonly hostnameTheme?: fabric.Property<string>;
    public /*out*/ readonly stackId: fabric.Property<string>;
    public readonly manageBerkshelf?: fabric.Property<boolean>;
    public readonly name: fabric.Property<string>;
    public readonly region: fabric.Property<string>;
    public readonly serviceRoleArn: fabric.Property<string>;
    public /*out*/ readonly stackEndpoint: fabric.Property<string>;
    public readonly useCustomCookbooks?: fabric.Property<boolean>;
    public readonly useOpsworksSecurityGroups?: fabric.Property<boolean>;
    public readonly vpcId: fabric.Property<string>;

    constructor(urnName: string, args: StackArgs) {
        if (args.defaultInstanceProfileArn === undefined) {
            throw new Error("Missing required property 'defaultInstanceProfileArn'");
        }
        if (args.region === undefined) {
            throw new Error("Missing required property 'region'");
        }
        if (args.serviceRoleArn === undefined) {
            throw new Error("Missing required property 'serviceRoleArn'");
        }
        super("aws:opsworks/stack:Stack", urnName, {
            "agentVersion": args.agentVersion,
            "berkshelfVersion": args.berkshelfVersion,
            "color": args.color,
            "configurationManagerName": args.configurationManagerName,
            "configurationManagerVersion": args.configurationManagerVersion,
            "customCookbooksSource": args.customCookbooksSource,
            "customJson": args.customJson,
            "defaultAvailabilityZone": args.defaultAvailabilityZone,
            "defaultInstanceProfileArn": args.defaultInstanceProfileArn,
            "defaultOs": args.defaultOs,
            "defaultRootDeviceType": args.defaultRootDeviceType,
            "defaultSshKeyName": args.defaultSshKeyName,
            "defaultSubnetId": args.defaultSubnetId,
            "hostnameTheme": args.hostnameTheme,
            "manageBerkshelf": args.manageBerkshelf,
            "name": args.name,
            "region": args.region,
            "serviceRoleArn": args.serviceRoleArn,
            "useCustomCookbooks": args.useCustomCookbooks,
            "useOpsworksSecurityGroups": args.useOpsworksSecurityGroups,
            "vpcId": args.vpcId,
            "stackId": undefined,
            "stackEndpoint": undefined,
        });
    }
}

export interface StackArgs {
    readonly agentVersion?: fabric.PropertyValue<string>;
    readonly berkshelfVersion?: fabric.PropertyValue<string>;
    readonly color?: fabric.PropertyValue<string>;
    readonly configurationManagerName?: fabric.PropertyValue<string>;
    readonly configurationManagerVersion?: fabric.PropertyValue<string>;
    readonly customCookbooksSource?: fabric.PropertyValue<{ password?: fabric.PropertyValue<string>, revision?: fabric.PropertyValue<string>, sshKey?: fabric.PropertyValue<string>, type: fabric.PropertyValue<string>, url: fabric.PropertyValue<string>, username?: fabric.PropertyValue<string> }>[];
    readonly customJson?: fabric.PropertyValue<string>;
    readonly defaultAvailabilityZone?: fabric.PropertyValue<string>;
    readonly defaultInstanceProfileArn: fabric.PropertyValue<string>;
    readonly defaultOs?: fabric.PropertyValue<string>;
    readonly defaultRootDeviceType?: fabric.PropertyValue<string>;
    readonly defaultSshKeyName?: fabric.PropertyValue<string>;
    readonly defaultSubnetId?: fabric.PropertyValue<string>;
    readonly hostnameTheme?: fabric.PropertyValue<string>;
    readonly manageBerkshelf?: fabric.PropertyValue<boolean>;
    readonly name?: fabric.PropertyValue<string>;
    readonly region: fabric.PropertyValue<string>;
    readonly serviceRoleArn: fabric.PropertyValue<string>;
    readonly useCustomCookbooks?: fabric.PropertyValue<boolean>;
    readonly useOpsworksSecurityGroups?: fabric.PropertyValue<boolean>;
    readonly vpcId?: fabric.PropertyValue<string>;
}

