// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class LoadBalancer extends fabric.Resource {
    public readonly accessLogs?: fabric.Computed<{ bucket: string, bucketPrefix?: string, enabled?: boolean, interval?: number }[]>;
    public readonly availabilityZones: fabric.Computed<string[]>;
    public readonly connectionDraining?: fabric.Computed<boolean>;
    public readonly connectionDrainingTimeout?: fabric.Computed<number>;
    public readonly crossZoneLoadBalancing?: fabric.Computed<boolean>;
    public /*out*/ readonly dnsName: fabric.Computed<string>;
    public readonly healthCheck: fabric.Computed<{ healthyThreshold: number, interval: number, target: string, timeout: number, unhealthyThreshold: number }[]>;
    public readonly idleTimeout?: fabric.Computed<number>;
    public readonly instances: fabric.Computed<string[]>;
    public readonly internal: fabric.Computed<boolean>;
    public readonly listener: fabric.Computed<{ instancePort: number, instanceProtocol: string, lbPort: number, lbProtocol: string, sslCertificateId?: string }[]>;
    public readonly name: fabric.Computed<string>;
    public readonly namePrefix?: fabric.Computed<string>;
    public readonly securityGroups: fabric.Computed<string[]>;
    public readonly sourceSecurityGroup: fabric.Computed<string>;
    public /*out*/ readonly sourceSecurityGroupId: fabric.Computed<string>;
    public readonly subnets: fabric.Computed<string[]>;
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    public /*out*/ readonly zoneId: fabric.Computed<string>;

    constructor(urnName: string, args: LoadBalancerArgs, dependsOn?: fabric.Resource[]) {
        if (args.listener === undefined) {
            throw new Error("Missing required property 'listener'");
        }
        super("aws:elasticloadbalancing/loadBalancer:LoadBalancer", urnName, {
            "accessLogs": args.accessLogs,
            "availabilityZones": args.availabilityZones,
            "connectionDraining": args.connectionDraining,
            "connectionDrainingTimeout": args.connectionDrainingTimeout,
            "crossZoneLoadBalancing": args.crossZoneLoadBalancing,
            "healthCheck": args.healthCheck,
            "idleTimeout": args.idleTimeout,
            "instances": args.instances,
            "internal": args.internal,
            "listener": args.listener,
            "name": args.name,
            "namePrefix": args.namePrefix,
            "securityGroups": args.securityGroups,
            "sourceSecurityGroup": args.sourceSecurityGroup,
            "subnets": args.subnets,
            "tags": args.tags,
            "dnsName": undefined,
            "sourceSecurityGroupId": undefined,
            "zoneId": undefined,
        }, dependsOn);
    }
}

export interface LoadBalancerArgs {
    readonly accessLogs?: fabric.MaybeComputed<{ bucket: fabric.MaybeComputed<string>, bucketPrefix?: fabric.MaybeComputed<string>, enabled?: fabric.MaybeComputed<boolean>, interval?: fabric.MaybeComputed<number> }>[];
    readonly availabilityZones?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly connectionDraining?: fabric.MaybeComputed<boolean>;
    readonly connectionDrainingTimeout?: fabric.MaybeComputed<number>;
    readonly crossZoneLoadBalancing?: fabric.MaybeComputed<boolean>;
    readonly healthCheck?: fabric.MaybeComputed<{ healthyThreshold: fabric.MaybeComputed<number>, interval: fabric.MaybeComputed<number>, target: fabric.MaybeComputed<string>, timeout: fabric.MaybeComputed<number>, unhealthyThreshold: fabric.MaybeComputed<number> }>[];
    readonly idleTimeout?: fabric.MaybeComputed<number>;
    readonly instances?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly internal?: fabric.MaybeComputed<boolean>;
    readonly listener: fabric.MaybeComputed<{ instancePort: fabric.MaybeComputed<number>, instanceProtocol: fabric.MaybeComputed<string>, lbPort: fabric.MaybeComputed<number>, lbProtocol: fabric.MaybeComputed<string>, sslCertificateId?: fabric.MaybeComputed<string> }>[];
    readonly name?: fabric.MaybeComputed<string>;
    readonly namePrefix?: fabric.MaybeComputed<string>;
    readonly securityGroups?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly sourceSecurityGroup?: fabric.MaybeComputed<string>;
    readonly subnets?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly tags?: fabric.MaybeComputed<{[key: string]: any}>;
}

