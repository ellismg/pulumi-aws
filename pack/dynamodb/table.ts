// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a DynamoDB table resource
 */
export class Table extends pulumi.Resource {
    /**
     * The arn of the table
     */
    public /*out*/ readonly arn: pulumi.Computed<string>;
    /**
     * Define an attribute, has two properties:
     */
    public readonly attribute: pulumi.Computed<{ name: string, type: string }[]>;
    /**
     * Describe a GSO for the table;
     * subject to the normal limits on the number of GSIs, projected
     * attributes, etc.
     */
    public readonly globalSecondaryIndex?: pulumi.Computed<{ hashKey: string, name: string, nonKeyAttributes?: string[], projectionType: string, rangeKey?: string, readCapacity: number, writeCapacity: number }[]>;
    /**
     * The name of the hash key in the index; must be
     * defined as an attribute in the resource. Only applies to
     * `global_secondary_index`
     */
    public readonly hashKey: pulumi.Computed<string>;
    /**
     * Describe an LSI on the table;
     * these can only be allocated *at creation* so you cannot change this
     * definition after you have created the resource.
     */
    public readonly localSecondaryIndex?: pulumi.Computed<{ name: string, nonKeyAttributes?: string[], projectionType: string, rangeKey: string }[]>;
    /**
     * The name of the LSI or GSI
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * The name of the range key; must be defined
     */
    public readonly rangeKey?: pulumi.Computed<string>;
    /**
     * The number of read units for this table
     */
    public readonly readCapacity: pulumi.Computed<number>;
    /**
     * The ARN of the Table Stream. Only available when `stream_enabled = true`
     */
    public /*out*/ readonly streamArn: pulumi.Computed<string>;
    /**
     * Indicates whether Streams are to be enabled (true) or disabled (false).
     */
    public readonly streamEnabled: pulumi.Computed<boolean>;
    /**
     * A timestamp, in ISO 8601 format, for this stream. Note that this timestamp is not
     * a unique identifier for the stream on its own. However, the combination of AWS customer ID,
     * table name and this field is guaranteed to be unique.
     * It can be used for creating CloudWatch Alarms. Only available when `stream_enabled = true`
     */
    public /*out*/ readonly streamLabel: pulumi.Computed<string>;
    /**
     * When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are KEYS_ONLY, NEW_IMAGE, OLD_IMAGE, NEW_AND_OLD_IMAGES.
     */
    public readonly streamViewType: pulumi.Computed<string>;
    /**
     * A map of tags to populate on the created table.
     */
    public readonly tags?: pulumi.Computed<{[key: string]: any}>;
    /**
     * Defines ttl, has two properties, and can only be specified once:
     */
    public readonly ttl?: pulumi.Computed<{ attributeName: string, enabled: boolean }[]>;
    /**
     * The number of write units for this table
     */
    public readonly writeCapacity: pulumi.Computed<number>;

    /**
     * Create a Table resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Table instance
     * @param args A collection of arguments for creating this Table intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: TableArgs, dependsOn?: pulumi.Resource[]) {
        if (args.attribute === undefined) {
            throw new Error("Missing required property 'attribute'");
        }
        if (args.hashKey === undefined) {
            throw new Error("Missing required property 'hashKey'");
        }
        if (args.readCapacity === undefined) {
            throw new Error("Missing required property 'readCapacity'");
        }
        if (args.writeCapacity === undefined) {
            throw new Error("Missing required property 'writeCapacity'");
        }
        super("aws:dynamodb/table:Table", urnName, {
            "attribute": args.attribute,
            "globalSecondaryIndex": args.globalSecondaryIndex,
            "hashKey": args.hashKey,
            "localSecondaryIndex": args.localSecondaryIndex,
            "name": args.name,
            "rangeKey": args.rangeKey,
            "readCapacity": args.readCapacity,
            "streamEnabled": args.streamEnabled,
            "streamViewType": args.streamViewType,
            "tags": args.tags,
            "ttl": args.ttl,
            "writeCapacity": args.writeCapacity,
            "arn": undefined,
            "streamArn": undefined,
            "streamLabel": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Table resource.
 */
export interface TableArgs {
    /**
     * Define an attribute, has two properties:
     */
    readonly attribute: pulumi.ComputedValue<{ name: pulumi.ComputedValue<string>, type: pulumi.ComputedValue<string> }>[];
    /**
     * Describe a GSO for the table;
     * subject to the normal limits on the number of GSIs, projected
     * attributes, etc.
     */
    readonly globalSecondaryIndex?: pulumi.ComputedValue<{ hashKey: pulumi.ComputedValue<string>, name: pulumi.ComputedValue<string>, nonKeyAttributes?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[], projectionType: pulumi.ComputedValue<string>, rangeKey?: pulumi.ComputedValue<string>, readCapacity: pulumi.ComputedValue<number>, writeCapacity: pulumi.ComputedValue<number> }>[];
    /**
     * The name of the hash key in the index; must be
     * defined as an attribute in the resource. Only applies to
     * `global_secondary_index`
     */
    readonly hashKey: pulumi.ComputedValue<string>;
    /**
     * Describe an LSI on the table;
     * these can only be allocated *at creation* so you cannot change this
     * definition after you have created the resource.
     */
    readonly localSecondaryIndex?: pulumi.ComputedValue<{ name: pulumi.ComputedValue<string>, nonKeyAttributes?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[], projectionType: pulumi.ComputedValue<string>, rangeKey: pulumi.ComputedValue<string> }>[];
    /**
     * The name of the LSI or GSI
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * The name of the range key; must be defined
     */
    readonly rangeKey?: pulumi.ComputedValue<string>;
    /**
     * The number of read units for this table
     */
    readonly readCapacity: pulumi.ComputedValue<number>;
    /**
     * Indicates whether Streams are to be enabled (true) or disabled (false).
     */
    readonly streamEnabled?: pulumi.ComputedValue<boolean>;
    /**
     * When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are KEYS_ONLY, NEW_IMAGE, OLD_IMAGE, NEW_AND_OLD_IMAGES.
     */
    readonly streamViewType?: pulumi.ComputedValue<string>;
    /**
     * A map of tags to populate on the created table.
     */
    readonly tags?: pulumi.ComputedValue<{[key: string]: any}>;
    /**
     * Defines ttl, has two properties, and can only be specified once:
     */
    readonly ttl?: pulumi.ComputedValue<{ attributeName: pulumi.ComputedValue<string>, enabled: pulumi.ComputedValue<boolean> }>[];
    /**
     * The number of write units for this table
     */
    readonly writeCapacity: pulumi.ComputedValue<number>;
}

