# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class GetNetworkInterfaceResult(object):
    """
    A collection of values returned by getNetworkInterface.
    """
    def __init__(__self__, associations=None, attachments=None, availability_zone=None, description=None, id=None, interface_type=None, ipv6_addresses=None, mac_address=None, owner_id=None, private_dns_name=None, private_ip=None, private_ips=None, requester_id=None, security_groups=None, subnet_id=None, tags=None, vpc_id=None):
        if associations and not isinstance(associations, list):
            raise TypeError('Expected argument associations to be a list')
        __self__.associations = associations
        """
        The association information for an Elastic IP address (IPv4) associated with the network interface. See supported fields below.
        """
        if attachments and not isinstance(attachments, list):
            raise TypeError('Expected argument attachments to be a list')
        __self__.attachments = attachments
        if availability_zone and not isinstance(availability_zone, basestring):
            raise TypeError('Expected argument availability_zone to be a basestring')
        __self__.availability_zone = availability_zone
        """
        The Availability Zone.
        """
        if description and not isinstance(description, basestring):
            raise TypeError('Expected argument description to be a basestring')
        __self__.description = description
        if id and not isinstance(id, basestring):
            raise TypeError('Expected argument id to be a basestring')
        __self__.id = id
        if interface_type and not isinstance(interface_type, basestring):
            raise TypeError('Expected argument interface_type to be a basestring')
        __self__.interface_type = interface_type
        """
        The type of interface.
        """
        if ipv6_addresses and not isinstance(ipv6_addresses, list):
            raise TypeError('Expected argument ipv6_addresses to be a list')
        __self__.ipv6_addresses = ipv6_addresses
        """
        List of IPv6 addresses to assign to the ENI.
        """
        if mac_address and not isinstance(mac_address, basestring):
            raise TypeError('Expected argument mac_address to be a basestring')
        __self__.mac_address = mac_address
        """
        The MAC address.
        """
        if owner_id and not isinstance(owner_id, basestring):
            raise TypeError('Expected argument owner_id to be a basestring')
        __self__.owner_id = owner_id
        """
        The AWS account ID of the owner of the network interface.
        """
        if private_dns_name and not isinstance(private_dns_name, basestring):
            raise TypeError('Expected argument private_dns_name to be a basestring')
        __self__.private_dns_name = private_dns_name
        if private_ip and not isinstance(private_ip, basestring):
            raise TypeError('Expected argument private_ip to be a basestring')
        __self__.private_ip = private_ip
        if private_ips and not isinstance(private_ips, list):
            raise TypeError('Expected argument private_ips to be a list')
        __self__.private_ips = private_ips
        if requester_id and not isinstance(requester_id, basestring):
            raise TypeError('Expected argument requester_id to be a basestring')
        __self__.requester_id = requester_id
        """
        The ID of the entity that launched the instance on your behalf.
        """
        if security_groups and not isinstance(security_groups, list):
            raise TypeError('Expected argument security_groups to be a list')
        __self__.security_groups = security_groups
        if subnet_id and not isinstance(subnet_id, basestring):
            raise TypeError('Expected argument subnet_id to be a basestring')
        __self__.subnet_id = subnet_id
        if tags and not isinstance(tags, dict):
            raise TypeError('Expected argument tags to be a dict')
        __self__.tags = tags
        if vpc_id and not isinstance(vpc_id, basestring):
            raise TypeError('Expected argument vpc_id to be a basestring')
        __self__.vpc_id = vpc_id

def get_network_interface(filters=None, id=None, tags=None):
    """
    Use this data source to get information about a Network Interface.
    """
    __args__ = dict()

    __args__['filters'] = filters
    __args__['id'] = id
    __args__['tags'] = tags
    __ret__ = pulumi.runtime.invoke('aws:ec2/getNetworkInterface:getNetworkInterface', __args__)

    return GetNetworkInterfaceResult(
        associations=__ret__.get('associations'),
        attachments=__ret__.get('attachments'),
        availability_zone=__ret__.get('availabilityZone'),
        description=__ret__.get('description'),
        id=__ret__.get('id'),
        interface_type=__ret__.get('interfaceType'),
        ipv6_addresses=__ret__.get('ipv6Addresses'),
        mac_address=__ret__.get('macAddress'),
        owner_id=__ret__.get('ownerId'),
        private_dns_name=__ret__.get('privateDnsName'),
        private_ip=__ret__.get('privateIp'),
        private_ips=__ret__.get('privateIps'),
        requester_id=__ret__.get('requesterId'),
        security_groups=__ret__.get('securityGroups'),
        subnet_id=__ret__.get('subnetId'),
        tags=__ret__.get('tags'),
        vpc_id=__ret__.get('vpcId'))
