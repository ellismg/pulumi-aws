// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * This resource attaches a security group to an Elastic Network Interface (ENI).
 * It can be used to attach a security group to any existing ENI, be it a
 * secondary ENI or one attached as the primary interface on an instance.
 * 
 * ~> **NOTE on instances, interfaces, and security groups:** Terraform currently
 * provides the capability to assign security groups via the [`aws_instance`][1]
 * and the [`aws_network_interface`][2] resources. Using this resource in
 * conjunction with security groups provided in-line in those resources will cause
 * conflicts, and will lead to spurious diffs and undefined behavior - please use
 * one or the other.
 * 
 * [1]: /docs/providers/aws/d/instance.html
 * [2]: /docs/providers/aws/r/network_interface.html
 */
export class NetworkInterfaceSecurityGroupAttachment extends pulumi.Resource {
    /**
     * The ID of the network interface to attach to.
     */
    public readonly networkInterfaceId: pulumi.Computed<string>;
    /**
     * The ID of the security group.
     */
    public readonly securityGroupId: pulumi.Computed<string>;

    /**
     * Create a NetworkInterfaceSecurityGroupAttachment resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this NetworkInterfaceSecurityGroupAttachment instance
     * @param args A collection of arguments for creating this NetworkInterfaceSecurityGroupAttachment intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: NetworkInterfaceSecurityGroupAttachmentArgs, dependsOn?: pulumi.Resource[]) {
        if (args.networkInterfaceId === undefined) {
            throw new Error("Missing required property 'networkInterfaceId'");
        }
        if (args.securityGroupId === undefined) {
            throw new Error("Missing required property 'securityGroupId'");
        }
        super("aws:ec2/networkInterfaceSecurityGroupAttachment:NetworkInterfaceSecurityGroupAttachment", urnName, {
            "networkInterfaceId": args.networkInterfaceId,
            "securityGroupId": args.securityGroupId,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a NetworkInterfaceSecurityGroupAttachment resource.
 */
export interface NetworkInterfaceSecurityGroupAttachmentArgs {
    /**
     * The ID of the network interface to attach to.
     */
    readonly networkInterfaceId: pulumi.ComputedValue<string>;
    /**
     * The ID of the security group.
     */
    readonly securityGroupId: pulumi.ComputedValue<string>;
}

