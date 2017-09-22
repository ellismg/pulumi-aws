// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a load balancer cookie stickiness policy, which allows an ELB to control the sticky session lifetime of the browser.
 */
export class CookieStickinessPolicy extends pulumi.Resource {
    /**
     * The time period after which
     * the session cookie should be considered stale, expressed in seconds.
     */
    public readonly cookieExpirationPeriod?: pulumi.Computed<number>;
    /**
     * The load balancer port to which the policy
     * should be applied. This must be an active listener on the load
     * balancer.
     */
    public readonly lbPort: pulumi.Computed<number>;
    /**
     * The load balancer to which the policy
     * should be attached.
     */
    public readonly loadBalancer: pulumi.Computed<string>;
    /**
     * The name of the stickiness policy.
     */
    public readonly name: pulumi.Computed<string>;

    /**
     * Create a CookieStickinessPolicy resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this CookieStickinessPolicy instance
     * @param args A collection of arguments for creating this CookieStickinessPolicy intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: CookieStickinessPolicyArgs, dependsOn?: pulumi.Resource[]) {
        if (args.lbPort === undefined) {
            throw new Error("Missing required property 'lbPort'");
        }
        if (args.loadBalancer === undefined) {
            throw new Error("Missing required property 'loadBalancer'");
        }
        super("aws:elasticloadbalancing/cookieStickinessPolicy:CookieStickinessPolicy", urnName, {
            "cookieExpirationPeriod": args.cookieExpirationPeriod,
            "lbPort": args.lbPort,
            "loadBalancer": args.loadBalancer,
            "name": args.name,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a CookieStickinessPolicy resource.
 */
export interface CookieStickinessPolicyArgs {
    /**
     * The time period after which
     * the session cookie should be considered stale, expressed in seconds.
     */
    readonly cookieExpirationPeriod?: pulumi.ComputedValue<number>;
    /**
     * The load balancer port to which the policy
     * should be applied. This must be an active listener on the load
     * balancer.
     */
    readonly lbPort: pulumi.ComputedValue<number>;
    /**
     * The load balancer to which the policy
     * should be attached.
     */
    readonly loadBalancer: pulumi.ComputedValue<string>;
    /**
     * The name of the stickiness policy.
     */
    readonly name?: pulumi.ComputedValue<string>;
}

