// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class SpotFleetRequest extends fabric.Resource {
    public readonly allocationStrategy?: fabric.Property<string>;
    public /*out*/ readonly clientToken: fabric.Property<string>;
    public readonly excessCapacityTerminationPolicy?: fabric.Property<string>;
    public readonly iamFleetRole: fabric.Property<string>;
    public readonly launchSpecification: fabric.Property<{ ami: string, associatePublicIpAddress?: boolean, availabilityZone: string, ebsBlockDevice: { deleteOnTermination?: boolean, deviceName: string, encrypted: boolean, iops: number, snapshotId: string, volumeSize: number, volumeType: string }[], ebsOptimized?: boolean, ephemeralBlockDevice: { deviceName: string, virtualName: string }[], iamInstanceProfile?: string, instanceType: string, keyName: string, monitoring?: boolean, placementGroup: string, placementTenancy?: string, rootBlockDevice: { deleteOnTermination?: boolean, iops: number, volumeSize: number, volumeType: string }[], spotPrice?: string, subnetId: string, userData?: string, vpcSecurityGroupIds: string[], weightedCapacity?: string }[]>;
    public readonly replaceUnhealthyInstances?: fabric.Property<boolean>;
    public readonly spotPrice: fabric.Property<string>;
    public /*out*/ readonly spotRequestState: fabric.Property<string>;
    public readonly targetCapacity: fabric.Property<number>;
    public readonly terminateInstancesWithExpiration?: fabric.Property<boolean>;
    public readonly validFrom?: fabric.Property<string>;
    public readonly validUntil?: fabric.Property<string>;

    constructor(urnName: string, args: SpotFleetRequestArgs) {
        if (args.iamFleetRole === undefined) {
            throw new Error("Missing required property 'iamFleetRole'");
        }
        if (args.launchSpecification === undefined) {
            throw new Error("Missing required property 'launchSpecification'");
        }
        if (args.spotPrice === undefined) {
            throw new Error("Missing required property 'spotPrice'");
        }
        if (args.targetCapacity === undefined) {
            throw new Error("Missing required property 'targetCapacity'");
        }
        super("aws:ec2/spotFleetRequest:SpotFleetRequest", urnName, {
            "allocationStrategy": args.allocationStrategy,
            "excessCapacityTerminationPolicy": args.excessCapacityTerminationPolicy,
            "iamFleetRole": args.iamFleetRole,
            "launchSpecification": args.launchSpecification,
            "replaceUnhealthyInstances": args.replaceUnhealthyInstances,
            "spotPrice": args.spotPrice,
            "targetCapacity": args.targetCapacity,
            "terminateInstancesWithExpiration": args.terminateInstancesWithExpiration,
            "validFrom": args.validFrom,
            "validUntil": args.validUntil,
            "clientToken": undefined,
            "spotRequestState": undefined,
        });
    }
}

export interface SpotFleetRequestArgs {
    readonly allocationStrategy?: fabric.PropertyValue<string>;
    readonly excessCapacityTerminationPolicy?: fabric.PropertyValue<string>;
    readonly iamFleetRole: fabric.PropertyValue<string>;
    readonly launchSpecification: fabric.PropertyValue<{ ami: fabric.PropertyValue<string>, associatePublicIpAddress?: fabric.PropertyValue<boolean>, availabilityZone?: fabric.PropertyValue<string>, ebsBlockDevice?: fabric.PropertyValue<{ deleteOnTermination?: fabric.PropertyValue<boolean>, deviceName: fabric.PropertyValue<string>, encrypted?: fabric.PropertyValue<boolean>, iops?: fabric.PropertyValue<number>, snapshotId?: fabric.PropertyValue<string>, volumeSize?: fabric.PropertyValue<number>, volumeType?: fabric.PropertyValue<string> }>[], ebsOptimized?: fabric.PropertyValue<boolean>, ephemeralBlockDevice?: fabric.PropertyValue<{ deviceName: fabric.PropertyValue<string>, virtualName: fabric.PropertyValue<string> }>[], iamInstanceProfile?: fabric.PropertyValue<string>, instanceType: fabric.PropertyValue<string>, keyName?: fabric.PropertyValue<string>, monitoring?: fabric.PropertyValue<boolean>, placementGroup?: fabric.PropertyValue<string>, placementTenancy?: fabric.PropertyValue<string>, rootBlockDevice?: fabric.PropertyValue<{ deleteOnTermination?: fabric.PropertyValue<boolean>, iops?: fabric.PropertyValue<number>, volumeSize?: fabric.PropertyValue<number>, volumeType?: fabric.PropertyValue<string> }>[], spotPrice?: fabric.PropertyValue<string>, subnetId?: fabric.PropertyValue<string>, userData?: fabric.PropertyValue<string>, vpcSecurityGroupIds?: fabric.PropertyValue<fabric.PropertyValue<string>>[], weightedCapacity?: fabric.PropertyValue<string> }>[];
    readonly replaceUnhealthyInstances?: fabric.PropertyValue<boolean>;
    readonly spotPrice: fabric.PropertyValue<string>;
    readonly targetCapacity: fabric.PropertyValue<number>;
    readonly terminateInstancesWithExpiration?: fabric.PropertyValue<boolean>;
    readonly validFrom?: fabric.PropertyValue<string>;
    readonly validUntil?: fabric.PropertyValue<string>;
}

