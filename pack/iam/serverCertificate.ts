// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an IAM Server Certificate resource to upload Server Certificates.
 * Certs uploaded to IAM can easily work with other AWS services such as:
 * 
 * - AWS Elastic Beanstalk
 * - Elastic Load Balancing
 * - CloudFront
 * - AWS OpsWorks
 * 
 * For information about server certificates in IAM, see [Managing Server
 * Certificates][2] in AWS Documentation.
 * 
 * ~> **Note:** All arguments including the private key will be stored in the raw state as plain-text.
 * [Read more about sensitive data in state](/docs/state/sensitive-data.html).
 */
export class ServerCertificate extends pulumi.Resource {
    /**
     * The Amazon Resource Name (ARN) specifying the server certificate.
     */
    public readonly arn: pulumi.Computed<string>;
    public readonly certificateBody: pulumi.Computed<string>;
    public readonly certificateChain?: pulumi.Computed<string>;
    /**
     * The name of the Server Certificate. Do not include the
     * path in this value. If omitted, Terraform will assign a random, unique name.
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     * * `certificate_body` – (Required) The contents of the public key certificate in
     * PEM-encoded format.
     * * `certificate_chain` – (Optional) The contents of the certificate chain.
     * This is typically a concatenation of the PEM-encoded public key certificates
     * of the chain.
     * * `private_key` – (Required) The contents of the private key in PEM-encoded format.
     */
    public readonly namePrefix?: pulumi.Computed<string>;
    /**
     * The IAM path for the server certificate.  If it is not
     * included, it defaults to a slash (/). If this certificate is for use with
     * AWS CloudFront, the path must be in format `/cloudfront/your_path_here`.
     * See [IAM Identifiers][1] for more details on IAM Paths.
     */
    public readonly path?: pulumi.Computed<string>;
    public readonly privateKey: pulumi.Computed<string>;

    /**
     * Create a ServerCertificate resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this ServerCertificate instance
     * @param args A collection of arguments for creating this ServerCertificate intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: ServerCertificateArgs, dependsOn?: pulumi.Resource[]) {
        if (args.certificateBody === undefined) {
            throw new Error("Missing required property 'certificateBody'");
        }
        if (args.privateKey === undefined) {
            throw new Error("Missing required property 'privateKey'");
        }
        super("aws:iam/serverCertificate:ServerCertificate", urnName, {
            "arn": args.arn,
            "certificateBody": args.certificateBody,
            "certificateChain": args.certificateChain,
            "name": args.name,
            "namePrefix": args.namePrefix,
            "path": args.path,
            "privateKey": args.privateKey,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a ServerCertificate resource.
 */
export interface ServerCertificateArgs {
    readonly arn?: pulumi.ComputedValue<string>;
    readonly certificateBody: pulumi.ComputedValue<string>;
    readonly certificateChain?: pulumi.ComputedValue<string>;
    /**
     * The name of the Server Certificate. Do not include the
     * path in this value. If omitted, Terraform will assign a random, unique name.
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     * * `certificate_body` – (Required) The contents of the public key certificate in
     * PEM-encoded format.
     * * `certificate_chain` – (Optional) The contents of the certificate chain.
     * This is typically a concatenation of the PEM-encoded public key certificates
     * of the chain.
     * * `private_key` – (Required) The contents of the private key in PEM-encoded format.
     */
    readonly namePrefix?: pulumi.ComputedValue<string>;
    /**
     * The IAM path for the server certificate.  If it is not
     * included, it defaults to a slash (/). If this certificate is for use with
     * AWS CloudFront, the path must be in format `/cloudfront/your_path_here`.
     * See [IAM Identifiers][1] for more details on IAM Paths.
     */
    readonly path?: pulumi.ComputedValue<string>;
    readonly privateKey: pulumi.ComputedValue<string>;
}

