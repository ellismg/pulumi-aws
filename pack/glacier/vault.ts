// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Vault extends fabric.Resource {
    public readonly accessPolicy?: fabric.Property<string>;
    public /*out*/ readonly arn: fabric.Property<string>;
    public /*out*/ readonly location: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly notification?: fabric.Property<{ events: string[], snsTopic: string }[]>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;

    constructor(urnName: string, args: VaultArgs) {
        super("aws:glacier/vault:Vault", urnName, {
            "accessPolicy": args.accessPolicy,
            "name": args.name,
            "notification": args.notification,
            "tags": args.tags,
            "arn": undefined,
            "location": undefined,
        });
    }
}

export interface VaultArgs {
    readonly accessPolicy?: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly notification?: fabric.PropertyValue<{ events: fabric.PropertyValue<fabric.PropertyValue<string>>[], snsTopic: fabric.PropertyValue<string> }>[];
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
}

