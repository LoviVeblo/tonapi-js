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
import type { AccountAddress } from './AccountAddress';
import type { Refund } from './Refund';
/**
 *
 * @export
 * @interface NftItemTransferAction
 */
export interface NftItemTransferAction {
    /**
     *
     * @type {string}
     * @memberof NftItemTransferAction
     */
    comment?: string;
    /**
     *
     * @type {string}
     * @memberof NftItemTransferAction
     */
    nft: string;
    /**
     * raw hex encoded payload
     * @type {string}
     * @memberof NftItemTransferAction
     */
    payload?: string;
    /**
     *
     * @type {AccountAddress}
     * @memberof NftItemTransferAction
     */
    recipient?: AccountAddress;
    /**
     *
     * @type {Refund}
     * @memberof NftItemTransferAction
     */
    refund?: Refund;
    /**
     *
     * @type {AccountAddress}
     * @memberof NftItemTransferAction
     */
    sender?: AccountAddress;
}
/**
 * Check if a given object implements the NftItemTransferAction interface.
 */
export declare function instanceOfNftItemTransferAction(value: object): boolean;
export declare function NftItemTransferActionFromJSON(json: any): NftItemTransferAction;
export declare function NftItemTransferActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftItemTransferAction;
export declare function NftItemTransferActionToJSON(value?: NftItemTransferAction | null): any;
