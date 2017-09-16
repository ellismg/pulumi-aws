// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class StateMachine extends fabric.Resource {
    public /*out*/ readonly creationDate: fabric.Computed<string>;
    public readonly definition: fabric.Computed<string>;
    public readonly name: fabric.Computed<string>;
    public readonly roleArn: fabric.Computed<string>;
    public /*out*/ readonly status: fabric.Computed<string>;

    constructor(urnName: string, args: StateMachineArgs, dependsOn?: fabric.Resource[]) {
        if (args.definition === undefined) {
            throw new Error("Missing required property 'definition'");
        }
        if (args.roleArn === undefined) {
            throw new Error("Missing required property 'roleArn'");
        }
        super("aws:sfn/stateMachine:StateMachine", urnName, {
            "definition": args.definition,
            "name": args.name,
            "roleArn": args.roleArn,
            "creationDate": undefined,
            "status": undefined,
        }, dependsOn);
    }
}

export interface StateMachineArgs {
    readonly definition: fabric.MaybeComputed<string>;
    readonly name?: fabric.MaybeComputed<string>;
    readonly roleArn: fabric.MaybeComputed<string>;
}

