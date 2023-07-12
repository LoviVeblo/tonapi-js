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
exports.AccountEventToJSON = exports.AccountEventFromJSONTyped = exports.AccountEventFromJSON = exports.instanceOfAccountEvent = void 0;
const AccountAddress_1 = require("./AccountAddress");
const Action_1 = require("./Action");
/**
 * Check if a given object implements the AccountEvent interface.
 */
function instanceOfAccountEvent(value) {
    let isInstance = true;
    isInstance = isInstance && "eventId" in value;
    isInstance = isInstance && "account" in value;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "actions" in value;
    isInstance = isInstance && "isScam" in value;
    isInstance = isInstance && "lt" in value;
    isInstance = isInstance && "inProgress" in value;
    isInstance = isInstance && "extra" in value;
    return isInstance;
}
exports.instanceOfAccountEvent = instanceOfAccountEvent;
function AccountEventFromJSON(json) {
    return AccountEventFromJSONTyped(json, false);
}
exports.AccountEventFromJSON = AccountEventFromJSON;
function AccountEventFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'eventId': json['event_id'],
        'account': (0, AccountAddress_1.AccountAddressFromJSON)(json['account']),
        'timestamp': json['timestamp'],
        'actions': (json['actions'].map(Action_1.ActionFromJSON)),
        'isScam': json['is_scam'],
        'lt': json['lt'],
        'inProgress': json['in_progress'],
        'extra': json['extra'],
    };
}
exports.AccountEventFromJSONTyped = AccountEventFromJSONTyped;
function AccountEventToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'event_id': value.eventId,
        'account': (0, AccountAddress_1.AccountAddressToJSON)(value.account),
        'timestamp': value.timestamp,
        'actions': (value.actions.map(Action_1.ActionToJSON)),
        'is_scam': value.isScam,
        'lt': value.lt,
        'in_progress': value.inProgress,
        'extra': value.extra,
    };
}
exports.AccountEventToJSON = AccountEventToJSON;
