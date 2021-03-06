# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Authorizer(pulumi.CustomResource):
    """
    Provides an API Gateway Authorizer.
    """
    def __init__(__self__, __name__, __opts__=None, authorizer_credentials=None, authorizer_result_ttl_in_seconds=None, authorizer_uri=None, identity_source=None, identity_validation_expression=None, name=None, provider_arns=None, rest_api=None, type=None):
        """Create a Authorizer resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if authorizer_credentials and not isinstance(authorizer_credentials, basestring):
            raise TypeError('Expected property authorizer_credentials to be a basestring')
        __self__.authorizer_credentials = authorizer_credentials
        """
        The credentials required for the authorizer.
        To specify an IAM Role for API Gateway to assume, use the IAM Role ARN.
        """
        __props__['authorizerCredentials'] = authorizer_credentials

        if authorizer_result_ttl_in_seconds and not isinstance(authorizer_result_ttl_in_seconds, int):
            raise TypeError('Expected property authorizer_result_ttl_in_seconds to be a int')
        __self__.authorizer_result_ttl_in_seconds = authorizer_result_ttl_in_seconds
        """
        The TTL of cached authorizer results in seconds.
        Defaults to `300`.
        """
        __props__['authorizerResultTtlInSeconds'] = authorizer_result_ttl_in_seconds

        if authorizer_uri and not isinstance(authorizer_uri, basestring):
            raise TypeError('Expected property authorizer_uri to be a basestring')
        __self__.authorizer_uri = authorizer_uri
        """
        The authorizer's Uniform Resource Identifier (URI).
        This must be a well-formed Lambda function URI in the form of `arn:aws:apigateway:{region}:lambda:path/{service_api}`,
        e.g. `arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:012345678912:function:my-function/invocations`
        """
        __props__['authorizerUri'] = authorizer_uri

        if identity_source and not isinstance(identity_source, basestring):
            raise TypeError('Expected property identity_source to be a basestring')
        __self__.identity_source = identity_source
        """
        The source of the identity in an incoming request.
        Defaults to `method.request.header.Authorization`. For `REQUEST` type, this may be a comma-separated list of values, including headers, query string parameters and stage variables - e.g. `"method.request.header.SomeHeaderName,method.request.querystring.SomeQueryStringName,stageVariables.SomeStageVariableName"`
        """
        __props__['identitySource'] = identity_source

        if identity_validation_expression and not isinstance(identity_validation_expression, basestring):
            raise TypeError('Expected property identity_validation_expression to be a basestring')
        __self__.identity_validation_expression = identity_validation_expression
        """
        A validation expression for the incoming identity.
        For `TOKEN` type, this value should be a regular expression. The incoming token from the client is matched
        against this expression, and will proceed if the token matches. If the token doesn't match,
        the client receives a 401 Unauthorized response.
        """
        __props__['identityValidationExpression'] = identity_validation_expression

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the authorizer
        """
        __props__['name'] = name

        if provider_arns and not isinstance(provider_arns, list):
            raise TypeError('Expected property provider_arns to be a list')
        __self__.provider_arns = provider_arns
        """
        A list of the Amazon Cognito user pool ARNs.
        Each element is of this format: `arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}`.
        """
        __props__['providerArns'] = provider_arns

        if not rest_api:
            raise TypeError('Missing required property rest_api')
        elif not isinstance(rest_api, basestring):
            raise TypeError('Expected property rest_api to be a basestring')
        __self__.rest_api = rest_api
        """
        The ID of the associated REST API
        """
        __props__['restApi'] = rest_api

        if type and not isinstance(type, basestring):
            raise TypeError('Expected property type to be a basestring')
        __self__.type = type
        """
        The type of the authorizer. Possible values are `TOKEN` for a Lambda function using a single authorization token submitted in a custom header, `REQUEST` for a Lambda function using incoming request parameters, or `COGNITO_USER_POOLS` for using an Amazon Cognito user pool.
        Defaults to `TOKEN`.
        """
        __props__['type'] = type

        super(Authorizer, __self__).__init__(
            'aws:apigateway/authorizer:Authorizer',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'authorizerCredentials' in outs:
            self.authorizer_credentials = outs['authorizerCredentials']
        if 'authorizerResultTtlInSeconds' in outs:
            self.authorizer_result_ttl_in_seconds = outs['authorizerResultTtlInSeconds']
        if 'authorizerUri' in outs:
            self.authorizer_uri = outs['authorizerUri']
        if 'identitySource' in outs:
            self.identity_source = outs['identitySource']
        if 'identityValidationExpression' in outs:
            self.identity_validation_expression = outs['identityValidationExpression']
        if 'name' in outs:
            self.name = outs['name']
        if 'providerArns' in outs:
            self.provider_arns = outs['providerArns']
        if 'restApi' in outs:
            self.rest_api = outs['restApi']
        if 'type' in outs:
            self.type = outs['type']
