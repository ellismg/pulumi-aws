// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a CodeDeploy application to be used as a basis for deployments
 */
export class Application extends pulumi.Resource {
    /**
     * The name of the application.
     */
    public readonly name: pulumi.Computed<string>;
    public readonly uniqueId: pulumi.Computed<string>;

    /**
     * Create a Application resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Application instance
     * @param args A collection of arguments for creating this Application intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args?: ApplicationArgs, dependsOn?: pulumi.Resource[]) {
        super("aws:codedeploy/application:Application", urnName, {
            "name": args.name,
            "uniqueId": args.uniqueId,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * The name of the application.
     */
    readonly name?: pulumi.ComputedValue<string>;
    readonly uniqueId?: pulumi.ComputedValue<string>;
}

