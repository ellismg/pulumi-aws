// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {Topic} from "./topic";

export class TopicSubscription extends fabric.Resource {
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly confirmationTimeoutInMinutes?: fabric.Property<number>;
    public readonly deliveryPolicy?: fabric.Property<string>;
    public readonly endpoint: fabric.Property<string>;
    public readonly endpointAutoConfirms?: fabric.Property<boolean>;
    public readonly protocol: fabric.Property<string>;
    public readonly rawMessageDelivery?: fabric.Property<boolean>;
    public readonly topic: fabric.Property<Topic>;

    constructor(urnName: string, args: TopicSubscriptionArgs) {
        if (args.endpoint === undefined) {
            throw new Error("Missing required property 'endpoint'");
        }
        if (args.protocol === undefined) {
            throw new Error("Missing required property 'protocol'");
        }
        if (args.topic === undefined) {
            throw new Error("Missing required property 'topic'");
        }
        super("aws:sns/topicSubscription:TopicSubscription", urnName, {
            "confirmationTimeoutInMinutes": args.confirmationTimeoutInMinutes,
            "deliveryPolicy": args.deliveryPolicy,
            "endpoint": args.endpoint,
            "endpointAutoConfirms": args.endpointAutoConfirms,
            "protocol": args.protocol,
            "rawMessageDelivery": args.rawMessageDelivery,
            "topic": args.topic,
            "arn": undefined,
        });
    }
}

export interface TopicSubscriptionArgs {
    readonly confirmationTimeoutInMinutes?: fabric.PropertyValue<number>;
    readonly deliveryPolicy?: fabric.PropertyValue<string>;
    readonly endpoint: fabric.PropertyValue<string>;
    readonly endpointAutoConfirms?: fabric.PropertyValue<boolean>;
    readonly protocol: fabric.PropertyValue<string>;
    readonly rawMessageDelivery?: fabric.PropertyValue<boolean>;
    readonly topic: fabric.PropertyValue<Topic>;
}

