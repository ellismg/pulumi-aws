// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an ElastiCache Cluster resource.
 * 
 * Changes to a Cache Cluster can occur when you manually change a
 * parameter, such as `node_type`, and are reflected in the next maintenance
 * window. Because of this, Terraform may report a difference in its planning
 * phase because a modification has not yet taken place. You can use the
 * `apply_immediately` flag to instruct the service to apply the change immediately
 * (see documentation below).
 * 
 * ~> **Note:** using `apply_immediately` can result in a
 * brief downtime as the server reboots. See the AWS Docs on
 * [Modifying an ElastiCache Cache Cluster][2] for more information.
 */
export class Cluster extends pulumi.Resource {
    /**
     * Specifies whether any database modifications
     * are applied immediately, or during the next maintenance window. Default is
     * `false`. See [Amazon ElastiCache Documentation for more information.][1]
     * (Available since v0.6.0)
     */
    public readonly applyImmediately: pulumi.Computed<boolean>;
    /**
     * The Availability Zone for the cache cluster. If you want to create cache nodes in multi-az, use `availability_zones`
     */
    public readonly availabilityZone: pulumi.Computed<string>;
    /**
     * List of Availability Zones in which the cache nodes will be created. If you want to create cache nodes in single-az, use `availability_zone`
     */
    public readonly availabilityZones?: pulumi.Computed<string[]>;
    /**
     * Specifies whether the nodes in this Memcached node group are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region. Valid values for this parameter are `single-az` or `cross-az`, default is `single-az`. If you want to choose `cross-az`, `num_cache_nodes` must be greater than `1`
     */
    public readonly azMode: pulumi.Computed<string>;
    /**
     * List of node objects including `id`, `address`, `port` and `availability_zone`.
     * Referenceable e.g. as `${aws_elasticache_cluster.bar.cache_nodes.0.address}`
     */
    public /*out*/ readonly cacheNodes: pulumi.Computed<{ address: string, availabilityZone: string, id: string, port: number }[]>;
    /**
     * (Memcached only) The DNS name of the cache cluster without the port appended.
     */
    public /*out*/ readonly clusterAddress: pulumi.Computed<string>;
    /**
     * Group identifier. ElastiCache converts
     * this name to lowercase
     */
    public readonly clusterId: pulumi.Computed<string>;
    /**
     * (Memcached only) The configuration endpoint to allow host discovery.
     */
    public /*out*/ readonly configurationEndpoint: pulumi.Computed<string>;
    /**
     * Name of the cache engine to be used for this cache cluster.
     * Valid values for this parameter are `memcached` or `redis`
     */
    public readonly engine: pulumi.Computed<string>;
    /**
     * Version number of the cache engine to be used.
     * See [Selecting a Cache Engine and Version](https://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/SelectEngine.html)
     * in the AWS Documentation center for supported versions
     */
    public readonly engineVersion: pulumi.Computed<string>;
    public readonly maintenanceWindow: pulumi.Computed<string>;
    /**
     * The compute and memory capacity of the nodes. See
     * [Available Cache Node Types](https://aws.amazon.com/elasticache/details#Available_Cache_Node_Types) for
     * supported node types
     */
    public readonly nodeType: pulumi.Computed<string>;
    public readonly notificationTopicArn?: pulumi.Computed<string>;
    /**
     * The initial number of cache nodes that the
     * cache cluster will have. For Redis, this value must be 1. For Memcache, this
     * value must be between 1 and 20. If this number is reduced on subsequent runs,
     * the highest numbered nodes will be removed.
     */
    public readonly numCacheNodes: pulumi.Computed<number>;
    /**
     * Name of the parameter group to associate
     * with this cache cluster
     */
    public readonly parameterGroupName: pulumi.Computed<string>;
    /**
     * The port number on which each of the cache nodes will
     * accept connections. For Memcache the default is 11211, and for Redis the default port is 6379.
     */
    public readonly port: pulumi.Computed<number>;
    public /*out*/ readonly replicationGroupId: pulumi.Computed<string>;
    /**
     * One or more VPC security groups associated
     * with the cache cluster
     */
    public readonly securityGroupIds: pulumi.Computed<string[]>;
    /**
     * List of security group
     * names to associate with this cache cluster
     */
    public readonly securityGroupNames: pulumi.Computed<string[]>;
    public readonly snapshotArns?: pulumi.Computed<string[]>;
    /**
     * The name of a snapshot from which to restore data into the new node group.  Changing the `snapshot_name` forces a new resource.
     */
    public readonly snapshotName?: pulumi.Computed<string>;
    /**
     * The number of days for which ElastiCache will
     * retain automatic cache cluster snapshots before deleting them. For example, if you set
     * SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days
     * before being deleted. If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.
     * Please note that setting a `snapshot_retention_limit` is not supported on cache.t1.micro or cache.t2.* cache nodes
     */
    public readonly snapshotRetentionLimit?: pulumi.Computed<number>;
    /**
     * The daily time range (in UTC) during which ElastiCache will
     * begin taking a daily snapshot of your cache cluster. Example: 05:00-09:00
     */
    public readonly snapshotWindow: pulumi.Computed<string>;
    /**
     * Name of the subnet group to be used
     * for the cache cluster.
     */
    public readonly subnetGroupName: pulumi.Computed<string>;
    /**
     * A mapping of tags to assign to the resource
     */
    public readonly tags?: pulumi.Computed<{[key: string]: any}>;

