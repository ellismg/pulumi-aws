// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {RestApi} from "./restApi";

export class ApiKey extends fabric.Resource {
    public /*out*/ readonly createdDate: fabric.Computed<string>;
    public readonly description?: fabric.Computed<string>;
    public readonly enabled?: fabric.Computed<boolean>;
    public /*out*/ readonly lastUpdatedDate: fabric.Computed<string>;
    public readonly name: fabric.Computed<string>;
    public readonly stageKey?: fabric.Computed<{ restApi: RestApi, stageName: string }[]>;
    public readonly value: fabric.Computed<string>;

    constructor(urnName: string, args?: ApiKeyArgs, dependsOn?: fabric.Resource[]) {
        super("aws:apigateway/apiKey:ApiKey", urnName, {
            "description": args.description,
            "enabled": args.enabled,
            "name": args.name,
            "stageKey": args.stageKey,
            "value": args.value,
            "createdDate": undefined,
            "lastUpdatedDate": undefined,
        }, dependsOn);
    }
}

export interface ApiKeyArgs {
    readonly description?: fabric.MaybeComputed<string>;
    readonly enabled?: fabric.MaybeComputed<boolean>;
    readonly name?: fabric.MaybeComputed<string>;
    readonly stageKey?: fabric.MaybeComputed<{ restApi: fabric.MaybeComputed<RestApi>, stageName: fabric.MaybeComputed<string> }>[];
    readonly value?: fabric.MaybeComputed<string>;
}

