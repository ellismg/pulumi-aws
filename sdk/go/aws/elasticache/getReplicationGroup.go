// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package elasticache

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to get information about an Elasticache Replication Group.
func LookupReplicationGroup(ctx *pulumi.Context, args *GetReplicationGroupArgs) (*GetReplicationGroupResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["replicationGroupId"] = args.ReplicationGroupId
	}
	outputs, err := ctx.Invoke("aws:elasticache/getReplicationGroup:getReplicationGroup", inputs)
	if err != nil {
		return nil, err
	}
	return &GetReplicationGroupResult{
		AuthTokenEnabled: outputs["authTokenEnabled"],
		AutomaticFailoverEnabled: outputs["automaticFailoverEnabled"],
		ConfigurationEndpointAddress: outputs["configurationEndpointAddress"],
		NodeType: outputs["nodeType"],
		NumberCacheClusters: outputs["numberCacheClusters"],
		Port: outputs["port"],
		PrimaryEndpointAddress: outputs["primaryEndpointAddress"],
		ReplicationGroupDescription: outputs["replicationGroupDescription"],
		SnapshotRetentionLimit: outputs["snapshotRetentionLimit"],
		SnapshotWindow: outputs["snapshotWindow"],
	}, nil
}

// A collection of arguments for invoking getReplicationGroup.
type GetReplicationGroupArgs struct {
	// The identifier for the replication group.
	ReplicationGroupId interface{}
}

// A collection of values returned by getReplicationGroup.
type GetReplicationGroupResult struct {
	// A flag that enables using an AuthToken (password) when issuing Redis commands.
	AuthTokenEnabled interface{}
	// A flag whether a read-only replica will be automatically promoted to read/write primary if the existing primary fails.
	AutomaticFailoverEnabled interface{}
	// The configuration endpoint address to allow host discovery.
	ConfigurationEndpointAddress interface{}
	// The cluster node type.
	NodeType interface{}
	// The number of cache clusters that the replication group has.
	NumberCacheClusters interface{}
	// The port number on which the configuration endpoint will accept connections.
	Port interface{}
	// The endpoint of the primary node in this node group (shard).
	PrimaryEndpointAddress interface{}
	// The description of the replication group.
	ReplicationGroupDescription interface{}
	// The number of days for which ElastiCache retains automatic cache cluster snapshots before deleting them.
	SnapshotRetentionLimit interface{}
	// The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
	SnapshotWindow interface{}
}
