// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class PatchGroup extends fabric.Resource {
    public readonly baselineId: fabric.Computed<string>;
    public readonly patchGroup: fabric.Computed<string>;

    constructor(urnName: string, args: PatchGroupArgs, dependsOn?: fabric.Resource[]) {
        if (args.baselineId === undefined) {
            throw new Error("Missing required property 'baselineId'");
        }
        if (args.patchGroup === undefined) {
            throw new Error("Missing required property 'patchGroup'");
        }
        super("aws:ssm/patchGroup:PatchGroup", urnName, {
            "baselineId": args.baselineId,
            "patchGroup": args.patchGroup,
        }, dependsOn);
    }
}

export interface PatchGroupArgs {
    readonly baselineId: fabric.MaybeComputed<string>;
    readonly patchGroup: fabric.MaybeComputed<string>;
}

