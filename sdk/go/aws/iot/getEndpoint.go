// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package iot

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Returns a unique endpoint specific to the AWS account making the call.
func LookupEndpoint(ctx *pulumi.Context) (*GetEndpointResult, error) {
	outputs, err := ctx.Invoke("aws:iot/getEndpoint:getEndpoint", nil)
	if err != nil {
		return nil, err
	}
	return &GetEndpointResult{
		EndpointAddress: outputs["endpointAddress"],
	}, nil
}

// A collection of values returned by getEndpoint.
type GetEndpointResult struct {
	// The endpoint. The format of the endpoint is as follows: `IDENTIFIER.iot.REGION.amazonaws.com`.
	EndpointAddress interface{}
}
