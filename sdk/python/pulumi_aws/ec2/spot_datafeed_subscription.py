# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class SpotDatafeedSubscription(pulumi.CustomResource):
    """
    -> **Note:** There is only a single subscription allowed per account.
    
    To help you understand the charges for your Spot instances, Amazon EC2 provides a data feed that describes your Spot instance usage and pricing.
    This data feed is sent to an Amazon S3 bucket that you specify when you subscribe to the data feed.
    """
    def __init__(__self__, __name__, __opts__=None, bucket=None, prefix=None):
        """Create a SpotDatafeedSubscription resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not bucket:
            raise TypeError('Missing required property bucket')
        elif not isinstance(bucket, basestring):
            raise TypeError('Expected property bucket to be a basestring')
        __self__.bucket = bucket
        """
        The Amazon S3 bucket in which to store the Spot instance data feed.
        """
        __props__['bucket'] = bucket

        if prefix and not isinstance(prefix, basestring):
            raise TypeError('Expected property prefix to be a basestring')
        __self__.prefix = prefix
        """
        Path of folder inside bucket to place spot pricing data.
        """
        __props__['prefix'] = prefix

        super(SpotDatafeedSubscription, __self__).__init__(
            'aws:ec2/spotDatafeedSubscription:SpotDatafeedSubscription',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'bucket' in outs:
            self.bucket = outs['bucket']
        if 'prefix' in outs:
            self.prefix = outs['prefix']
