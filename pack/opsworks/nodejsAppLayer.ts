// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class NodejsAppLayer extends fabric.Resource {
    public readonly autoAssignElasticIps?: fabric.Computed<boolean>;
    public readonly autoAssignPublicIps?: fabric.Computed<boolean>;
    public readonly autoHealing?: fabric.Computed<boolean>;
    public readonly customConfigureRecipes?: fabric.Computed<string[]>;
    public readonly customDeployRecipes?: fabric.Computed<string[]>;
    public readonly customInstanceProfileArn?: fabric.Computed<string>;
    public readonly customJson?: fabric.Computed<string>;
    public readonly customSecurityGroupIds?: fabric.Computed<string[]>;
    public readonly customSetupRecipes?: fabric.Computed<string[]>;
    public readonly customShutdownRecipes?: fabric.Computed<string[]>;
    public readonly customUndeployRecipes?: fabric.Computed<string[]>;
    public readonly drainElbOnShutdown?: fabric.Computed<boolean>;
    public readonly ebsVolume?: fabric.Computed<{ iops?: number, mountPoint: string, numberOfDisks: number, raidLevel?: string, size: number, type?: string }[]>;
    public readonly elasticLoadBalancer?: fabric.Computed<string>;
    public /*out*/ readonly layerId: fabric.Computed<string>;
    public readonly installUpdatesOnBoot?: fabric.Computed<boolean>;
    public readonly instanceShutdownTimeout?: fabric.Computed<number>;
    public readonly name: fabric.Computed<string>;
    public readonly nodejsVersion?: fabric.Computed<string>;
    public readonly stackId: fabric.Computed<string>;
    public readonly systemPackages?: fabric.Computed<string[]>;
    public readonly useEbsOptimizedInstances?: fabric.Computed<boolean>;

    constructor(urnName: string, args: NodejsAppLayerArgs, dependsOn?: fabric.Resource[]) {
        if (args.stackId === undefined) {
            throw new Error("Missing required property 'stackId'");
        }
        super("aws:opsworks/nodejsAppLayer:NodejsAppLayer", urnName, {
            "autoAssignElasticIps": args.autoAssignElasticIps,
            "autoAssignPublicIps": args.autoAssignPublicIps,
            "autoHealing": args.autoHealing,
            "customConfigureRecipes": args.customConfigureRecipes,
            "customDeployRecipes": args.customDeployRecipes,
            "customInstanceProfileArn": args.customInstanceProfileArn,
            "customJson": args.customJson,
            "customSecurityGroupIds": args.customSecurityGroupIds,
            "customSetupRecipes": args.customSetupRecipes,
            "customShutdownRecipes": args.customShutdownRecipes,
            "customUndeployRecipes": args.customUndeployRecipes,
            "drainElbOnShutdown": args.drainElbOnShutdown,
            "ebsVolume": args.ebsVolume,
            "elasticLoadBalancer": args.elasticLoadBalancer,
            "installUpdatesOnBoot": args.installUpdatesOnBoot,
            "instanceShutdownTimeout": args.instanceShutdownTimeout,
            "name": args.name,
            "nodejsVersion": args.nodejsVersion,
            "stackId": args.stackId,
            "systemPackages": args.systemPackages,
            "useEbsOptimizedInstances": args.useEbsOptimizedInstances,
            "layerId": undefined,
        }, dependsOn);
    }
}

export interface NodejsAppLayerArgs {
    readonly autoAssignElasticIps?: fabric.MaybeComputed<boolean>;
    readonly autoAssignPublicIps?: fabric.MaybeComputed<boolean>;
    readonly autoHealing?: fabric.MaybeComputed<boolean>;
    readonly customConfigureRecipes?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly customDeployRecipes?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly customInstanceProfileArn?: fabric.MaybeComputed<string>;
    readonly customJson?: fabric.MaybeComputed<string>;
    readonly customSecurityGroupIds?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly customSetupRecipes?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly customShutdownRecipes?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly customUndeployRecipes?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly drainElbOnShutdown?: fabric.MaybeComputed<boolean>;
    readonly ebsVolume?: fabric.MaybeComputed<{ iops?: fabric.MaybeComputed<number>, mountPoint: fabric.MaybeComputed<string>, numberOfDisks: fabric.MaybeComputed<number>, raidLevel?: fabric.MaybeComputed<string>, size: fabric.MaybeComputed<number>, type?: fabric.MaybeComputed<string> }>[];
    readonly elasticLoadBalancer?: fabric.MaybeComputed<string>;
    readonly installUpdatesOnBoot?: fabric.MaybeComputed<boolean>;
    readonly instanceShutdownTimeout?: fabric.MaybeComputed<number>;
    readonly name?: fabric.MaybeComputed<string>;
    readonly nodejsVersion?: fabric.MaybeComputed<string>;
    readonly stackId: fabric.MaybeComputed<string>;
    readonly systemPackages?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly useEbsOptimizedInstances?: fabric.MaybeComputed<boolean>;
}

