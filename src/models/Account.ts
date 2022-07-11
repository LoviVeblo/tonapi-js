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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * 
     * @type {number}
     * @memberof Account
     */
    balance: number;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    data?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    status: string;
}

/**
 * Check if a given object implements the Account interface.
 */
export function instanceOfAccount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "balance" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function AccountFromJSON(json: any): Account {
    return AccountFromJSONTyped(json, false);
}

export function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balance': json['balance'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'status': json['status'],
    };
}

export function AccountToJSON(value?: Account | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balance': value.balance,
        'code': value.code,
        'data': value.data,
        'status': value.status,
    };
}