    /**
     * Create a Cluster resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Cluster instance
     * @param args A collection of arguments for creating this Cluster intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: ClusterArgs, dependsOn?: pulumi.Resource[]) {
        if (args.clusterId === undefined) {
            throw new Error("Missing required property 'clusterId'");
        }
        if (args.engine === undefined) {
            throw new Error("Missing required property 'engine'");
        }
        if (args.nodeType === undefined) {
            throw new Error("Missing required property 'nodeType'");
        }
        if (args.numCacheNodes === undefined) {
            throw new Error("Missing required property 'numCacheNodes'");
        }
        if (args.port === undefined) {
            throw new Error("Missing required property 'port'");
        }
        super("aws:elasticache/cluster:Cluster", urnName, {
            "applyImmediately": args.applyImmediately,
            "availabilityZone": args.availabilityZone,
            "availabilityZones": args.availabilityZones,
            "azMode": args.azMode,
            "clusterId": args.clusterId,
            "engine": args.engine,
            "engineVersion": args.engineVersion,
            "maintenanceWindow": args.maintenanceWindow,
            "nodeType": args.nodeType,
            "notificationTopicArn": args.notificationTopicArn,
            "numCacheNodes": args.numCacheNodes,
            "parameterGroupName": args.parameterGroupName,
            "port": args.port,
            "securityGroupIds": args.securityGroupIds,
            "securityGroupNames": args.securityGroupNames,
            "snapshotArns": args.snapshotArns,
            "snapshotName": args.snapshotName,
            "snapshotRetentionLimit": args.snapshotRetentionLimit,
            "snapshotWindow": args.snapshotWindow,
            "subnetGroupName": args.subnetGroupName,
            "tags": args.tags,
            "cacheNodes": undefined,
            "clusterAddress": undefined,
            "configurationEndpoint": undefined,
            "replicationGroupId": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * Specifies whether any database modifications
     * are applied immediately, or during the next maintenance window. Default is
     * `false`. See [Amazon ElastiCache Documentation for more information.][1]
     * (Available since v0.6.0)
     */
    readonly applyImmediately?: pulumi.ComputedValue<boolean>;
    /**
     * The Availability Zone for the cache cluster. If you want to create cache nodes in multi-az, use `availability_zones`
     */
    readonly availabilityZone?: pulumi.ComputedValue<string>;
    /**
     * List of Availability Zones in which the cache nodes will be created. If you want to create cache nodes in single-az, use `availability_zone`
     */
    readonly availabilityZones?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * Specifies whether the nodes in this Memcached node group are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region. Valid values for this parameter are `single-az` or `cross-az`, default is `single-az`. If you want to choose `cross-az`, `num_cache_nodes` must be greater than `1`
     */
    readonly azMode?: pulumi.ComputedValue<string>;
    /**
     * Group identifier. ElastiCache converts
     * this name to lowercase
     */
    readonly clusterId: pulumi.ComputedValue<string>;
    /**
     * Name of the cache engine to be used for this cache cluster.
     * Valid values for this parameter are `memcached` or `redis`
     */
    readonly engine: pulumi.ComputedValue<string>;
    /**
     * Version number of the cache engine to be used.
     * See [Selecting a Cache Engine and Version](https://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/SelectEngine.html)
     * in the AWS Documentation center for supported versions
     */
    readonly engineVersion?: pulumi.ComputedValue<string>;
    readonly maintenanceWindow?: pulumi.ComputedValue<string>;
    /**
     * The compute and memory capacity of the nodes. See
     * [Available Cache Node Types](https://aws.amazon.com/elasticache/details#Available_Cache_Node_Types) for
     * supported node types
     */
    readonly nodeType: pulumi.ComputedValue<string>;
    readonly notificationTopicArn?: pulumi.ComputedValue<string>;
    /**
     * The initial number of cache nodes that the
     * cache cluster will have. For Redis, this value must be 1. For Memcache, this
     * value must be between 1 and 20. If this number is reduced on subsequent runs,
     * the highest numbered nodes will be removed.
     */
    readonly numCacheNodes: pulumi.ComputedValue<number>;
    /**
     * Name of the parameter group to associate
     * with this cache cluster
     */
    readonly parameterGroupName?: pulumi.ComputedValue<string>;
    /**
     * The port number on which each of the cache nodes will
     * accept connections. For Memcache the default is 11211, and for Redis the default port is 6379.
     */
    readonly port: pulumi.ComputedValue<number>;
    /**
     * One or more VPC security groups associated
     * with the cache cluster
     */
    readonly securityGroupIds?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * List of security group
     * names to associate with this cache cluster
     */
    readonly securityGroupNames?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    readonly snapshotArns?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * The name of a snapshot from which to restore data into the new node group.  Changing the `snapshot_name` forces a new resource.
     */
    readonly snapshotName?: pulumi.ComputedValue<string>;
    /**
     * The number of days for which ElastiCache will
     * retain automatic cache cluster snapshots before deleting them. For example, if you set
     * SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days
     * before being deleted. If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.
     * Please note that setting a `snapshot_retention_limit` is not supported on cache.t1.micro or cache.t2.* cache nodes
     */
    readonly snapshotRetentionLimit?: pulumi.ComputedValue<number>;
    /**
     * The daily time range (in UTC) during which ElastiCache will
     * begin taking a daily snapshot of your cache cluster. Example: 05:00-09:00
     */
    readonly snapshotWindow?: pulumi.ComputedValue<string>;
    /**
     * Name of the subnet group to be used
     * for the cache cluster.
     */
    readonly subnetGroupName?: pulumi.ComputedValue<string>;
    /**
     * A mapping of tags to assign to the resource
     */
    readonly tags?: pulumi.ComputedValue<{[key: string]: any}>;
}

