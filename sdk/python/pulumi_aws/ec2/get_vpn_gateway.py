# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class GetVpnGatewayResult(object):
    """
    A collection of values returned by getVpnGateway.
    """
    def __init__(__self__, amazon_side_asn=None, attached_vpc_id=None, availability_zone=None, id=None, state=None, tags=None):
        if not amazon_side_asn:
            raise TypeError('Missing required argument amazon_side_asn')
        elif not isinstance(amazon_side_asn, basestring):
            raise TypeError('Expected argument amazon_side_asn to be a basestring')
        __self__.amazon_side_asn = amazon_side_asn
        if not attached_vpc_id:
            raise TypeError('Missing required argument attached_vpc_id')
        elif not isinstance(attached_vpc_id, basestring):
            raise TypeError('Expected argument attached_vpc_id to be a basestring')
        __self__.attached_vpc_id = attached_vpc_id
        if not availability_zone:
            raise TypeError('Missing required argument availability_zone')
        elif not isinstance(availability_zone, basestring):
            raise TypeError('Expected argument availability_zone to be a basestring')
        __self__.availability_zone = availability_zone
        if not id:
            raise TypeError('Missing required argument id')
        elif not isinstance(id, basestring):
            raise TypeError('Expected argument id to be a basestring')
        __self__.id = id
        if not state:
            raise TypeError('Missing required argument state')
        elif not isinstance(state, basestring):
            raise TypeError('Expected argument state to be a basestring')
        __self__.state = state
        if not tags:
            raise TypeError('Missing required argument tags')
        elif not isinstance(tags, dict):
            raise TypeError('Expected argument tags to be a dict')
        __self__.tags = tags

def get_vpn_gateway(amazon_side_asn=None, attached_vpc_id=None, availability_zone=None, filters=None, id=None, state=None, tags=None):
    """
    The VPN Gateway data source provides details about
    a specific VPN gateway.
    """
    __args__ = dict()

    __args__['amazonSideAsn'] = amazon_side_asn
    __args__['attachedVpcId'] = attached_vpc_id
    __args__['availabilityZone'] = availability_zone
    __args__['filters'] = filters
    __args__['id'] = id
    __args__['state'] = state
    __args__['tags'] = tags
    __ret__ = pulumi.runtime.invoke('aws:ec2/getVpnGateway:getVpnGateway', __args__)

    return GetVpnGatewayResult(
        amazon_side_asn=__ret__['amazonSideAsn'],
        attached_vpc_id=__ret__['attachedVpcId'],
        availability_zone=__ret__['availabilityZone'],
        id=__ret__['id'],
        state=__ret__['state'],
        tags=__ret__['tags'])