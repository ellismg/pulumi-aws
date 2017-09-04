// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class DefaultNetworkAcl extends fabric.Resource {
    public readonly defaultNetworkAclId: fabric.Property<string>;
    public readonly egress?: fabric.Property<{ action: string, cidrBlock?: string, fromPort: number, icmpCode?: number, icmpType?: number, ipv6CidrBlock?: string, protocol: string, ruleNo: number, toPort: number }[]>;
    public readonly ingress?: fabric.Property<{ action: string, cidrBlock?: string, fromPort: number, icmpCode?: number, icmpType?: number, ipv6CidrBlock?: string, protocol: string, ruleNo: number, toPort: number }[]>;
    public readonly subnetIds?: fabric.Property<string[]>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;
    public /*out*/ readonly vpcId: fabric.Property<string>;

    constructor(urnName: string, args: DefaultNetworkAclArgs) {
        if (args.defaultNetworkAclId === undefined) {
            throw new Error("Missing required property 'defaultNetworkAclId'");
        }
        super("aws:ec2/defaultNetworkAcl:DefaultNetworkAcl", urnName, {
            "defaultNetworkAclId": args.defaultNetworkAclId,
            "egress": args.egress,
            "ingress": args.ingress,
            "subnetIds": args.subnetIds,
            "tags": args.tags,
            "vpcId": undefined,
        });
    }
}

export interface DefaultNetworkAclArgs {
    readonly defaultNetworkAclId: fabric.PropertyValue<string>;
    readonly egress?: fabric.PropertyValue<{ action: fabric.PropertyValue<string>, cidrBlock?: fabric.PropertyValue<string>, fromPort: fabric.PropertyValue<number>, icmpCode?: fabric.PropertyValue<number>, icmpType?: fabric.PropertyValue<number>, ipv6CidrBlock?: fabric.PropertyValue<string>, protocol: fabric.PropertyValue<string>, ruleNo: fabric.PropertyValue<number>, toPort: fabric.PropertyValue<number> }>[];
    readonly ingress?: fabric.PropertyValue<{ action: fabric.PropertyValue<string>, cidrBlock?: fabric.PropertyValue<string>, fromPort: fabric.PropertyValue<number>, icmpCode?: fabric.PropertyValue<number>, icmpType?: fabric.PropertyValue<number>, ipv6CidrBlock?: fabric.PropertyValue<string>, protocol: fabric.PropertyValue<string>, ruleNo: fabric.PropertyValue<number>, toPort: fabric.PropertyValue<number> }>[];
    readonly subnetIds?: fabric.PropertyValue<fabric.PropertyValue<string>>[];
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
}

