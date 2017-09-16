// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class MountTarget extends fabric.Resource {
    public /*out*/ readonly dnsName: fabric.Computed<string>;
    public readonly fileSystemId: fabric.Computed<string>;
    public readonly ipAddress: fabric.Computed<string>;
    public /*out*/ readonly networkInterfaceId: fabric.Computed<string>;
    public readonly securityGroups: fabric.Computed<string[]>;
    public readonly subnetId: fabric.Computed<string>;

    constructor(urnName: string, args: MountTargetArgs, dependsOn?: fabric.Resource[]) {
        if (args.fileSystemId === undefined) {
            throw new Error("Missing required property 'fileSystemId'");
        }
        if (args.subnetId === undefined) {
            throw new Error("Missing required property 'subnetId'");
        }
        super("aws:efs/mountTarget:MountTarget", urnName, {
            "fileSystemId": args.fileSystemId,
            "ipAddress": args.ipAddress,
            "securityGroups": args.securityGroups,
            "subnetId": args.subnetId,
            "dnsName": undefined,
            "networkInterfaceId": undefined,
        }, dependsOn);
    }
}

export interface MountTargetArgs {
    readonly fileSystemId: fabric.MaybeComputed<string>;
    readonly ipAddress?: fabric.MaybeComputed<string>;
    readonly securityGroups?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly subnetId: fabric.MaybeComputed<string>;
}

