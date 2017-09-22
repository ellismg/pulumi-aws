// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a proxy protocol policy, which allows an ELB to carry a client connection information to a backend.
 */
export class ProxyProtocolPolicy extends pulumi.Resource {
    /**
     * List of instance ports to which the policy
     * should be applied. This can be specified if the protocol is SSL or TCP.
     */
    public readonly instancePorts: pulumi.Computed<string[]>;
    /**
     * The load balancer to which the policy
     * should be attached.
     */
    public readonly loadBalancer: pulumi.Computed<string>;

    /**
     * Create a ProxyProtocolPolicy resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this ProxyProtocolPolicy instance
     * @param args A collection of arguments for creating this ProxyProtocolPolicy intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: ProxyProtocolPolicyArgs, dependsOn?: pulumi.Resource[]) {
        if (args.instancePorts === undefined) {
            throw new Error("Missing required property 'instancePorts'");
        }
        if (args.loadBalancer === undefined) {
            throw new Error("Missing required property 'loadBalancer'");
        }
        super("aws:ec2/proxyProtocolPolicy:ProxyProtocolPolicy", urnName, {
            "instancePorts": args.instancePorts,
            "loadBalancer": args.loadBalancer,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a ProxyProtocolPolicy resource.
 */
export interface ProxyProtocolPolicyArgs {
    /**
     * List of instance ports to which the policy
     * should be applied. This can be specified if the protocol is SSL or TCP.
     */
    readonly instancePorts: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * The load balancer to which the policy
     * should be attached.
     */
    readonly loadBalancer: pulumi.ComputedValue<string>;
}

