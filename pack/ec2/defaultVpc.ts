// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class DefaultVpc extends fabric.Resource {
    public /*out*/ readonly assignGeneratedIpv6CidrBlock: fabric.Property<boolean>;
    public /*out*/ readonly cidrBlock: fabric.Property<string>;
    public /*out*/ readonly defaultNetworkAclId: fabric.Property<string>;
    public /*out*/ readonly defaultRouteTableId: fabric.Property<string>;
    public /*out*/ readonly defaultSecurityGroupId: fabric.Property<string>;
    public /*out*/ readonly dhcpOptionsId: fabric.Property<string>;
    public readonly enableClassiclink: fabric.Property<boolean>;
    public readonly enableClassiclinkDnsSupport: fabric.Property<boolean>;
    public readonly enableDnsHostnames: fabric.Property<boolean>;
    public readonly enableDnsSupport?: fabric.Property<boolean>;
    public /*out*/ readonly instanceTenancy: fabric.Property<string>;
    public /*out*/ readonly ipv6AssociationId: fabric.Property<string>;
    public /*out*/ readonly ipv6CidrBlock: fabric.Property<string>;
    public /*out*/ readonly mainRouteTableId: fabric.Property<string>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;

    constructor(urnName: string, args: DefaultVpcArgs) {
        super("aws:ec2/defaultVpc:DefaultVpc", urnName, {
            "enableClassiclink": args.enableClassiclink,
            "enableClassiclinkDnsSupport": args.enableClassiclinkDnsSupport,
            "enableDnsHostnames": args.enableDnsHostnames,
            "enableDnsSupport": args.enableDnsSupport,
            "tags": args.tags,
            "assignGeneratedIpv6CidrBlock": undefined,
            "cidrBlock": undefined,
            "defaultNetworkAclId": undefined,
            "defaultRouteTableId": undefined,
            "defaultSecurityGroupId": undefined,
            "dhcpOptionsId": undefined,
            "instanceTenancy": undefined,
            "ipv6AssociationId": undefined,
            "ipv6CidrBlock": undefined,
            "mainRouteTableId": undefined,
        });
    }
}

export interface DefaultVpcArgs {
    readonly enableClassiclink?: fabric.PropertyValue<boolean>;
    readonly enableClassiclinkDnsSupport?: fabric.PropertyValue<boolean>;
    readonly enableDnsHostnames?: fabric.PropertyValue<boolean>;
    readonly enableDnsSupport?: fabric.PropertyValue<boolean>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
}

