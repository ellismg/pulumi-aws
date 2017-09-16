// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class NetworkInterface extends fabric.Resource {
    public readonly attachment: fabric.Computed<{ attachmentId: string, deviceIndex: number, instance: string }[]>;
    public readonly description?: fabric.Computed<string>;
    public readonly privateIp: fabric.Computed<string>;
    public readonly privateIps: fabric.Computed<string[]>;
    public readonly privateIpsCount: fabric.Computed<number>;
    public readonly securityGroups: fabric.Computed<string[]>;
    public readonly sourceDestCheck?: fabric.Computed<boolean>;
    public readonly subnetId: fabric.Computed<string>;
    public readonly tags?: fabric.Computed<{[key: string]: any}>;

    constructor(urnName: string, args: NetworkInterfaceArgs, dependsOn?: fabric.Resource[]) {
        if (args.subnetId === undefined) {
            throw new Error("Missing required property 'subnetId'");
        }
        super("aws:ec2/networkInterface:NetworkInterface", urnName, {
            "attachment": args.attachment,
            "description": args.description,
            "privateIp": args.privateIp,
            "privateIps": args.privateIps,
            "privateIpsCount": args.privateIpsCount,
            "securityGroups": args.securityGroups,
            "sourceDestCheck": args.sourceDestCheck,
            "subnetId": args.subnetId,
            "tags": args.tags,
        }, dependsOn);
    }
}

export interface NetworkInterfaceArgs {
    readonly attachment?: fabric.MaybeComputed<{ attachmentId?: fabric.MaybeComputed<string>, deviceIndex: fabric.MaybeComputed<number>, instance: fabric.MaybeComputed<string> }>[];
    readonly description?: fabric.MaybeComputed<string>;
    readonly privateIp?: fabric.MaybeComputed<string>;
    readonly privateIps?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly privateIpsCount?: fabric.MaybeComputed<number>;
    readonly securityGroups?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly sourceDestCheck?: fabric.MaybeComputed<boolean>;
    readonly subnetId: fabric.MaybeComputed<string>;
    readonly tags?: fabric.MaybeComputed<{[key: string]: any}>;
}

