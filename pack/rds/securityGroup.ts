// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an RDS security group resource. This is only for DB instances in the
 * EC2-Classic Platform. For instances inside a VPC, use the
 * [`aws_db_instance.vpc_security_group_ids`](/docs/providers/aws/r/db_instance.html#vpc_security_group_ids)
 * attribute instead.
 */
export class SecurityGroup extends pulumi.Resource {
    /**
     * The arn of the DB security group.
     */
    public /*out*/ readonly arn: pulumi.Computed<string>;
    /**
     * The description of the DB security group. Defaults to "Managed by Terraform".
     */
    public readonly description?: pulumi.Computed<string>;
    /**
     * A list of ingress rules.
     */
    public readonly ingress: pulumi.Computed<{ cidr?: string, securityGroupId: string, securityGroupName: string, securityGroupOwnerId: string }[]>;
    /**
     * The name of the DB security group.
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags?: pulumi.Computed<{[key: string]: any}>;

    /**
     * Create a SecurityGroup resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this SecurityGroup instance
     * @param args A collection of arguments for creating this SecurityGroup intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: SecurityGroupArgs, dependsOn?: pulumi.Resource[]) {
        if (args.ingress === undefined) {
            throw new Error("Missing required property 'ingress'");
        }
        super("aws:rds/securityGroup:SecurityGroup", urnName, {
            "description": args.description,
            "ingress": args.ingress,
            "name": args.name,
            "tags": args.tags,
            "arn": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a SecurityGroup resource.
 */
export interface SecurityGroupArgs {
    /**
     * The description of the DB security group. Defaults to "Managed by Terraform".
     */
    readonly description?: pulumi.ComputedValue<string>;
    /**
     * A list of ingress rules.
     */
    readonly ingress: pulumi.ComputedValue<{ cidr?: pulumi.ComputedValue<string>, securityGroupId?: pulumi.ComputedValue<string>, securityGroupName?: pulumi.ComputedValue<string>, securityGroupOwnerId?: pulumi.ComputedValue<string> }>[];
    /**
     * The name of the DB security group.
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.ComputedValue<{[key: string]: any}>;
}

