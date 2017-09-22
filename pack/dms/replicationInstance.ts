// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a DMS (Data Migration Service) replication instance resource. DMS replication instances can be created, updated, deleted, and imported.
 */
export class ReplicationInstance extends pulumi.Resource {
    /**
     * The amount of storage (in gigabytes) to be initially allocated for the replication instance.
     */
    public readonly allocatedStorage: pulumi.Computed<number>;
    /**
     * Indicates whether the changes should be applied immediately or during the next maintenance window. Only used when updating an existing resource.
     */
    public readonly applyImmediately?: pulumi.Computed<boolean>;
    /**
     * Indicates that minor engine upgrades will be applied automatically to the replication instance during the maintenance window.
     */
    public readonly autoMinorVersionUpgrade: pulumi.Computed<boolean>;
    /**
     * The EC2 Availability Zone that the replication instance will be created in.
     */
    public readonly availabilityZone: pulumi.Computed<string>;
    /**
     * The engine version number of the replication instance.
     */
    public readonly engineVersion: pulumi.Computed<string>;
    /**
     * The Amazon Resource Name (ARN) for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.
     */
    public readonly kmsKeyArn: pulumi.Computed<string>;
    /**
     * Specifies if the replication instance is a multi-az deployment. You cannot set the `availability_zone` parameter if the `multi_az` parameter is set to `true`.
     */
    public readonly multiAz: pulumi.Computed<boolean>;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     */
    public readonly preferredMaintenanceWindow: pulumi.Computed<string>;
    /**
     * Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address.
     */
    public readonly publiclyAccessible: pulumi.Computed<boolean>;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    public /*out*/ readonly replicationInstanceArn: pulumi.Computed<string>;
    /**
     * The compute and memory capacity of the replication instance as specified by the replication instance class. Can be one of `dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge`
     */
    public readonly replicationInstanceClass: pulumi.Computed<string>;
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string.
     */
    public readonly replicationInstanceId: pulumi.Computed<string>;
    /**
     * A list of the private IP addresses of the replication instance.
     */
    public /*out*/ readonly replicationInstancePrivateIps: pulumi.Computed<string[]>;
    /**
     * A list of the public IP addresses of the replication instance.
     */
    public /*out*/ readonly replicationInstancePublicIps: pulumi.Computed<string[]>;
    /**
     * A subnet group to associate with the replication instance.
     */
    public readonly replicationSubnetGroupId: pulumi.Computed<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags?: pulumi.Computed<{[key: string]: any}>;
    /**
     * A list of VPC security group IDs to be used with the replication instance. The VPC security groups must work with the VPC containing the replication instance.
     */
    public readonly vpcSecurityGroupIds: pulumi.Computed<string[]>;

    /**
     * Create a ReplicationInstance resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this ReplicationInstance instance
     * @param args A collection of arguments for creating this ReplicationInstance intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: ReplicationInstanceArgs, dependsOn?: pulumi.Resource[]) {
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

/**
 * The set of arguments for constructing a ReplicationInstance resource.
 */
export interface ReplicationInstanceArgs {
    /**
     * The amount of storage (in gigabytes) to be initially allocated for the replication instance.
     */
    readonly allocatedStorage?: pulumi.ComputedValue<number>;
    /**
     * Indicates whether the changes should be applied immediately or during the next maintenance window. Only used when updating an existing resource.
     */
    readonly applyImmediately?: pulumi.ComputedValue<boolean>;
    /**
     * Indicates that minor engine upgrades will be applied automatically to the replication instance during the maintenance window.
     */
    readonly autoMinorVersionUpgrade?: pulumi.ComputedValue<boolean>;
    /**
     * The EC2 Availability Zone that the replication instance will be created in.
     */
    readonly availabilityZone?: pulumi.ComputedValue<string>;
    /**
     * The engine version number of the replication instance.
     */
    readonly engineVersion?: pulumi.ComputedValue<string>;
    /**
     * The Amazon Resource Name (ARN) for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.
     */
    readonly kmsKeyArn?: pulumi.ComputedValue<string>;
    /**
     * Specifies if the replication instance is a multi-az deployment. You cannot set the `availability_zone` parameter if the `multi_az` parameter is set to `true`.
     */
    readonly multiAz?: pulumi.ComputedValue<boolean>;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     */
    readonly preferredMaintenanceWindow?: pulumi.ComputedValue<string>;
    /**
     * Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address.
     */
    readonly publiclyAccessible?: pulumi.ComputedValue<boolean>;
    /**
     * The compute and memory capacity of the replication instance as specified by the replication instance class. Can be one of `dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge`
     */
    readonly replicationInstanceClass: pulumi.ComputedValue<string>;
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string.
     */
    readonly replicationInstanceId: pulumi.ComputedValue<string>;
    /**
     * A subnet group to associate with the replication instance.
     */
    readonly replicationSubnetGroupId?: pulumi.ComputedValue<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.ComputedValue<{[key: string]: any}>;
    /**
     * A list of VPC security group IDs to be used with the replication instance. The VPC security groups must work with the VPC containing the replication instance.
     */
    readonly vpcSecurityGroupIds?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
}

