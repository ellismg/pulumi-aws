// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Association extends fabric.Resource {
    public /*out*/ readonly associationId: fabric.Property<string>;
    public readonly instanceId?: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly parameters: fabric.Property<{[key: string]: any}>;
    public readonly targets: fabric.Property<{ key: string, values: string[] }[]>;

    constructor(urnName: string, args: AssociationArgs) {
        super("aws:ssm/association:Association", urnName, {
            "instanceId": args.instanceId,
            "name": args.name,
            "parameters": args.parameters,
            "targets": args.targets,
            "associationId": undefined,
        });
    }
}

export interface AssociationArgs {
    readonly instanceId?: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly parameters?: fabric.PropertyValue<{[key: string]: any}>;
    readonly targets?: fabric.PropertyValue<{ key: fabric.PropertyValue<string>, values: fabric.PropertyValue<fabric.PropertyValue<string>>[] }>[];
}

