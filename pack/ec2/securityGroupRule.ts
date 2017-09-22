// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a security group rule resource. Represents a single `ingress` or
 * `egress` group rule, which can be added to external Security Groups.
 * 
 * ~> **NOTE on Security Groups and Security Group Rules:** Terraform currently
 * provides both a standalone Security Group Rule resource (a single `ingress` or
 * `egress` rule), and a [Security Group resource](security_group.html) with `ingress` and `egress` rules
 * defined in-line. At this time you cannot use a Security Group with in-line rules
 * in conjunction with any Security Group Rule resources. Doing so will cause
 * a conflict of rule settings and will overwrite rules.
 */
export class SecurityGroupRule extends pulumi.Resource {
    /**
     * List of CIDR blocks. Cannot be specified with `source_security_group_id`.
     */
    public readonly cidrBlocks?: pulumi.Computed<string[]>;
    /**
     * The start port (or ICMP type number if protocol is "icmp").
     */
    public readonly fromPort: pulumi.Computed<number>;
    /**
     * List of IPv6 CIDR blocks.
     */
    public readonly ipv6CidrBlocks?: pulumi.Computed<string[]>;
    /**
     * List of prefix list IDs (for allowing access to VPC endpoints).
     * Only valid with `egress`.
     */
    public readonly prefixListIds?: pulumi.Computed<string[]>;
    /**
     * The protocol. If not icmp, tcp, udp, or all use the [protocol number](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)
     */
    public readonly protocol: pulumi.Computed<string>;
    /**
     * The security group to apply this rule to.
     */
    public readonly securityGroupId: pulumi.Computed<string>;
    /**
     * If true, the security group itself will be added as
     * a source to this ingress rule.
     */
    public readonly self?: pulumi.Computed<boolean>;
    /**
     * The security group id to allow access to/from,
     * depending on the `type`. Cannot be specified with `cidr_blocks`.
     */
    public readonly sourceSecurityGroupId: pulumi.Computed<string>;
    /**
     * The end port (or ICMP code if protocol is "icmp").
     */
    public readonly toPort: pulumi.Computed<number>;
    /**
     * The type of rule being created. Valid options are `ingress` (inbound)
     * or `egress` (outbound).
     */
    public readonly type: pulumi.Computed<string>;

    /**
     * Create a SecurityGroupRule resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this SecurityGroupRule instance
     * @param args A collection of arguments for creating this SecurityGroupRule intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: SecurityGroupRuleArgs, dependsOn?: pulumi.Resource[]) {
        if (args.fromPort === undefined) {
            throw new Error("Missing required property 'fromPort'");
        }
        if (args.protocol === undefined) {
            throw new Error("Missing required property 'protocol'");
        }
        if (args.securityGroupId === undefined) {
            throw new Error("Missing required property 'securityGroupId'");
        }
        if (args.toPort === undefined) {
            throw new Error("Missing required property 'toPort'");
        }
        if (args.type === undefined) {
            throw new Error("Missing required property 'type'");
        }
        super("aws:ec2/securityGroupRule:SecurityGroupRule", urnName, {
            "cidrBlocks": args.cidrBlocks,
            "fromPort": args.fromPort,
            "ipv6CidrBlocks": args.ipv6CidrBlocks,
            "prefixListIds": args.prefixListIds,
            "protocol": args.protocol,
            "securityGroupId": args.securityGroupId,
            "self": args.self,
            "sourceSecurityGroupId": args.sourceSecurityGroupId,
            "toPort": args.toPort,
            "type": args.type,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a SecurityGroupRule resource.
 */
export interface SecurityGroupRuleArgs {
    /**
     * List of CIDR blocks. Cannot be specified with `source_security_group_id`.
     */
    readonly cidrBlocks?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * The start port (or ICMP type number if protocol is "icmp").
     */
    readonly fromPort: pulumi.ComputedValue<number>;
    /**
     * List of IPv6 CIDR blocks.
     */
    readonly ipv6CidrBlocks?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * List of prefix list IDs (for allowing access to VPC endpoints).
     * Only valid with `egress`.
     */
    readonly prefixListIds?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * The protocol. If not icmp, tcp, udp, or all use the [protocol number](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)
     */
    readonly protocol: pulumi.ComputedValue<string>;
    /**
     * The security group to apply this rule to.
     */
    readonly securityGroupId: pulumi.ComputedValue<string>;
    /**
     * If true, the security group itself will be added as
     * a source to this ingress rule.
     */
    readonly self?: pulumi.ComputedValue<boolean>;
    /**
     * The security group id to allow access to/from,
     * depending on the `type`. Cannot be specified with `cidr_blocks`.
     */
    readonly sourceSecurityGroupId?: pulumi.ComputedValue<string>;
    /**
     * The end port (or ICMP code if protocol is "icmp").
     */
    readonly toPort: pulumi.ComputedValue<number>;
    /**
     * The type of rule being created. Valid options are `ingress` (inbound)
     * or `egress` (outbound).
     */
    readonly type: pulumi.ComputedValue<string>;
}

