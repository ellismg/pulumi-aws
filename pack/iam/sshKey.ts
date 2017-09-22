// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Uploads an SSH public key and associates it with the specified IAM user.
 */
export class SshKey extends pulumi.Resource {
    /**
     * Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use SSH . To retrieve the public key in PEM format, use PEM .
     */
    public readonly encoding: pulumi.Computed<string>;
    /**
     * The MD5 message digest of the SSH public key.
     */
    public /*out*/ readonly fingerprint: pulumi.Computed<string>;
    /**
     * The SSH public key. The public key must be encoded in ssh-rsa format or PEM format.
     */
    public readonly publicKey: pulumi.Computed<string>;
    /**
     * The unique identifier for the SSH public key.
     */
    public /*out*/ readonly sshPublicKeyId: pulumi.Computed<string>;
    /**
     * The status to assign to the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used. Default is `active`.
     */
    public readonly status: pulumi.Computed<string>;
    /**
     * The name of the IAM user to associate the SSH public key with.
     */
    public readonly username: pulumi.Computed<string>;

    /**
     * Create a SshKey resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this SshKey instance
     * @param args A collection of arguments for creating this SshKey intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: SshKeyArgs, dependsOn?: pulumi.Resource[]) {
        if (args.encoding === undefined) {
            throw new Error("Missing required property 'encoding'");
        }
        if (args.publicKey === undefined) {
            throw new Error("Missing required property 'publicKey'");
        }
        if (args.username === undefined) {
            throw new Error("Missing required property 'username'");
        }
        super("aws:iam/sshKey:SshKey", urnName, {
            "encoding": args.encoding,
            "publicKey": args.publicKey,
            "status": args.status,
            "username": args.username,
            "fingerprint": undefined,
            "sshPublicKeyId": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a SshKey resource.
 */
export interface SshKeyArgs {
    /**
     * Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use SSH . To retrieve the public key in PEM format, use PEM .
     */
    readonly encoding: pulumi.ComputedValue<string>;
    /**
     * The SSH public key. The public key must be encoded in ssh-rsa format or PEM format.
     */
    readonly publicKey: pulumi.ComputedValue<string>;
    /**
     * The status to assign to the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used. Default is `active`.
     */
    readonly status?: pulumi.ComputedValue<string>;
    /**
     * The name of the IAM user to associate the SSH public key with.
     */
    readonly username: pulumi.ComputedValue<string>;
}

