// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an API Gateway Usage Plan Key.
 */
export class UsagePlanKey extends pulumi.Resource {
    /**
     * The identifier of the API key resource.
     */
    public readonly keyId: pulumi.Computed<string>;
    /**
     * The type of the API key resource. Currently, the valid key type is API_KEY.
     */
    public readonly keyType: pulumi.Computed<string>;
    /**
     * The name of a usage plan key.
     */
    public /*out*/ readonly name: pulumi.Computed<string>;
    /**
     * The Id of the usage plan resource representing to associate the key to.
     */
    public readonly usagePlanId: pulumi.Computed<string>;
    /**
     * The value of a usage plan key.
     */
    public /*out*/ readonly value: pulumi.Computed<string>;

    /**
     * Create a UsagePlanKey resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this UsagePlanKey instance
     * @param args A collection of arguments for creating this UsagePlanKey intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: UsagePlanKeyArgs, dependsOn?: pulumi.Resource[]) {
        if (args.keyId === undefined) {
            throw new Error("Missing required property 'keyId'");
        }
        if (args.keyType === undefined) {
            throw new Error("Missing required property 'keyType'");
        }
        if (args.usagePlanId === undefined) {
            throw new Error("Missing required property 'usagePlanId'");
        }
        super("aws:apigateway/usagePlanKey:UsagePlanKey", urnName, {
            "keyId": args.keyId,
            "keyType": args.keyType,
            "usagePlanId": args.usagePlanId,
            "name": undefined,
            "value": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a UsagePlanKey resource.
 */
export interface UsagePlanKeyArgs {
    /**
     * The identifier of the API key resource.
     */
    readonly keyId: pulumi.ComputedValue<string>;
    /**
     * The type of the API key resource. Currently, the valid key type is API_KEY.
     */
    readonly keyType: pulumi.ComputedValue<string>;
    /**
     * The Id of the usage plan resource representing to associate the key to.
     */
    readonly usagePlanId: pulumi.ComputedValue<string>;
}

