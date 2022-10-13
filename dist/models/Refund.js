"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundToJSON = exports.RefundFromJSONTyped = exports.RefundFromJSON = exports.instanceOfRefund = exports.RefundTypeEnum = void 0;
/**
 * @export
 */
exports.RefundTypeEnum = {
    DnsTon: 'DNS.ton',
    DnsTg: 'DNS.tg',
    GetGems: 'GetGems'
};
/**
 * Check if a given object implements the Refund interface.
 */
function instanceOfRefund(value) {
    let isInstance = true;
    isInstance = isInstance && "origin" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfRefund = instanceOfRefund;
function RefundFromJSON(json) {
    return RefundFromJSONTyped(json, false);
}
exports.RefundFromJSON = RefundFromJSON;
function RefundFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'origin': json['origin'],
        'type': json['type'],
    };
}
exports.RefundFromJSONTyped = RefundFromJSONTyped;
function RefundToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'origin': value.origin,
        'type': value.type,
    };
}
exports.RefundToJSON = RefundToJSON;
