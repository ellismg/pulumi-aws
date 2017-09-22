// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an SES receipt rule resource
 */
export class ReceiptRule extends pulumi.Resource {
    /**
     * A list of Add Header Action blocks. Documented below.
     */
    public readonly addHeaderAction?: pulumi.Computed<{ headerName: string, headerValue: string, position: number }[]>;
    /**
     * The name of the rule to place this rule after
     */
    public readonly after?: pulumi.Computed<string>;
    /**
     * A list of Bounce Action blocks. Documented below.
     */
    public readonly bounceAction?: pulumi.Computed<{ message: string, position: number, sender: string, smtpReplyCode: string, statusCode?: string, topicArn?: string }[]>;
    /**
     * If true, the rule will be enabled
     */
    public readonly enabled: pulumi.Computed<boolean>;
    /**
     * A list of Lambda Action blocks. Documented below.
     */
    public readonly lambdaAction?: pulumi.Computed<{ functionArn: string, invocationType: string, position: number, topicArn?: string }[]>;
    /**
     * The name of the rule
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * A list of email addresses
     */
    public readonly recipients?: pulumi.Computed<string[]>;
    /**
     * The name of the rule set
     */
    public readonly ruleSetName: pulumi.Computed<string>;
    /**
     * A list of S3 Action blocks. Documented below.
     */
    public readonly s3Action?: pulumi.Computed<{ bucketName: string, kmsKeyArn?: string, objectKeyPrefix?: string, position: number, topicArn?: string }[]>;
    /**
     * If true, incoming emails will be scanned for spam and viruses
     */
    public readonly scanEnabled: pulumi.Computed<boolean>;
    /**
     * A list of SNS Action blocks. Documented below.
     */
    public readonly snsAction?: pulumi.Computed<{ position: number, topicArn: string }[]>;
    /**
     * A list of Stop Action blocks. Documented below.
     */
    public readonly stopAction?: pulumi.Computed<{ position: number, scope: string, topicArn?: string }[]>;
    /**
     * Require or Optional
     */
    public readonly tlsPolicy: pulumi.Computed<string>;
    /**
     * A list of WorkMail Action blocks. Documented below.
     */
    public readonly workmailAction?: pulumi.Computed<{ organizationArn: string, position: number, topicArn?: string }[]>;

    /**
     * Create a ReceiptRule resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this ReceiptRule instance
     * @param args A collection of arguments for creating this ReceiptRule intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: ReceiptRuleArgs, dependsOn?: pulumi.Resource[]) {
        if (args.ruleSetName === undefined) {
            throw new Error("Missing required property 'ruleSetName'");
        }
        super("aws:ses/receiptRule:ReceiptRule", urnName, {
            "addHeaderAction": args.addHeaderAction,
            "after": args.after,
            "bounceAction": args.bounceAction,
            "enabled": args.enabled,
            "lambdaAction": args.lambdaAction,
            "name": args.name,
            "recipients": args.recipients,
            "ruleSetName": args.ruleSetName,
            "s3Action": args.s3Action,
            "scanEnabled": args.scanEnabled,
            "snsAction": args.snsAction,
            "stopAction": args.stopAction,
            "tlsPolicy": args.tlsPolicy,
            "workmailAction": args.workmailAction,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a ReceiptRule resource.
 */
export interface ReceiptRuleArgs {
    /**
     * A list of Add Header Action blocks. Documented below.
     */
    readonly addHeaderAction?: pulumi.ComputedValue<{ headerName: pulumi.ComputedValue<string>, headerValue: pulumi.ComputedValue<string>, position: pulumi.ComputedValue<number> }>[];
    /**
     * The name of the rule to place this rule after
     */
    readonly after?: pulumi.ComputedValue<string>;
    /**
     * A list of Bounce Action blocks. Documented below.
     */
    readonly bounceAction?: pulumi.ComputedValue<{ message: pulumi.ComputedValue<string>, position: pulumi.ComputedValue<number>, sender: pulumi.ComputedValue<string>, smtpReplyCode: pulumi.ComputedValue<string>, statusCode?: pulumi.ComputedValue<string>, topicArn?: pulumi.ComputedValue<string> }>[];
    /**
     * If true, the rule will be enabled
     */
    readonly enabled?: pulumi.ComputedValue<boolean>;
    /**
     * A list of Lambda Action blocks. Documented below.
     */
    readonly lambdaAction?: pulumi.ComputedValue<{ functionArn: pulumi.ComputedValue<string>, invocationType?: pulumi.ComputedValue<string>, position: pulumi.ComputedValue<number>, topicArn?: pulumi.ComputedValue<string> }>[];
    /**
     * The name of the rule
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * A list of email addresses
     */
    readonly recipients?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * The name of the rule set
     */
    readonly ruleSetName: pulumi.ComputedValue<string>;
    /**
     * A list of S3 Action blocks. Documented below.
     */
    readonly s3Action?: pulumi.ComputedValue<{ bucketName: pulumi.ComputedValue<string>, kmsKeyArn?: pulumi.ComputedValue<string>, objectKeyPrefix?: pulumi.ComputedValue<string>, position: pulumi.ComputedValue<number>, topicArn?: pulumi.ComputedValue<string> }>[];
    /**
     * If true, incoming emails will be scanned for spam and viruses
     */
    readonly scanEnabled?: pulumi.ComputedValue<boolean>;
    /**
     * A list of SNS Action blocks. Documented below.
     */
    readonly snsAction?: pulumi.ComputedValue<{ position: pulumi.ComputedValue<number>, topicArn: pulumi.ComputedValue<string> }>[];
    /**
     * A list of Stop Action blocks. Documented below.
     */
    readonly stopAction?: pulumi.ComputedValue<{ position: pulumi.ComputedValue<number>, scope: pulumi.ComputedValue<string>, topicArn?: pulumi.ComputedValue<string> }>[];
    /**
     * Require or Optional
     */
    readonly tlsPolicy?: pulumi.ComputedValue<string>;
    /**
     * A list of WorkMail Action blocks. Documented below.
     */
    readonly workmailAction?: pulumi.ComputedValue<{ organizationArn: pulumi.ComputedValue<string>, position: pulumi.ComputedValue<number>, topicArn?: pulumi.ComputedValue<string> }>[];
}

