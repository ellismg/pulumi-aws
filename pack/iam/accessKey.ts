// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an IAM access key. This is a set of credentials that allow API requests to be made as an IAM user.
 */
export class AccessKey extends pulumi.Resource {
    /**
     * The encrypted secret, base64 encoded.
     * ~> **NOTE:** The encrypted secret may be decrypted using the command line,
     * for example: `terraform output secret | base64 --decode | keybase pgp decrypt`.
     */
    public /*out*/ readonly encryptedSecret: pulumi.Computed<string>;
    /**
     * The fingerprint of the PGP key used to encrypt
     * the secret
     */
    public /*out*/ readonly keyFingerprint: pulumi.Computed<string>;
    /**
     * Either a base-64 encoded PGP public key, or a
     * keybase username in the form `keybase:username`.
     */
    public readonly pgpKey?: pulumi.Computed<string>;
    /**
     * The secret access key. Note that this will be written
     * to the state file. Please supply a `pgp_key` instead, which will prevent the
     * secret from being stored in plain text
     */
    public /*out*/ readonly secret: pulumi.Computed<string>;
    /**
     * The secret access key converted into an SES SMTP
     * password by applying [AWS's documented conversion
     * algorithm](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-credentials.html#smtp-credentials-convert).
     */
    public /*out*/ readonly sesSmtpPassword: pulumi.Computed<string>;
    /**
     * "Active" or "Inactive". Keys are initially active, but can be made
     * inactive by other means.
     */
    public /*out*/ readonly status: pulumi.Computed<string>;
    /**
     * The IAM user to associate with this access key.
     */
    public readonly user: pulumi.Computed<string>;

    /**
     * Create a AccessKey resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this AccessKey instance
     * @param args A collection of arguments for creating this AccessKey intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: AccessKeyArgs, dependsOn?: pulumi.Resource[]) {
        if (args.user === undefined) {
            throw new Error("Missing required property 'user'");
        }
        super("aws:iam/accessKey:AccessKey", urnName, {
            "pgpKey": args.pgpKey,
            "user": args.user,
            "encryptedSecret": undefined,
            "keyFingerprint": undefined,
            "secret": undefined,
            "sesSmtpPassword": undefined,
            "status": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a AccessKey resource.
 */
export interface AccessKeyArgs {
    /**
     * Either a base-64 encoded PGP public key, or a
     * keybase username in the form `keybase:username`.
     */
    readonly pgpKey?: pulumi.ComputedValue<string>;
    /**
     * The IAM user to associate with this access key.
     */
    readonly user: pulumi.ComputedValue<string>;
}

