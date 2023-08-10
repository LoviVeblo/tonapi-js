"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitStateRawToJSON = exports.InitStateRawFromJSONTyped = exports.InitStateRawFromJSON = exports.instanceOfInitStateRaw = void 0;
/**
 * Check if a given object implements the InitStateRaw interface.
 */
function instanceOfInitStateRaw(value) {
    let isInstance = true;
    isInstance = isInstance && "workchain" in value;
    isInstance = isInstance && "rootHash" in value;
    isInstance = isInstance && "fileHash" in value;
    return isInstance;
}
exports.instanceOfInitStateRaw = instanceOfInitStateRaw;
function InitStateRawFromJSON(json) {
    return InitStateRawFromJSONTyped(json, false);
}
exports.InitStateRawFromJSON = InitStateRawFromJSON;
function InitStateRawFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'workchain': json['workchain'],
        'rootHash': json['root_hash'],
        'fileHash': json['file_hash'],
    };
}
exports.InitStateRawFromJSONTyped = InitStateRawFromJSONTyped;
function InitStateRawToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'workchain': value.workchain,
        'root_hash': value.rootHash,
        'file_hash': value.fileHash,
    };
}
exports.InitStateRawToJSON = InitStateRawToJSON;