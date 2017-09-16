// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {RestApi} from "./restApi";

export class Method extends fabric.Resource {
    public readonly apiKeyRequired?: fabric.Computed<boolean>;
    public readonly authorization: fabric.Computed<string>;
    public readonly authorizerId?: fabric.Computed<string>;
    public readonly httpMethod: fabric.Computed<string>;
    public readonly requestModels?: fabric.Computed<{[key: string]: string}>;
    public readonly requestParameters?: fabric.Computed<{[key: string]: boolean}>;
    public readonly requestParametersInJson?: fabric.Computed<string>;
    public readonly requestValidatorId?: fabric.Computed<string>;
    public readonly resourceId: fabric.Computed<string>;
    public readonly restApi: fabric.Computed<RestApi>;

    constructor(urnName: string, args: MethodArgs, dependsOn?: fabric.Resource[]) {
        if (args.authorization === undefined) {
            throw new Error("Missing required property 'authorization'");
        }
        if (args.httpMethod === undefined) {
            throw new Error("Missing required property 'httpMethod'");
        }
        if (args.resourceId === undefined) {
            throw new Error("Missing required property 'resourceId'");
        }
        if (args.restApi === undefined) {
            throw new Error("Missing required property 'restApi'");
        }
        super("aws:apigateway/method:Method", urnName, {
            "apiKeyRequired": args.apiKeyRequired,
            "authorization": args.authorization,
            "authorizerId": args.authorizerId,
            "httpMethod": args.httpMethod,
            "requestModels": args.requestModels,
            "requestParameters": args.requestParameters,
            "requestParametersInJson": args.requestParametersInJson,
            "requestValidatorId": args.requestValidatorId,
            "resourceId": args.resourceId,
            "restApi": args.restApi,
        }, dependsOn);
    }
}

export interface MethodArgs {
    readonly apiKeyRequired?: fabric.MaybeComputed<boolean>;
    readonly authorization: fabric.MaybeComputed<string>;
    readonly authorizerId?: fabric.MaybeComputed<string>;
    readonly httpMethod: fabric.MaybeComputed<string>;
    readonly requestModels?: fabric.MaybeComputed<{[key: string]: fabric.MaybeComputed<string>}>;
    readonly requestParameters?: fabric.MaybeComputed<{[key: string]: fabric.MaybeComputed<boolean>}>;
    readonly requestParametersInJson?: fabric.MaybeComputed<string>;
    readonly requestValidatorId?: fabric.MaybeComputed<string>;
    readonly resourceId: fabric.MaybeComputed<string>;
    readonly restApi: fabric.MaybeComputed<RestApi>;
}

