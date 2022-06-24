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
exports.SaleToJSON = exports.SaleFromJSONTyped = exports.SaleFromJSON = exports.instanceOfSale = void 0;
const runtime_1 = require("../runtime");
const AccountAddress_1 = require("./AccountAddress");
const Price_1 = require("./Price");
/**
 * Check if a given object implements the Sale interface.
 */
function instanceOfSale(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "market" in value;
    isInstance = isInstance && "price" in value;
    return isInstance;
}
exports.instanceOfSale = instanceOfSale;
function SaleFromJSON(json) {
    return SaleFromJSONTyped(json, false);
}
exports.SaleFromJSON = SaleFromJSON;
function SaleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'market': (0, AccountAddress_1.AccountAddressFromJSON)(json['market']),
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : (0, AccountAddress_1.AccountAddressFromJSON)(json['owner']),
        'price': (0, Price_1.PriceFromJSON)(json['price']),
    };
}
exports.SaleFromJSONTyped = SaleFromJSONTyped;
function SaleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'market': (0, AccountAddress_1.AccountAddressToJSON)(value.market),
        'owner': (0, AccountAddress_1.AccountAddressToJSON)(value.owner),
        'price': (0, Price_1.PriceToJSON)(value.price),
    };
}
exports.SaleToJSON = SaleToJSON;