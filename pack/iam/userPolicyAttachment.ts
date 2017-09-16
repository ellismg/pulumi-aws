// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {ARN} from "../index";
import {User} from "./user";

export class UserPolicyAttachment extends fabric.Resource {
    public readonly policyArn: fabric.Computed<ARN>;
    public readonly user: fabric.Computed<User>;

    constructor(urnName: string, args: UserPolicyAttachmentArgs, dependsOn?: fabric.Resource[]) {
        if (args.policyArn === undefined) {
            throw new Error("Missing required property 'policyArn'");
        }
        if (args.user === undefined) {
            throw new Error("Missing required property 'user'");
        }
        super("aws:iam/userPolicyAttachment:UserPolicyAttachment", urnName, {
            "policyArn": args.policyArn,
            "user": args.user,
        }, dependsOn);
    }
}

export interface UserPolicyAttachmentArgs {
    readonly policyArn: fabric.MaybeComputed<ARN>;
    readonly user: fabric.MaybeComputed<User>;
}

