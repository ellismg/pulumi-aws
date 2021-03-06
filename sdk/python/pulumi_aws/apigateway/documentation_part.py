# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class DocumentationPart(pulumi.CustomResource):
    """
    Provides a settings of an API Gateway Documentation Part.
    """
    def __init__(__self__, __name__, __opts__=None, location=None, properties=None, rest_api_id=None):
        """Create a DocumentationPart resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not location:
            raise TypeError('Missing required property location')
        elif not isinstance(location, dict):
            raise TypeError('Expected property location to be a dict')
        __self__.location = location
        """
        The location of the targeted API entity of the to-be-created documentation part. See below.
        """
        __props__['location'] = location

        if not properties:
            raise TypeError('Missing required property properties')
        elif not isinstance(properties, basestring):
            raise TypeError('Expected property properties to be a basestring')
        __self__.properties = properties
        """
        A content map of API-specific key-value pairs describing the targeted API entity. The map must be encoded as a JSON string, e.g., "{ \"description\": \"The API does ...\" }". Only Swagger-compliant key-value pairs can be exported and, hence, published.
        """
        __props__['properties'] = properties

        if not rest_api_id:
            raise TypeError('Missing required property rest_api_id')
        elif not isinstance(rest_api_id, basestring):
            raise TypeError('Expected property rest_api_id to be a basestring')
        __self__.rest_api_id = rest_api_id
        """
        The ID of the associated Rest API
        """
        __props__['restApiId'] = rest_api_id

        super(DocumentationPart, __self__).__init__(
            'aws:apigateway/documentationPart:DocumentationPart',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'location' in outs:
            self.location = outs['location']
        if 'properties' in outs:
            self.properties = outs['properties']
        if 'restApiId' in outs:
            self.rest_api_id = outs['restApiId']
