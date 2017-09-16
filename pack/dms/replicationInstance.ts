// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class ReplicationInstance extends fabric.Resource {
    public readonly allocatedStorage: fabric.Computed<number>;
    public readonly applyImmediately?: fabric.Computed<boolean>;
    public readonly autoMinorVersionUpgrade: fabric.Computed<boolean>;
    public readonly availabilityZone: fabric.Computed<string>;
    public readonly engineVersion: fabric.Computed<string>;
    public readonly kmsKeyArn: fabric.Computed<string>;
    public readonly multiAz: fabric.Computed<boolean>;
    public readonly preferredMaintenanceWindow: fabric.Computed<string>;
    public readonly publiclyAccessible: fabric.Computed<boolean>;
    public /*out*/ readonly replicationInstanceArn: fabric.Computed<string>;
    public readonly replicationInstanceClass: fabric.Computed<string>;
    public readonly replicationInstanceId: fabric.Computed<string>;
    public /*out*/ readonly replicationInstancePrivateIps: fabric.Computed<string[]>;
    public /*out*/ readonly replicationInstancePublicIps: fabric.Computed<string[]>;
    public readonly replicationSubnetGroupId: fabric.Computed<string>;
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    public readonly vpcSecurityGroupIds: fabric.Computed<string[]>;

    constructor(urnName: string, args: ReplicationInstanceArgs, dependsOn?: fabric.Resource[]) {
        if (args.replicationInstanceClass === undefined) {
            throw new Error("Missing required property 'replicationInstanceClass'");
        }
        if (args.replicationInstanceId === undefined) {
            throw new Error("Missing required property 'replicationInstanceId'");
        }
        super("aws:dms/replicationInstance:ReplicationInstance", urnName, {
            "allocatedStorage": args.allocatedStorage,
            "applyImmediately": args.applyImmediately,
            "autoMinorVersionUpgrade": args.autoMinorVersionUpgrade,
            "availabilityZone": args.availabilityZone,
            "engineVersion": args.engineVersion,
            "kmsKeyArn": args.kmsKeyArn,
            "multiAz": args.multiAz,
            "preferredMaintenanceWindow": args.preferredMaintenanceWindow,
            "publiclyAccessible": args.publiclyAccessible,
            "replicationInstanceClass": args.replicationInstanceClass,
            "replicationInstanceId": args.replicationInstanceId,
            "replicationSubnetGroupId": args.replicationSubnetGroupId,
            "tags": args.tags,
            "vpcSecurityGroupIds": args.vpcSecurityGroupIds,
            "replicationInstanceArn": undefined,
            "replicationInstancePrivateIps": undefined,
            "replicationInstancePublicIps": undefined,
        }, dependsOn);
    }
}

export interface ReplicationInstanceArgs {
    readonly allocatedStorage?: fabric.MaybeComputed<number>;
    readonly applyImmediately?: fabric.MaybeComputed<boolean>;
    readonly autoMinorVersionUpgrade?: fabric.MaybeComputed<boolean>;
    readonly availabilityZone?: fabric.MaybeComputed<string>;
    readonly engineVersion?: fabric.MaybeComputed<string>;
    readonly kmsKeyArn?: fabric.MaybeComputed<string>;
    readonly multiAz?: fabric.MaybeComputed<boolean>;
    readonly preferredMaintenanceWindow?: fabric.MaybeComputed<string>;
    readonly publiclyAccessible?: fabric.MaybeComputed<boolean>;
    readonly replicationInstanceClass: fabric.MaybeComputed<string>;
    readonly replicationInstanceId: fabric.MaybeComputed<string>;
    readonly replicationSubnetGroupId?: fabric.MaybeComputed<string>;
    readonly tags?: fabric.MaybeComputed<{[key: string]: any}>;
    readonly vpcSecurityGroupIds?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
}

