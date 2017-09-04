// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Repository extends fabric.Resource {
    public /*out*/ readonly arn: fabric.Property<string>;
    public /*out*/ readonly cloneUrlHttp: fabric.Property<string>;
    public /*out*/ readonly cloneUrlSsh: fabric.Property<string>;
    public readonly defaultBranch?: fabric.Property<string>;
    public readonly description?: fabric.Property<string>;
    public /*out*/ readonly repositoryId: fabric.Property<string>;
    public readonly repositoryName: fabric.Property<string>;

    constructor(urnName: string, args: RepositoryArgs) {
        if (args.repositoryName === undefined) {
            throw new Error("Missing required property 'repositoryName'");
        }
        super("aws:codecommit/repository:Repository", urnName, {
            "defaultBranch": args.defaultBranch,
            "description": args.description,
            "repositoryName": args.repositoryName,
            "arn": undefined,
            "cloneUrlHttp": undefined,
            "cloneUrlSsh": undefined,
            "repositoryId": undefined,
        });
    }
}

export interface RepositoryArgs {
    readonly defaultBranch?: fabric.PropertyValue<string>;
    readonly description?: fabric.PropertyValue<string>;
    readonly repositoryName: fabric.PropertyValue<string>;
}

