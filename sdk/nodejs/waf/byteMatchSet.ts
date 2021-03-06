// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides a WAF Byte Match Set Resource
 */
export class ByteMatchSet extends pulumi.CustomResource {
    /**
     * Get an existing ByteMatchSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ByteMatchSetState): ByteMatchSet {
        return new ByteMatchSet(name, <any>state, { id });
    }

    /**
     * Specifies the bytes (typically a string that corresponds
     * with ASCII characters) that you want to search for in web requests,
     * the location in requests that you want to search, and other settings.
     */
    public readonly byteMatchTuples: pulumi.Output<{ fieldToMatch: { data?: string, type: string }, positionalConstraint: string, targetString?: string, textTransformation: string }[] | undefined>;
    /**
     * The name or description of the Byte Match Set.
     */
    public readonly name: pulumi.Output<string>;

    /**
     * Create a ByteMatchSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ByteMatchSetArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: ByteMatchSetArgs | ByteMatchSetState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ByteMatchSetState = argsOrState as ByteMatchSetState | undefined;
            inputs["byteMatchTuples"] = state ? state.byteMatchTuples : undefined;
            inputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as ByteMatchSetArgs | undefined;
            inputs["byteMatchTuples"] = args ? args.byteMatchTuples : undefined;
            inputs["name"] = args ? args.name : undefined;
        }
        super("aws:waf/byteMatchSet:ByteMatchSet", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ByteMatchSet resources.
 */
export interface ByteMatchSetState {
    /**
     * Specifies the bytes (typically a string that corresponds
     * with ASCII characters) that you want to search for in web requests,
     * the location in requests that you want to search, and other settings.
     */
    readonly byteMatchTuples?: pulumi.Input<{ fieldToMatch: pulumi.Input<{ data?: pulumi.Input<string>, type: pulumi.Input<string> }>, positionalConstraint: pulumi.Input<string>, targetString?: pulumi.Input<string>, textTransformation: pulumi.Input<string> }[]>;
    /**
     * The name or description of the Byte Match Set.
     */
    readonly name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ByteMatchSet resource.
 */
export interface ByteMatchSetArgs {
    /**
     * Specifies the bytes (typically a string that corresponds
     * with ASCII characters) that you want to search for in web requests,
     * the location in requests that you want to search, and other settings.
     */
    readonly byteMatchTuples?: pulumi.Input<{ fieldToMatch: pulumi.Input<{ data?: pulumi.Input<string>, type: pulumi.Input<string> }>, positionalConstraint: pulumi.Input<string>, targetString?: pulumi.Input<string>, textTransformation: pulumi.Input<string> }[]>;
    /**
     * The name or description of the Byte Match Set.
     */
    readonly name?: pulumi.Input<string>;
}
