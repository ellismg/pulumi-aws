// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * The VPN Gateway data source provides details about
 * a specific VPN gateway.
 */
export function getVpnGateway(args?: GetVpnGatewayArgs): Promise<GetVpnGatewayResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:ec2/getVpnGateway:getVpnGateway", {
        "amazonSideAsn": args.amazonSideAsn,
        "attachedVpcId": args.attachedVpcId,
        "availabilityZone": args.availabilityZone,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
        "tags": args.tags,
    });
}

/**
 * A collection of arguments for invoking getVpnGateway.
 */
export interface GetVpnGatewayArgs {
    /**
     * The Autonomous System Number (ASN) for the Amazon side of the specific VPN Gateway to retrieve.
     */
    readonly amazonSideAsn?: pulumi.Input<string>;
    /**
     * The ID of a VPC attached to the specific VPN Gateway to retrieve.
     */
    readonly attachedVpcId?: pulumi.Input<string>;
    /**
     * The Availability Zone of the specific VPN Gateway to retrieve.
     */
    readonly availabilityZone?: pulumi.Input<string>;
    /**
     * Custom filter block as described below.
     */
    readonly filters?: pulumi.Input<{ name: pulumi.Input<string>, values: pulumi.Input<pulumi.Input<string>[]> }[]>;
    /**
     * The ID of the specific VPN Gateway to retrieve.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The state of the specific VPN Gateway to retrieve.
     */
    readonly state?: pulumi.Input<string>;
    /**
     * A mapping of tags, each pair of which must exactly match
     * a pair on the desired VPN Gateway.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * A collection of values returned by getVpnGateway.
 */
export interface GetVpnGatewayResult {
    readonly amazonSideAsn: string;
    readonly attachedVpcId: string;
    readonly availabilityZone: string;
    readonly id: string;
    readonly state: string;
    readonly tags: {[key: string]: any};
}
