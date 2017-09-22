// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an API Gateway Gateway Response for a REST API Gateway.
 */
export class Response extends pulumi.Resource {
    /**
     * A map specifying the templates used to transform the response body.
     */
    public readonly responseParameters?: pulumi.Computed<{[key: string]: string}>;
    /**
     * A map specifying the parameters (paths, query strings and headers) of the Gateway Response.
     */
    public readonly responseTemplates?: pulumi.Computed<{[key: string]: string}>;
    /**
     * The response type of the associated GatewayResponse.
     */
    public readonly responseType: pulumi.Computed<string>;
    /**
     * The string identifier of the associated REST API.
     */
    public readonly restApiId: pulumi.Computed<string>;
    /**
     * The HTTP status code of the Gateway Response.
     */
    public readonly statusCode?: pulumi.Computed<string>;

    /**
     * Create a Response resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Response instance
     * @param args A collection of arguments for creating this Response intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: ResponseArgs, dependsOn?: pulumi.Resource[]) {
        if (args.responseType === undefined) {
            throw new Error("Missing required property 'responseType'");
        }
        if (args.restApiId === undefined) {
            throw new Error("Missing required property 'restApiId'");
        }
        super("aws:apigateway/response:Response", urnName, {
            "responseParameters": args.responseParameters,
            "responseTemplates": args.responseTemplates,
            "responseType": args.responseType,
            "restApiId": args.restApiId,
            "statusCode": args.statusCode,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Response resource.
 */
export interface ResponseArgs {
    /**
     * A map specifying the templates used to transform the response body.
     */
    readonly responseParameters?: pulumi.ComputedValue<{[key: string]: pulumi.ComputedValue<string>}>;
    /**
     * A map specifying the parameters (paths, query strings and headers) of the Gateway Response.
     */
    readonly responseTemplates?: pulumi.ComputedValue<{[key: string]: pulumi.ComputedValue<string>}>;
    /**
     * The response type of the associated GatewayResponse.
     */
    readonly responseType: pulumi.ComputedValue<string>;
    /**
     * The string identifier of the associated REST API.
     */
    readonly restApiId: pulumi.ComputedValue<string>;
    /**
     * The HTTP status code of the Gateway Response.
     */
    readonly statusCode?: pulumi.ComputedValue<string>;
}

