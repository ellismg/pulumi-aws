// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class ClusterInstance extends fabric.Resource {
    public readonly applyImmediately: fabric.Property<boolean>;
    public readonly autoMinorVersionUpgrade?: fabric.Property<boolean>;
    public readonly clusterIdentifier: fabric.Property<string>;
    public readonly dbParameterGroupName: fabric.Property<string>;
    public readonly dbSubnetGroupName: fabric.Property<string>;
    public /*out*/ readonly dbiResourceId: fabric.Property<string>;
    public /*out*/ readonly endpoint: fabric.Property<string>;
    public readonly identifier: fabric.Property<string>;
    public readonly identifierPrefix: fabric.Property<string>;
    public readonly instanceClass: fabric.Property<string>;
    public /*out*/ readonly kmsKeyId: fabric.Property<string>;
    public readonly monitoringInterval?: fabric.Property<number>;
    public readonly monitoringRoleArn: fabric.Property<string>;
    public /*out*/ readonly port: fabric.Property<number>;
    public readonly preferredBackupWindow: fabric.Property<string>;
    public readonly preferredMaintenanceWindow: fabric.Property<string>;
    public readonly promotionTier?: fabric.Property<number>;
    public readonly publiclyAccessible?: fabric.Property<boolean>;
    public /*out*/ readonly storageEncrypted: fabric.Property<boolean>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;
    public /*out*/ readonly writer: fabric.Property<boolean>;

    constructor(urnName: string, args: ClusterInstanceArgs) {
        if (args.clusterIdentifier === undefined) {
            throw new Error("Missing required property 'clusterIdentifier'");
        }
        if (args.instanceClass === undefined) {
            throw new Error("Missing required property 'instanceClass'");
        }
        super("aws:rds/clusterInstance:ClusterInstance", urnName, {
            "applyImmediately": args.applyImmediately,
            "autoMinorVersionUpgrade": args.autoMinorVersionUpgrade,
            "clusterIdentifier": args.clusterIdentifier,
            "dbParameterGroupName": args.dbParameterGroupName,
            "dbSubnetGroupName": args.dbSubnetGroupName,
            "identifier": args.identifier,
            "identifierPrefix": args.identifierPrefix,
            "instanceClass": args.instanceClass,
            "monitoringInterval": args.monitoringInterval,
            "monitoringRoleArn": args.monitoringRoleArn,
            "preferredBackupWindow": args.preferredBackupWindow,
            "preferredMaintenanceWindow": args.preferredMaintenanceWindow,
            "promotionTier": args.promotionTier,
            "publiclyAccessible": args.publiclyAccessible,
            "tags": args.tags,
            "dbiResourceId": undefined,
            "endpoint": undefined,
            "kmsKeyId": undefined,
            "port": undefined,
            "storageEncrypted": undefined,
            "writer": undefined,
        });
    }
}

export interface ClusterInstanceArgs {
    readonly applyImmediately?: fabric.PropertyValue<boolean>;
    readonly autoMinorVersionUpgrade?: fabric.PropertyValue<boolean>;
    readonly clusterIdentifier: fabric.PropertyValue<string>;
    readonly dbParameterGroupName?: fabric.PropertyValue<string>;
    readonly dbSubnetGroupName?: fabric.PropertyValue<string>;
    readonly identifier?: fabric.PropertyValue<string>;
    readonly identifierPrefix?: fabric.PropertyValue<string>;
    readonly instanceClass: fabric.PropertyValue<string>;
    readonly monitoringInterval?: fabric.PropertyValue<number>;
    readonly monitoringRoleArn?: fabric.PropertyValue<string>;
    readonly preferredBackupWindow?: fabric.PropertyValue<string>;
    readonly preferredMaintenanceWindow?: fabric.PropertyValue<string>;
    readonly promotionTier?: fabric.PropertyValue<number>;
    readonly publiclyAccessible?: fabric.PropertyValue<boolean>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
}

