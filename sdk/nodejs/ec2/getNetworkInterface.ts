// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Use this data source to get information about a Network Interface.
 */
export function getNetworkInterface(args?: GetNetworkInterfaceArgs): Promise<GetNetworkInterfaceResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:ec2/getNetworkInterface:getNetworkInterface", {
        "filters": args.filters,
        "id": args.id,
        "tags": args.tags,
    });
}

/**
 * A collection of arguments for invoking getNetworkInterface.
 */
export interface GetNetworkInterfaceArgs {
    /**
     * One or more name/value pairs to filter off of. There are several valid keys, for a full reference, check out [describe-network-interfaces](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-network-interfaces.html) in the AWS CLI reference.
     */
    readonly filters?: pulumi.Input<{ name: pulumi.Input<string>, values: pulumi.Input<pulumi.Input<string>[]> }[]>;
    /**
     * The identifier for the network interface.
     */
    readonly id?: pulumi.Input<string>;
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * A collection of values returned by getNetworkInterface.
 */
export interface GetNetworkInterfaceResult {
    /**
     * The association information for an Elastic IP address (IPv4) associated with the network interface. See supported fields below.
     */
    readonly associations: { allocationId: string, associationId: string, ipOwnerId: string, publicDnsName: string, publicIp: string }[];
    readonly attachments: { attachmentId: string, deviceIndex: number, instanceId: string, instanceOwnerId: string }[];
    /**
     * The Availability Zone.
     */
    readonly availabilityZone: string;
    readonly description: string;
    readonly id: string;
    /**
     * The type of interface.
     */
    readonly interfaceType: string;
    /**
     * List of IPv6 addresses to assign to the ENI.
     */
    readonly ipv6Addresses: string[];
    /**
     * The MAC address.
     */
    readonly macAddress: string;
    /**
     * The AWS account ID of the owner of the network interface.
     */
    readonly ownerId: string;
    readonly privateDnsName: string;
    readonly privateIp: string;
    readonly privateIps: string[];
    /**
     * The ID of the entity that launched the instance on your behalf.
     */
    readonly requesterId: string;
    readonly securityGroups: string[];
    readonly subnetId: string;
    readonly tags: {[key: string]: any};
    readonly vpcId: string;
}
