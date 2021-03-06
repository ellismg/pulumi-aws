# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Document(pulumi.CustomResource):
    """
    Provides an SSM Document resource
    
    ~> **NOTE on updating SSM documents:** Only documents with a schema version of 2.0
    or greater can update their content once created, see [SSM Schema Features][1]. To update a document with an older
    schema version you must recreate the resource.
    """
    def __init__(__self__, __name__, __opts__=None, content=None, document_format=None, document_type=None, name=None, permissions=None, tags=None):
        """Create a Document resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not content:
            raise TypeError('Missing required property content')
        elif not isinstance(content, basestring):
            raise TypeError('Expected property content to be a basestring')
        __self__.content = content
        """
        The JSON or YAML content of the document.
        """
        __props__['content'] = content

        if document_format and not isinstance(document_format, basestring):
            raise TypeError('Expected property document_format to be a basestring')
        __self__.document_format = document_format
        """
        The format of the document. Valid document types include: `JSON` and `YAML`
        """
        __props__['documentFormat'] = document_format

        if not document_type:
            raise TypeError('Missing required property document_type')
        elif not isinstance(document_type, basestring):
            raise TypeError('Expected property document_type to be a basestring')
        __self__.document_type = document_type
        """
        The type of the document. Valid document types include: `Command`, `Policy` and `Automation`
        """
        __props__['documentType'] = document_type

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the document.
        """
        __props__['name'] = name

        if permissions and not isinstance(permissions, dict):
            raise TypeError('Expected property permissions to be a dict')
        __self__.permissions = permissions
        """
        Additional Permissions to attach to the document. See [Permissions](#permissions) below for details.
        """
        __props__['permissions'] = permissions

        if tags and not isinstance(tags, dict):
            raise TypeError('Expected property tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags to assign to the object.
        """
        __props__['tags'] = tags

        __self__.arn = pulumi.runtime.UNKNOWN
        __self__.created_date = pulumi.runtime.UNKNOWN
        """
        The date the document was created.
        """
        __self__.default_version = pulumi.runtime.UNKNOWN
        """
        The default version of the document.
        """
        __self__.description = pulumi.runtime.UNKNOWN
        """
        The description of the document.
        """
        __self__.hash = pulumi.runtime.UNKNOWN
        """
        The sha1 or sha256 of the document content
        """
        __self__.hash_type = pulumi.runtime.UNKNOWN
        """
        "Sha1" "Sha256". The hashing algorithm used when hashing the content.
        """
        __self__.latest_version = pulumi.runtime.UNKNOWN
        """
        The latest version of the document.
        """
        __self__.owner = pulumi.runtime.UNKNOWN
        """
        The AWS user account of the person who created the document.
        """
        __self__.parameters = pulumi.runtime.UNKNOWN
        """
        The parameters that are available to this document.
        """
        __self__.platform_types = pulumi.runtime.UNKNOWN
        """
        A list of OS platforms compatible with this SSM document, either "Windows" or "Linux".
        """
        __self__.schema_version = pulumi.runtime.UNKNOWN
        """
        The schema version of the document.
        """
        __self__.status = pulumi.runtime.UNKNOWN
        """
        "Creating", "Active" or "Deleting". The current status of the document.
        """

        super(Document, __self__).__init__(
            'aws:ssm/document:Document',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'arn' in outs:
            self.arn = outs['arn']
        if 'content' in outs:
            self.content = outs['content']
        if 'createdDate' in outs:
            self.created_date = outs['createdDate']
        if 'defaultVersion' in outs:
            self.default_version = outs['defaultVersion']
        if 'description' in outs:
            self.description = outs['description']
        if 'documentFormat' in outs:
            self.document_format = outs['documentFormat']
        if 'documentType' in outs:
            self.document_type = outs['documentType']
        if 'hash' in outs:
            self.hash = outs['hash']
        if 'hashType' in outs:
            self.hash_type = outs['hashType']
        if 'latestVersion' in outs:
            self.latest_version = outs['latestVersion']
        if 'name' in outs:
            self.name = outs['name']
        if 'owner' in outs:
            self.owner = outs['owner']
        if 'parameters' in outs:
            self.parameters = outs['parameters']
        if 'permissions' in outs:
            self.permissions = outs['permissions']
        if 'platformTypes' in outs:
            self.platform_types = outs['platformTypes']
        if 'schemaVersion' in outs:
            self.schema_version = outs['schemaVersion']
        if 'status' in outs:
            self.status = outs['status']
        if 'tags' in outs:
            self.tags = outs['tags']
