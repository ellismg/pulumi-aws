// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Distribution extends fabric.Resource {
    public /*out*/ readonly activeTrustedSigners: fabric.Computed<{[key: string]: any}>;
    public readonly aliases?: fabric.Computed<string[]>;
    public /*out*/ readonly arn: fabric.Computed<string>;
    public readonly cacheBehavior?: fabric.Computed<{ allowedMethods: string[], cachedMethods: string[], compress?: boolean, defaultTtl: number, forwardedValues: { cookies: { forward: string, whitelistedNames?: string[] }[], headers?: string[], queryString: boolean, queryStringCacheKeys?: string[] }[], lambdaFunctionAssociation?: { eventType: string, lambdaArn: string }[], maxTtl: number, minTtl: number, pathPattern: string, smoothStreaming?: boolean, targetOriginId: string, trustedSigners?: string[], viewerProtocolPolicy: string }[]>;
    public /*out*/ readonly callerReference: fabric.Computed<string>;
    public readonly comment?: fabric.Computed<string>;
    public readonly customErrorResponse?: fabric.Computed<{ errorCachingMinTtl?: number, errorCode: number, responseCode?: number, responsePagePath?: string }[]>;
    public readonly defaultCacheBehavior: fabric.Computed<{ allowedMethods: string[], cachedMethods: string[], compress?: boolean, defaultTtl: number, forwardedValues: { cookies: { forward: string, whitelistedNames?: string[] }[], headers?: string[], queryString: boolean, queryStringCacheKeys?: string[] }[], lambdaFunctionAssociation?: { eventType: string, lambdaArn: string }[], maxTtl: number, minTtl: number, smoothStreaming?: boolean, targetOriginId: string, trustedSigners?: string[], viewerProtocolPolicy: string }[]>;
    public readonly defaultRootObject?: fabric.Computed<string>;
    public /*out*/ readonly domainName: fabric.Computed<string>;
    public readonly enabled: fabric.Computed<boolean>;
    public /*out*/ readonly etag: fabric.Computed<string>;
    public /*out*/ readonly hostedZoneId: fabric.Computed<string>;
    public readonly httpVersion?: fabric.Computed<string>;
    public /*out*/ readonly inProgressValidationBatches: fabric.Computed<number>;
    public readonly isIpv6Enabled?: fabric.Computed<boolean>;
    public /*out*/ readonly lastModifiedTime: fabric.Computed<string>;
    public readonly loggingConfig?: fabric.Computed<{ bucket: string, includeCookies?: boolean, prefix?: string }[]>;
    public readonly origin: fabric.Computed<{ customHeader?: { name: string, value: string }[], customOriginConfig?: { httpPort: number, httpsPort: number, originKeepaliveTimeout?: number, originProtocolPolicy: string, originReadTimeout?: number, originSslProtocols: string[] }[], domainName: string, originId: string, originPath?: string, s3OriginConfig?: { originAccessIdentity: string }[] }[]>;
    public readonly priceClass?: fabric.Computed<string>;
    public readonly restrictions: fabric.Computed<{ geoRestriction: { locations?: string[], restrictionType: string }[] }[]>;
    public readonly retainOnDelete?: fabric.Computed<boolean>;
    public /*out*/ readonly status: fabric.Computed<string>;
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    public readonly viewerCertificate: fabric.Computed<{ acmCertificateArn?: string, cloudfrontDefaultCertificate?: boolean, iamCertificateId?: string, minimumProtocolVersion?: string, sslSupportMethod?: string }[]>;
    public readonly webAclId?: fabric.Computed<string>;

    constructor(urnName: string, args: DistributionArgs, dependsOn?: fabric.Resource[]) {
        if (args.defaultCacheBehavior === undefined) {
            throw new Error("Missing required property 'defaultCacheBehavior'");
        }
        if (args.enabled === undefined) {
            throw new Error("Missing required property 'enabled'");
        }
        if (args.origin === undefined) {
            throw new Error("Missing required property 'origin'");
        }
        if (args.restrictions === undefined) {
            throw new Error("Missing required property 'restrictions'");
        }
        if (args.viewerCertificate === undefined) {
            throw new Error("Missing required property 'viewerCertificate'");
        }
        super("aws:cloudfront/distribution:Distribution", urnName, {
            "aliases": args.aliases,
            "cacheBehavior": args.cacheBehavior,
            "comment": args.comment,
            "customErrorResponse": args.customErrorResponse,
            "defaultCacheBehavior": args.defaultCacheBehavior,
            "defaultRootObject": args.defaultRootObject,
            "enabled": args.enabled,
            "httpVersion": args.httpVersion,
            "isIpv6Enabled": args.isIpv6Enabled,
            "loggingConfig": args.loggingConfig,
            "origin": args.origin,
            "priceClass": args.priceClass,
            "restrictions": args.restrictions,
            "retainOnDelete": args.retainOnDelete,
            "tags": args.tags,
            "viewerCertificate": args.viewerCertificate,
            "webAclId": args.webAclId,
            "activeTrustedSigners": undefined,
            "arn": undefined,
            "callerReference": undefined,
            "domainName": undefined,
            "etag": undefined,
            "hostedZoneId": undefined,
            "inProgressValidationBatches": undefined,
            "lastModifiedTime": undefined,
            "status": undefined,
        }, dependsOn);
    }
}

