# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Response(pulumi.CustomResource):
    """
    Provides an API Gateway Gateway Response for a REST API Gateway.
    """
    def __init__(__self__, __name__, __opts__=None, response_parameters=None, response_templates=None, response_type=None, rest_api_id=None, status_code=None):
        """Create a Response resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if response_parameters and not isinstance(response_parameters, dict):
            raise TypeError('Expected property response_parameters to be a dict')
        __self__.response_parameters = response_parameters
        """
        A map specifying the templates used to transform the response body.
        """
        __props__['responseParameters'] = response_parameters

        if response_templates and not isinstance(response_templates, dict):
            raise TypeError('Expected property response_templates to be a dict')
        __self__.response_templates = response_templates
        """
        A map specifying the parameters (paths, query strings and headers) of the Gateway Response.
        """
        __props__['responseTemplates'] = response_templates

        if not response_type:
            raise TypeError('Missing required property response_type')
        elif not isinstance(response_type, basestring):
            raise TypeError('Expected property response_type to be a basestring')
        __self__.response_type = response_type
        """
        The response type of the associated GatewayResponse.
        """
        __props__['responseType'] = response_type

        if not rest_api_id:
            raise TypeError('Missing required property rest_api_id')
        elif not isinstance(rest_api_id, basestring):
            raise TypeError('Expected property rest_api_id to be a basestring')
        __self__.rest_api_id = rest_api_id
        """
        The string identifier of the associated REST API.
        """
        __props__['restApiId'] = rest_api_id

        if status_code and not isinstance(status_code, basestring):
            raise TypeError('Expected property status_code to be a basestring')
        __self__.status_code = status_code
        """
        The HTTP status code of the Gateway Response.
        """
        __props__['statusCode'] = status_code

        super(Response, __self__).__init__(
            'aws:apigateway/response:Response',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'responseParameters' in outs:
            self.response_parameters = outs['responseParameters']
        if 'responseTemplates' in outs:
            self.response_templates = outs['responseTemplates']
        if 'responseType' in outs:
            self.response_type = outs['responseType']
        if 'restApiId' in outs:
            self.rest_api_id = outs['restApiId']
        if 'statusCode' in outs:
            self.status_code = outs['statusCode']
