// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class RestApi extends fabric.Resource {
    public readonly binaryMediaTypes?: fabric.Property<string[]>;
    public readonly body?: fabric.Property<string>;
    public /*out*/ readonly createdDate: fabric.Property<string>;
    public readonly description?: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public /*out*/ readonly rootResourceId: fabric.Property<string>;

    constructor(urnName: string, args: RestApiArgs) {
        super("aws:apigateway/restApi:RestApi", urnName, {
            "binaryMediaTypes": args.binaryMediaTypes,
            "body": args.body,
            "description": args.description,
            "name": args.name,
            "createdDate": undefined,
            "rootResourceId": undefined,
        });
    }
}

export interface RestApiArgs {
    readonly binaryMediaTypes?: fabric.PropertyValue<fabric.PropertyValue<string>>[];
    readonly body?: fabric.PropertyValue<string>;
    readonly description?: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
}

