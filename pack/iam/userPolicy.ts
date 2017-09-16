// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class UserPolicy extends fabric.Resource {
    public readonly name: fabric.Computed<string>;
    public readonly namePrefix?: fabric.Computed<string>;
    public readonly policy: fabric.Computed<string>;
    public readonly user: fabric.Computed<string>;

    constructor(urnName: string, args: UserPolicyArgs, dependsOn?: fabric.Resource[]) {
        if (args.policy === undefined) {
            throw new Error("Missing required property 'policy'");
        }
        if (args.user === undefined) {
            throw new Error("Missing required property 'user'");
        }
        super("aws:iam/userPolicy:UserPolicy", urnName, {
            "name": args.name,
            "namePrefix": args.namePrefix,
            "policy": args.policy,
            "user": args.user,
        }, dependsOn);
    }
}

export interface UserPolicyArgs {
    readonly name?: fabric.MaybeComputed<string>;
    readonly namePrefix?: fabric.MaybeComputed<string>;
    readonly policy: fabric.MaybeComputed<string>;
    readonly user: fabric.MaybeComputed<string>;
}