export interface DistributionArgs {
    readonly aliases?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly cacheBehavior?: fabric.MaybeComputed<{ allowedMethods: fabric.MaybeComputed<fabric.MaybeComputed<string>>[], cachedMethods: fabric.MaybeComputed<fabric.MaybeComputed<string>>[], compress?: fabric.MaybeComputed<boolean>, defaultTtl: fabric.MaybeComputed<number>, forwardedValues: fabric.MaybeComputed<{ cookies: fabric.MaybeComputed<{ forward: fabric.MaybeComputed<string>, whitelistedNames?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[] }>[], headers?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[], queryString: fabric.MaybeComputed<boolean>, queryStringCacheKeys?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[] }>[], lambdaFunctionAssociation?: fabric.MaybeComputed<{ eventType: fabric.MaybeComputed<string>, lambdaArn: fabric.MaybeComputed<string> }>[], maxTtl: fabric.MaybeComputed<number>, minTtl: fabric.MaybeComputed<number>, pathPattern: fabric.MaybeComputed<string>, smoothStreaming?: fabric.MaybeComputed<boolean>, targetOriginId: fabric.MaybeComputed<string>, trustedSigners?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[], viewerProtocolPolicy: fabric.MaybeComputed<string> }>[];
    readonly comment?: fabric.MaybeComputed<string>;
    readonly customErrorResponse?: fabric.MaybeComputed<{ errorCachingMinTtl?: fabric.MaybeComputed<number>, errorCode: fabric.MaybeComputed<number>, responseCode?: fabric.MaybeComputed<number>, responsePagePath?: fabric.MaybeComputed<string> }>[];
    readonly defaultCacheBehavior: fabric.MaybeComputed<{ allowedMethods: fabric.MaybeComputed<fabric.MaybeComputed<string>>[], cachedMethods: fabric.MaybeComputed<fabric.MaybeComputed<string>>[], compress?: fabric.MaybeComputed<boolean>, defaultTtl: fabric.MaybeComputed<number>, forwardedValues: fabric.MaybeComputed<{ cookies: fabric.MaybeComputed<{ forward: fabric.MaybeComputed<string>, whitelistedNames?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[] }>[], headers?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[], queryString: fabric.MaybeComputed<boolean>, queryStringCacheKeys?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[] }>[], lambdaFunctionAssociation?: fabric.MaybeComputed<{ eventType: fabric.MaybeComputed<string>, lambdaArn: fabric.MaybeComputed<string> }>[], maxTtl: fabric.MaybeComputed<number>, minTtl: fabric.MaybeComputed<number>, smoothStreaming?: fabric.MaybeComputed<boolean>, targetOriginId: fabric.MaybeComputed<string>, trustedSigners?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[], viewerProtocolPolicy: fabric.MaybeComputed<string> }>[];
    readonly defaultRootObject?: fabric.MaybeComputed<string>;
    readonly enabled: fabric.MaybeComputed<boolean>;
    readonly httpVersion?: fabric.MaybeComputed<string>;
    readonly isIpv6Enabled?: fabric.MaybeComputed<boolean>;
    readonly loggingConfig?: fabric.MaybeComputed<{ bucket: fabric.MaybeComputed<string>, includeCookies?: fabric.MaybeComputed<boolean>, prefix?: fabric.MaybeComputed<string> }>[];
    readonly origin: fabric.MaybeComputed<{ customHeader?: fabric.MaybeComputed<{ name: fabric.MaybeComputed<string>, value: fabric.MaybeComputed<string> }>[], customOriginConfig?: fabric.MaybeComputed<{ httpPort: fabric.MaybeComputed<number>, httpsPort: fabric.MaybeComputed<number>, originKeepaliveTimeout?: fabric.MaybeComputed<number>, originProtocolPolicy: fabric.MaybeComputed<string>, originReadTimeout?: fabric.MaybeComputed<number>, originSslProtocols: fabric.MaybeComputed<fabric.MaybeComputed<string>>[] }>[], domainName: fabric.MaybeComputed<string>, originId: fabric.MaybeComputed<string>, originPath?: fabric.MaybeComputed<string>, s3OriginConfig?: fabric.MaybeComputed<{ originAccessIdentity: fabric.MaybeComputed<string> }>[] }>[];
    readonly priceClass?: fabric.MaybeComputed<string>;
    readonly restrictions: fabric.MaybeComputed<{ geoRestriction: fabric.MaybeComputed<{ locations?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[], restrictionType: fabric.MaybeComputed<string> }>[] }>[];
    readonly retainOnDelete?: fabric.MaybeComputed<boolean>;
    readonly tags?: fabric.MaybeComputed<{[key: string]: any}>;
    readonly viewerCertificate: fabric.MaybeComputed<{ acmCertificateArn?: fabric.MaybeComputed<string>, cloudfrontDefaultCertificate?: fabric.MaybeComputed<boolean>, iamCertificateId?: fabric.MaybeComputed<string>, minimumProtocolVersion?: fabric.MaybeComputed<string>, sslSupportMethod?: fabric.MaybeComputed<string> }>[];
    readonly webAclId?: fabric.MaybeComputed<string>;
}

