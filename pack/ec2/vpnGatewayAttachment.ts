// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class VpnGatewayAttachment extends fabric.Resource {
    public readonly vpcId: fabric.Computed<string>;
    public readonly vpnGatewayId: fabric.Computed<string>;

    constructor(urnName: string, args: VpnGatewayAttachmentArgs, dependsOn?: fabric.Resource[]) {
        if (args.vpcId === undefined) {
            throw new Error("Missing required property 'vpcId'");
        }
        if (args.vpnGatewayId === undefined) {
            throw new Error("Missing required property 'vpnGatewayId'");
        }
        super("aws:ec2/vpnGatewayAttachment:VpnGatewayAttachment", urnName, {
            "vpcId": args.vpcId,
            "vpnGatewayId": args.vpnGatewayId,
        }, dependsOn);
    }
}

export interface VpnGatewayAttachmentArgs {
    readonly vpcId: fabric.MaybeComputed<string>;
    readonly vpnGatewayId: fabric.MaybeComputed<string>;
}

