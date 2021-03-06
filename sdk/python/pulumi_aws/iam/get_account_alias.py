# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class GetAccountAliasResult(object):
    """
    A collection of values returned by getAccountAlias.
    """
    def __init__(__self__, account_alias=None):
        if account_alias and not isinstance(account_alias, basestring):
            raise TypeError('Expected argument account_alias to be a basestring')
        __self__.account_alias = account_alias
        """
        The alias associated with the AWS account.
        """

def get_account_alias():
    """
    The IAM Account Alias data source allows access to the account alias
    for the effective account in which Terraform is working.
    """
    __args__ = dict()

    __ret__ = pulumi.runtime.invoke('aws:iam/getAccountAlias:getAccountAlias', __args__)

    return GetAccountAliasResult(
        account_alias=__ret__.get('accountAlias'))
