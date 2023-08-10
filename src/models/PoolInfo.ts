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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PoolInfo
 */
export interface PoolInfo {
    /**
     * 
     * @type {string}
     * @memberof PoolInfo
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof PoolInfo
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof PoolInfo
     */
    totalAmount: number;
    /**
     * 
     * @type {string}
     * @memberof PoolInfo
     */
    implementation: PoolInfoImplementationEnum;
    /**
     * APY in percent
     * @type {number}
     * @memberof PoolInfo
     */
    apy: number;
    /**
     * 
     * @type {number}
     * @memberof PoolInfo
     */
    minStake: number;
    /**
     * current nomination cycle beginning timestamp
     * @type {number}
     * @memberof PoolInfo
     */
    cycleStart: number;
    /**
     * current nomination cycle ending timestamp
     * @type {number}
     * @memberof PoolInfo
     */
    cycleEnd: number;
    /**
     * this pool has verified source code or managed by trusted company
     * @type {boolean}
     * @memberof PoolInfo
     */
    verified: boolean;
    /**
     * current number of nominators
     * @type {number}
     * @memberof PoolInfo
     */
    currentNominators: number;
    /**
     * maximum number of nominators
     * @type {number}
     * @memberof PoolInfo
     */
    maxNominators: number;
    /**
     * for liquid staking master account of jetton
     * @type {string}
     * @memberof PoolInfo
     */
    liquidJettonMaster?: string;
    /**
     * total stake of all nominators
     * @type {number}
     * @memberof PoolInfo
     */
    nominatorsStake: number;
    /**
     * stake of validator
     * @type {number}
     * @memberof PoolInfo
     */
    validatorStake: number;
}


/**
 * @export
 */
export const PoolInfoImplementationEnum = {
    Whales: 'whales',
    Tf: 'tf',
    LiquidTf: 'liquidTF'
} as const;
export type PoolInfoImplementationEnum = typeof PoolInfoImplementationEnum[keyof typeof PoolInfoImplementationEnum];


/**
 * Check if a given object implements the PoolInfo interface.
 */
export function instanceOfPoolInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "totalAmount" in value;
    isInstance = isInstance && "implementation" in value;
    isInstance = isInstance && "apy" in value;
    isInstance = isInstance && "minStake" in value;
    isInstance = isInstance && "cycleStart" in value;
    isInstance = isInstance && "cycleEnd" in value;
    isInstance = isInstance && "verified" in value;
    isInstance = isInstance && "currentNominators" in value;
    isInstance = isInstance && "maxNominators" in value;
    isInstance = isInstance && "nominatorsStake" in value;
    isInstance = isInstance && "validatorStake" in value;

    return isInstance;
}

export function PoolInfoFromJSON(json: any): PoolInfo {
    return PoolInfoFromJSONTyped(json, false);
}

export function PoolInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoolInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'name': json['name'],
        'totalAmount': json['total_amount'],
        'implementation': json['implementation'],
        'apy': json['apy'],
        'minStake': json['min_stake'],
        'cycleStart': json['cycle_start'],
        'cycleEnd': json['cycle_end'],
        'verified': json['verified'],
        'currentNominators': json['current_nominators'],
        'maxNominators': json['max_nominators'],
        'liquidJettonMaster': !exists(json, 'liquid_jetton_master') ? undefined : json['liquid_jetton_master'],
        'nominatorsStake': json['nominators_stake'],
        'validatorStake': json['validator_stake'],
    };
}

export function PoolInfoToJSON(value?: PoolInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'name': value.name,
        'total_amount': value.totalAmount,
        'implementation': value.implementation,
        'apy': value.apy,
        'min_stake': value.minStake,
        'cycle_start': value.cycleStart,
        'cycle_end': value.cycleEnd,
        'verified': value.verified,
        'current_nominators': value.currentNominators,
        'max_nominators': value.maxNominators,
        'liquid_jetton_master': value.liquidJettonMaster,
        'nominators_stake': value.nominatorsStake,
        'validator_stake': value.validatorStake,
    };
}
