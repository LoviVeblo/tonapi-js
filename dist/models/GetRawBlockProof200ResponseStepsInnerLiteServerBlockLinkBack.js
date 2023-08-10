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
exports.GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBackToJSON = exports.GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBackFromJSONTyped = exports.GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBackFromJSON = exports.instanceOfGetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBack = void 0;
const BlockRaw_1 = require("./BlockRaw");
/**
 * Check if a given object implements the GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBack interface.
 */
function instanceOfGetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBack(value) {
    let isInstance = true;
    isInstance = isInstance && "toKeyBlock" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "destProof" in value;
    isInstance = isInstance && "proof" in value;
    isInstance = isInstance && "stateProof" in value;
    return isInstance;
}
exports.instanceOfGetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBack = instanceOfGetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBack;
function GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBackFromJSON(json) {
    return GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBackFromJSONTyped(json, false);
}
exports.GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBackFromJSON = GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBackFromJSON;
function GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBackFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'toKeyBlock': json['to_key_block'],
        'from': (0, BlockRaw_1.BlockRawFromJSON)(json['from']),
        'to': (0, BlockRaw_1.BlockRawFromJSON)(json['to']),
        'destProof': json['dest_proof'],
        'proof': json['proof'],
        'stateProof': json['state_proof'],
    };
}
exports.GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBackFromJSONTyped = GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBackFromJSONTyped;
function GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBackToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'to_key_block': value.toKeyBlock,
        'from': (0, BlockRaw_1.BlockRawToJSON)(value.from),
        'to': (0, BlockRaw_1.BlockRawToJSON)(value.to),
        'dest_proof': value.destProof,
        'proof': value.proof,
        'state_proof': value.stateProof,
    };
}
exports.GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBackToJSON = GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkBackToJSON;