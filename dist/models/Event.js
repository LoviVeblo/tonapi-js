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
exports.EventToJSON = exports.EventFromJSONTyped = exports.EventFromJSON = exports.instanceOfEvent = void 0;
const Action_1 = require("./Action");
const ValueFlow_1 = require("./ValueFlow");
/**
 * Check if a given object implements the Event interface.
 */
function instanceOfEvent(value) {
    let isInstance = true;
    isInstance = isInstance && "eventId" in value;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "actions" in value;
    isInstance = isInstance && "valueFlow" in value;
    isInstance = isInstance && "isScam" in value;
    isInstance = isInstance && "lt" in value;
    isInstance = isInstance && "inProgress" in value;
    return isInstance;
}
exports.instanceOfEvent = instanceOfEvent;
function EventFromJSON(json) {
    return EventFromJSONTyped(json, false);
}
exports.EventFromJSON = EventFromJSON;
function EventFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'eventId': json['event_id'],
        'timestamp': json['timestamp'],
        'actions': (json['actions'].map(Action_1.ActionFromJSON)),
        'valueFlow': (json['value_flow'].map(ValueFlow_1.ValueFlowFromJSON)),
        'isScam': json['is_scam'],
        'lt': json['lt'],
        'inProgress': json['in_progress'],
    };
}
exports.EventFromJSONTyped = EventFromJSONTyped;
function EventToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'event_id': value.eventId,
        'timestamp': value.timestamp,
        'actions': (value.actions.map(Action_1.ActionToJSON)),
        'value_flow': (value.valueFlow.map(ValueFlow_1.ValueFlowToJSON)),
        'is_scam': value.isScam,
        'lt': value.lt,
        'in_progress': value.inProgress,
    };
}
exports.EventToJSON = EventToJSON;
