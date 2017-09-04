// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {Bucket} from "../s3/bucket";
import {Application} from "./application";

export class ApplicationVersion extends fabric.Resource {
    public readonly application: fabric.Property<Application>;
    public readonly bucket: fabric.Property<Bucket>;
    public readonly description?: fabric.Property<string>;
    public readonly forceDelete?: fabric.Property<boolean>;
    public readonly key: fabric.Property<string>;
    public readonly name: fabric.Property<string>;

    constructor(urnName: string, args: ApplicationVersionArgs) {
        if (args.application === undefined) {
            throw new Error("Missing required property 'application'");
        }
        if (args.bucket === undefined) {
            throw new Error("Missing required property 'bucket'");
        }
        if (args.key === undefined) {
            throw new Error("Missing required property 'key'");
        }
        super("aws:elasticbeanstalk/applicationVersion:ApplicationVersion", urnName, {
            "application": args.application,
            "bucket": args.bucket,
            "description": args.description,
            "forceDelete": args.forceDelete,
            "key": args.key,
            "name": args.name,
        });
    }
}

export interface ApplicationVersionArgs {
    readonly application: fabric.PropertyValue<Application>;
    readonly bucket: fabric.PropertyValue<Bucket>;
    readonly description?: fabric.PropertyValue<string>;
    readonly forceDelete?: fabric.PropertyValue<boolean>;
    readonly key: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
}

