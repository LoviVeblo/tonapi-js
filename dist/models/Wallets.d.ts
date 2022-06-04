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
import { Wallet } from './Wallet';
/**
 *
 * @export
 * @interface Wallets
 */
export interface Wallets {
    /**
     *
     * @type {Array<Wallet>}
     * @memberof Wallets
     */
    wallets: Array<Wallet>;
}
export declare function WalletsFromJSON(json: any): Wallets;
export declare function WalletsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Wallets;
export declare function WalletsToJSON(value?: Wallets | null): any;