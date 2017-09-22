// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a CloudWatch Log Group resource.
 */
export class LogGroup extends pulumi.Resource {
    /**
     * The Amazon Resource Name (ARN) specifying the log group.
     */
    public /*out*/ readonly arn: pulumi.Computed<string>;
    /**
     * The name of the log group. If omitted, Terraform will assign a random, unique name.
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    public readonly namePrefix?: pulumi.Computed<string>;
    /**
     * Specifies the number of days
     * you want to retain log events in the specified log group.
     */
    public readonly retentionInDays?: pulumi.Computed<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags?: pulumi.Computed<{[key: string]: any}>;

    /**
     * Create a LogGroup resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this LogGroup instance
     * @param args A collection of arguments for creating this LogGroup intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args?: LogGroupArgs, dependsOn?: pulumi.Resource[]) {
        super("aws:cloudwatch/logGroup:LogGroup", urnName, {
            "name": args.name,
            "namePrefix": args.namePrefix,
            "retentionInDays": args.retentionInDays,
            "tags": args.tags,
            "arn": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a LogGroup resource.
 */
export interface LogGroupArgs {
    /**
     * The name of the log group. If omitted, Terraform will assign a random, unique name.
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.ComputedValue<string>;
    /**
     * Specifies the number of days
     * you want to retain log events in the specified log group.
     */
    readonly retentionInDays?: pulumi.ComputedValue<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.ComputedValue<{[key: string]: any}>;
}

