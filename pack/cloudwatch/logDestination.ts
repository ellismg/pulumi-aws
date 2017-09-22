// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a CloudWatch Logs destination resource.
 */
export class LogDestination extends pulumi.Resource {
    /**
     * The Amazon Resource Name (ARN) specifying the log destination.
     */
    public /*out*/ readonly arn: pulumi.Computed<string>;
    /**
     * A name for the log destination
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * The ARN of an IAM role that grants Amazon CloudWatch Logs permissions to put data into the target
     */
    public readonly roleArn: pulumi.Computed<string>;
    /**
     * The ARN of the target Amazon Kinesis stream or Amazon Lambda resource for the destination
     */
    public readonly targetArn: pulumi.Computed<string>;

    /**
     * Create a LogDestination resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this LogDestination instance
     * @param args A collection of arguments for creating this LogDestination intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: LogDestinationArgs, dependsOn?: pulumi.Resource[]) {
        if (args.roleArn === undefined) {
            throw new Error("Missing required property 'roleArn'");
        }
        if (args.targetArn === undefined) {
            throw new Error("Missing required property 'targetArn'");
        }
        super("aws:cloudwatch/logDestination:LogDestination", urnName, {
            "name": args.name,
            "roleArn": args.roleArn,
            "targetArn": args.targetArn,
            "arn": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a LogDestination resource.
 */
export interface LogDestinationArgs {
    /**
     * A name for the log destination
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * The ARN of an IAM role that grants Amazon CloudWatch Logs permissions to put data into the target
     */
    readonly roleArn: pulumi.ComputedValue<string>;
    /**
     * The ARN of the target Amazon Kinesis stream or Amazon Lambda resource for the destination
     */
    readonly targetArn: pulumi.ComputedValue<string>;
}

