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


import * as runtime from '../runtime';
import {
    Wallets,
    WalletsFromJSON,
    WalletsToJSON,
} from '../models';

export interface FindWalletsByPubKeyRequest {
    publicKey: string;
}

/**
 * WalletApi - interface
 * 
 * @export
 * @interface WalletApiInterface
 */
export interface WalletApiInterface {
    /**
     * Find all wallets by public key
     * @param {string} publicKey public key in hex (without 0x) format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletApiInterface
     */
    findWalletsByPubKeyRaw(requestParameters: FindWalletsByPubKeyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Wallets>>;

    /**
     * Find all wallets by public key
     */
    findWalletsByPubKey(requestParameters: FindWalletsByPubKeyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Wallets>;

}

/**
 * 
 */
export class WalletApi extends runtime.BaseAPI implements WalletApiInterface {

    /**
     * Find all wallets by public key
     */
    async findWalletsByPubKeyRaw(requestParameters: FindWalletsByPubKeyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Wallets>> {
        if (requestParameters.publicKey === null || requestParameters.publicKey === undefined) {
            throw new runtime.RequiredError('publicKey','Required parameter requestParameters.publicKey was null or undefined when calling findWalletsByPubKey.');
        }

        const queryParameters: any = {};

        if (requestParameters.publicKey !== undefined) {
            queryParameters['publicKey'] = requestParameters.publicKey;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/wallet/findByPubkey`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WalletsFromJSON(jsonValue));
    }

    /**
     * Find all wallets by public key
     */
    async findWalletsByPubKey(requestParameters: FindWalletsByPubKeyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Wallets> {
        const response = await this.findWalletsByPubKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}