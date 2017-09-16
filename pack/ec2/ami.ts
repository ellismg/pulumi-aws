// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Ami extends fabric.Resource {
    public readonly architecture?: fabric.Computed<string>;
    public readonly description?: fabric.Computed<string>;
    public readonly ebsBlockDevice: fabric.Computed<{ deleteOnTermination?: boolean, deviceName: string, encrypted?: boolean, iops?: number, snapshotId?: string, volumeSize: number, volumeType?: string }[]>;
    public readonly ephemeralBlockDevice: fabric.Computed<{ deviceName: string, virtualName: string }[]>;
    public /*out*/ readonly amiId: fabric.Computed<string>;
    public readonly imageLocation: fabric.Computed<string>;
    public readonly kernelId?: fabric.Computed<string>;
    public /*out*/ readonly manageEbsSnapshots: fabric.Computed<boolean>;
    public readonly name: fabric.Computed<string>;
    public readonly ramdiskId?: fabric.Computed<string>;
    public readonly rootDeviceName?: fabric.Computed<string>;
    public readonly sriovNetSupport?: fabric.Computed<string>;
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    public readonly virtualizationType?: fabric.Computed<string>;

    constructor(urnName: string, args?: AmiArgs, dependsOn?: fabric.Resource[]) {
        super("aws:ec2/ami:Ami", urnName, {
            "architecture": args.architecture,
            "description": args.description,
            "ebsBlockDevice": args.ebsBlockDevice,
            "ephemeralBlockDevice": args.ephemeralBlockDevice,
            "imageLocation": args.imageLocation,
            "kernelId": args.kernelId,
            "name": args.name,
            "ramdiskId": args.ramdiskId,
            "rootDeviceName": args.rootDeviceName,
            "sriovNetSupport": args.sriovNetSupport,
            "tags": args.tags,
            "virtualizationType": args.virtualizationType,
            "amiId": undefined,
            "manageEbsSnapshots": undefined,
        }, dependsOn);
    }
}

export interface AmiArgs {
    readonly architecture?: fabric.MaybeComputed<string>;
    readonly description?: fabric.MaybeComputed<string>;
    readonly ebsBlockDevice?: fabric.MaybeComputed<{ deleteOnTermination?: fabric.MaybeComputed<boolean>, deviceName: fabric.MaybeComputed<string>, encrypted?: fabric.MaybeComputed<boolean>, iops?: fabric.MaybeComputed<number>, snapshotId?: fabric.MaybeComputed<string>, volumeSize?: fabric.MaybeComputed<number>, volumeType?: fabric.MaybeComputed<string> }>[];
    readonly ephemeralBlockDevice?: fabric.MaybeComputed<{ deviceName: fabric.MaybeComputed<string>, virtualName: fabric.MaybeComputed<string> }>[];
    readonly imageLocation?: fabric.MaybeComputed<string>;
    readonly kernelId?: fabric.MaybeComputed<string>;
    readonly name?: fabric.MaybeComputed<string>;
    readonly ramdiskId?: fabric.MaybeComputed<string>;
    readonly rootDeviceName?: fabric.MaybeComputed<string>;
    readonly sriovNetSupport?: fabric.MaybeComputed<string>;
    readonly tags?: fabric.MaybeComputed<{[key: string]: any}>;
    readonly virtualizationType?: fabric.MaybeComputed<string>;
}

