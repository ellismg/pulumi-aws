// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides an SSM Parameter data source.
 */
export function getParameter(args: GetParameterArgs): Promise<GetParameterResult> {
    return pulumi.runtime.invoke("aws:ssm/getParameter:getParameter", {
        "name": args.name,
        "withDecryption": args.withDecryption,
    });
}

/**
 * A collection of arguments for invoking getParameter.
 */
export interface GetParameterArgs {
    /**
     * The name of the parameter.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Whether to return decrypted `SecureString` value. Defaults to `true`.
     */
    readonly withDecryption?: pulumi.Input<boolean>;
}

/**
 * A collection of values returned by getParameter.
 */
export interface GetParameterResult {
    readonly arn: string;
    readonly type: string;
    readonly value: string;
}
