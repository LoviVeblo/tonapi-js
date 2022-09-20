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
exports.AnnotatedTraceToJSON = exports.AnnotatedTraceFromJSONTyped = exports.AnnotatedTraceFromJSON = void 0;
const AccountAddress_1 = require("./AccountAddress");
const TxAnnotation_1 = require("./TxAnnotation");
function AnnotatedTraceFromJSON(json) {
    return AnnotatedTraceFromJSONTyped(json, false);
}
exports.AnnotatedTraceFromJSON = AnnotatedTraceFromJSON;
function AnnotatedTraceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hash': json['hash'],
        'lt': json['lt'],
        'account': (0, AccountAddress_1.AccountAddressFromJSON)(json['account']),
        'success': json['success'],
        'fee': json['fee'],
        'otherFee': json['other_fee'],
        'storageFee': json['storage_fee'],
        'inputValue': json['input_value'],
        'interfaces': json['interfaces'],
        'annotations': (json['annotations'].map(TxAnnotation_1.TxAnnotationFromJSON)),
        'children': (json['children'].map(AnnotatedTraceFromJSON)),
    };
}
exports.AnnotatedTraceFromJSONTyped = AnnotatedTraceFromJSONTyped;
function AnnotatedTraceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hash': value.hash,
        'lt': value.lt,
        'account': (0, AccountAddress_1.AccountAddressToJSON)(value.account),
        'success': value.success,
        'fee': value.fee,
        'other_fee': value.otherFee,
        'storage_fee': value.storageFee,
        'input_value': value.inputValue,
        'interfaces': value.interfaces,
        'annotations': (value.annotations.map(TxAnnotation_1.TxAnnotationToJSON)),
        'children': (value.children.map(AnnotatedTraceToJSON)),
    };
}
exports.AnnotatedTraceToJSON = AnnotatedTraceToJSON;