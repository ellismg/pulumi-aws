# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class GetSnapshotResult(object):
    """
    A collection of values returned by getSnapshot.
    """
    def __init__(__self__, allocated_storage=None, availability_zone=None, db_snapshot_arn=None, encrypted=None, engine=None, engine_version=None, iops=None, kms_key_id=None, license_model=None, option_group_name=None, port=None, snapshot_create_time=None, source_db_snapshot_identifier=None, source_region=None, status=None, storage_type=None, vpc_id=None):
        if allocated_storage and not isinstance(allocated_storage, int):
            raise TypeError('Expected argument allocated_storage to be a int')
        __self__.allocated_storage = allocated_storage
        """
        Specifies the allocated storage size in gigabytes (GB).
        """
        if availability_zone and not isinstance(availability_zone, basestring):
            raise TypeError('Expected argument availability_zone to be a basestring')
        __self__.availability_zone = availability_zone
        """
        Specifies the name of the Availability Zone the DB instance was located in at the time of the DB snapshot.
        """
        if db_snapshot_arn and not isinstance(db_snapshot_arn, basestring):
            raise TypeError('Expected argument db_snapshot_arn to be a basestring')
        __self__.db_snapshot_arn = db_snapshot_arn
        """
        The Amazon Resource Name (ARN) for the DB snapshot.
        """
        if encrypted and not isinstance(encrypted, bool):
            raise TypeError('Expected argument encrypted to be a bool')
        __self__.encrypted = encrypted
        """
        Specifies whether the DB snapshot is encrypted.
        """
        if engine and not isinstance(engine, basestring):
            raise TypeError('Expected argument engine to be a basestring')
        __self__.engine = engine
        """
        Specifies the name of the database engine.
        """
        if engine_version and not isinstance(engine_version, basestring):
            raise TypeError('Expected argument engine_version to be a basestring')
        __self__.engine_version = engine_version
        """
        Specifies the version of the database engine.
        """
        if iops and not isinstance(iops, int):
            raise TypeError('Expected argument iops to be a int')
        __self__.iops = iops
        """
        Specifies the Provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.
        """
        if kms_key_id and not isinstance(kms_key_id, basestring):
            raise TypeError('Expected argument kms_key_id to be a basestring')
        __self__.kms_key_id = kms_key_id
        """
        The ARN for the KMS encryption key.
        """
        if license_model and not isinstance(license_model, basestring):
            raise TypeError('Expected argument license_model to be a basestring')
        __self__.license_model = license_model
        """
        License model information for the restored DB instance.
        """
        if option_group_name and not isinstance(option_group_name, basestring):
            raise TypeError('Expected argument option_group_name to be a basestring')
        __self__.option_group_name = option_group_name
        """
        Provides the option group name for the DB snapshot.
        """
        if port and not isinstance(port, int):
            raise TypeError('Expected argument port to be a int')
        __self__.port = port
        if snapshot_create_time and not isinstance(snapshot_create_time, basestring):
            raise TypeError('Expected argument snapshot_create_time to be a basestring')
        __self__.snapshot_create_time = snapshot_create_time
        """
        Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).
        """
        if source_db_snapshot_identifier and not isinstance(source_db_snapshot_identifier, basestring):
            raise TypeError('Expected argument source_db_snapshot_identifier to be a basestring')
        __self__.source_db_snapshot_identifier = source_db_snapshot_identifier
        """
        The DB snapshot Arn that the DB snapshot was copied from. It only has value in case of cross customer or cross region copy.
        """
        if source_region and not isinstance(source_region, basestring):
            raise TypeError('Expected argument source_region to be a basestring')
        __self__.source_region = source_region
        """
        The region that the DB snapshot was created in or copied from.
        """
        if status and not isinstance(status, basestring):
            raise TypeError('Expected argument status to be a basestring')
        __self__.status = status
        """
        Specifies the status of this DB snapshot.
        """
        if storage_type and not isinstance(storage_type, basestring):
            raise TypeError('Expected argument storage_type to be a basestring')
        __self__.storage_type = storage_type
        """
        Specifies the storage type associated with DB snapshot.
        """
        if vpc_id and not isinstance(vpc_id, basestring):
            raise TypeError('Expected argument vpc_id to be a basestring')
        __self__.vpc_id = vpc_id
        """
        Specifies the ID of the VPC associated with the DB snapshot.
        """

def get_snapshot(db_instance_identifier=None, db_snapshot_identifier=None, include_public=None, include_shared=None, most_recent=None, snapshot_type=None):
    """
    Use this data source to get information about a DB Snapshot for use when provisioning DB instances
    
    ~> **NOTE:** This data source does not apply to snapshots created on Aurora DB clusters.
    """
    __args__ = dict()

    __args__['dbInstanceIdentifier'] = db_instance_identifier
    __args__['dbSnapshotIdentifier'] = db_snapshot_identifier
    __args__['includePublic'] = include_public
    __args__['includeShared'] = include_shared
    __args__['mostRecent'] = most_recent
    __args__['snapshotType'] = snapshot_type
    __ret__ = pulumi.runtime.invoke('aws:rds/getSnapshot:getSnapshot', __args__)

    return GetSnapshotResult(
        allocated_storage=__ret__.get('allocatedStorage'),
        availability_zone=__ret__.get('availabilityZone'),
        db_snapshot_arn=__ret__.get('dbSnapshotArn'),
        encrypted=__ret__.get('encrypted'),
        engine=__ret__.get('engine'),
        engine_version=__ret__.get('engineVersion'),
        iops=__ret__.get('iops'),
        kms_key_id=__ret__.get('kmsKeyId'),
        license_model=__ret__.get('licenseModel'),
        option_group_name=__ret__.get('optionGroupName'),
        port=__ret__.get('port'),
        snapshot_create_time=__ret__.get('snapshotCreateTime'),
        source_db_snapshot_identifier=__ret__.get('sourceDbSnapshotIdentifier'),
        source_region=__ret__.get('sourceRegion'),
        status=__ret__.get('status'),
        storage_type=__ret__.get('storageType'),
        vpc_id=__ret__.get('vpcId'))
