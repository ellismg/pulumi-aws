// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class RepositoryPolicy extends fabric.Resource {
    public readonly policy: fabric.Property<string>;
    public /*out*/ readonly registryId: fabric.Property<string>;
    public readonly repository: fabric.Property<string>;

    constructor(urnName: string, args: RepositoryPolicyArgs) {
        if (args.policy === undefined) {
            throw new Error("Missing required property 'policy'");
        }
        if (args.repository === undefined) {
            throw new Error("Missing required property 'repository'");
        }
        super("aws:ecr/repositoryPolicy:RepositoryPolicy", urnName, {
            "policy": args.policy,
            "repository": args.repository,
            "registryId": undefined,
        });
    }
}

export interface RepositoryPolicyArgs {
    readonly policy: fabric.PropertyValue<string>;
    readonly repository: fabric.PropertyValue<string>;
}

