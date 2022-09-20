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
exports.NftItemReprCollectionToJSON = exports.NftItemReprCollectionFromJSONTyped = exports.NftItemReprCollectionFromJSON = void 0;
function NftItemReprCollectionFromJSON(json) {
    return NftItemReprCollectionFromJSONTyped(json, false);
}
exports.NftItemReprCollectionFromJSON = NftItemReprCollectionFromJSON;
function NftItemReprCollectionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'name': json['name'],
    };
}
exports.NftItemReprCollectionFromJSONTyped = NftItemReprCollectionFromJSONTyped;
function NftItemReprCollectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'name': value.name,
    };
}
exports.NftItemReprCollectionToJSON = NftItemReprCollectionToJSON;