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
import type {
  JettonInfo,
  JettonsBalances,
} from '../models';
import {
    JettonInfoFromJSON,
    JettonInfoToJSON,
    JettonsBalancesFromJSON,
    JettonsBalancesToJSON,
} from '../models';

export interface GetJettonInfoRequest {
    account: string;
}

export interface GetJettonsBalancesRequest {
    account: string;
}

/**
 * JettonApi - interface
 * 
 * @export
 * @interface JettonApiInterface
 */
export interface JettonApiInterface {
    /**
     * Get jetton metadata by jetton master address
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonApiInterface
     */
    getJettonInfoRaw(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonInfo>>;

    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfo(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonInfo>;

    /**
     * Get all Jettons balances by owner address
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonApiInterface
     */
    getJettonsBalancesRaw(requestParameters: GetJettonsBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonsBalances>>;

    /**
     * Get all Jettons balances by owner address
     */
    getJettonsBalances(requestParameters: GetJettonsBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonsBalances>;

}

/**
 * 
 */
export class JettonApi extends runtime.BaseAPI implements JettonApiInterface {

    /**
     * Get jetton metadata by jetton master address
     */
    async getJettonInfoRaw(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonInfo>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling getJettonInfo.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
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
            path: `/v1/jetton/getInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JettonInfoFromJSON(jsonValue));
    }

    /**
     * Get jetton metadata by jetton master address
     */
    async getJettonInfo(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonInfo> {
        const response = await this.getJettonInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all Jettons balances by owner address
     */
    async getJettonsBalancesRaw(requestParameters: GetJettonsBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonsBalances>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling getJettonsBalances.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
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
            path: `/v1/jetton/getBalances`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JettonsBalancesFromJSON(jsonValue));
    }

    /**
     * Get all Jettons balances by owner address
     */
    async getJettonsBalances(requestParameters: GetJettonsBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonsBalances> {
        const response = await this.getJettonsBalancesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
