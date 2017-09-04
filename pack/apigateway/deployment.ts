// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {RestApi} from "./restApi";

export class Deployment extends fabric.Resource {
    public /*out*/ readonly createdDate: fabric.Property<string>;
    public readonly description?: fabric.Property<string>;
    public /*out*/ readonly executionArn: fabric.Property<string>;
    public /*out*/ readonly invokeUrl: fabric.Property<string>;
    public readonly restApi: fabric.Property<RestApi>;
    public readonly stageDescription?: fabric.Property<string>;
    public readonly stageName: fabric.Property<string>;
    public readonly variables?: fabric.Property<{[key: string]: string}>;

    constructor(urnName: string, args: DeploymentArgs) {
        if (args.restApi === undefined) {
            throw new Error("Missing required property 'restApi'");
        }
        if (args.stageName === undefined) {
            throw new Error("Missing required property 'stageName'");
        }
        super("aws:apigateway/deployment:Deployment", urnName, {
            "description": args.description,
            "restApi": args.restApi,
            "stageDescription": args.stageDescription,
            "stageName": args.stageName,
            "variables": args.variables,
            "createdDate": undefined,
            "executionArn": undefined,
            "invokeUrl": undefined,
        });
    }
}

export interface DeploymentArgs {
    readonly description?: fabric.PropertyValue<string>;
    readonly restApi: fabric.PropertyValue<RestApi>;
    readonly stageDescription?: fabric.PropertyValue<string>;
    readonly stageName: fabric.PropertyValue<string>;
    readonly variables?: fabric.PropertyValue<{[key: string]: fabric.PropertyValue<string>}>;
}

