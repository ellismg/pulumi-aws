// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an SSM Document resource
 * 
 * ~> **NOTE on updating SSM documents:** Only documents with a schema version of 2.0
 * or greater can update their content once created, see [SSM Schema Features][1]. To update a document with an older
 * schema version you must recreate the resource.
 */
export class Document extends pulumi.Resource {
    public /*out*/ readonly arn: pulumi.Computed<string>;
    /**
     * The json content of the document.
     */
    public readonly content: pulumi.Computed<string>;
    /**
     * The date the document was created.
     */
    public /*out*/ readonly createdDate: pulumi.Computed<string>;
    /**
     * The default version of the document.
     */
    public /*out*/ readonly defaultVersion: pulumi.Computed<string>;
    /**
     * The description of the document.
     */
    public /*out*/ readonly description: pulumi.Computed<string>;
    /**
     * The type of the document. Valid document types include: `Command`, `Policy` and `Automation`
     */
    public readonly documentType: pulumi.Computed<string>;
    /**
     * The sha1 or sha256 of the document content
     */
    public /*out*/ readonly hash: pulumi.Computed<string>;
    /**
     * "Sha1" "Sha256". The hashing algorithm used when hashing the content.
     */
    public /*out*/ readonly hashType: pulumi.Computed<string>;
    /**
     * The latest version of the document.
     */
    public /*out*/ readonly latestVersion: pulumi.Computed<string>;
    /**
     * The name of the document.
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * The AWS user account of the person who created the document.
     */
    public /*out*/ readonly owner: pulumi.Computed<string>;
    /**
     * The parameters that are available to this document.
     */
    public /*out*/ readonly parameter: pulumi.Computed<{ defaultValue?: string, description?: string, name?: string, type?: string }[]>;
    /**
     * Additional Permissions to attach to the document. See [Permissions](#permissions) below for details.
     */
    public readonly permissions?: pulumi.Computed<{[key: string]: { accountIds: string, type: string }}>;
    /**
     * A list of OS platforms compatible with this SSM document, either "Windows" or "Linux".
     */
    public /*out*/ readonly platformTypes: pulumi.Computed<string[]>;
    /**
     * The schema version of the document.
     */
    public /*out*/ readonly schemaVersion: pulumi.Computed<string>;
    /**
     * "Creating", "Active" or "Deleting". The current status of the document.
     */
    public /*out*/ readonly status: pulumi.Computed<string>;

    /**
     * Create a Document resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Document instance
     * @param args A collection of arguments for creating this Document intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: DocumentArgs, dependsOn?: pulumi.Resource[]) {
        if (args.content === undefined) {
            throw new Error("Missing required property 'content'");
        }
        if (args.documentType === undefined) {
            throw new Error("Missing required property 'documentType'");
        }
        super("aws:ssm/document:Document", urnName, {
            "content": args.content,
            "documentType": args.documentType,
            "name": args.name,
            "permissions": args.permissions,
            "arn": undefined,
            "createdDate": undefined,
            "defaultVersion": undefined,
            "description": undefined,
            "hash": undefined,
            "hashType": undefined,
            "latestVersion": undefined,
            "owner": undefined,
            "parameter": undefined,
            "platformTypes": undefined,
            "schemaVersion": undefined,
            "status": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Document resource.
 */
export interface DocumentArgs {
    /**
     * The json content of the document.
     */
    readonly content: pulumi.ComputedValue<string>;
    /**
     * The type of the document. Valid document types include: `Command`, `Policy` and `Automation`
     */
    readonly documentType: pulumi.ComputedValue<string>;
    /**
     * The name of the document.
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * Additional Permissions to attach to the document. See [Permissions](#permissions) below for details.
     */
    readonly permissions?: pulumi.ComputedValue<{[key: string]: { accountIds: pulumi.ComputedValue<string>, type: pulumi.ComputedValue<string> }}>;
}

