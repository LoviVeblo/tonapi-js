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
import * as runtime from '../runtime';
import type { JettonInfo, Jettons } from '../models/index';
export interface GetJettonInfoRequest {
    accountId: string;
}
export interface GetJettonsRequest {
    limit?: number;
    offset?: number;
}
/**
 * JettonsApi - interface
 *
 * @export
 * @interface JettonsApiInterface
 */
export interface JettonsApiInterface {
    /**
     * Get jetton metadata by jetton master address
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonsApiInterface
     */
    getJettonInfoRaw(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonInfo>>;
    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfo(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonInfo>;
    /**
     * Get a list of all indexed jetton masters in the blockchain.
     * @param {number} [limit]
     * @param {number} [offset]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonsApiInterface
     */
    getJettonsRaw(requestParameters: GetJettonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Jettons>>;
    /**
     * Get a list of all indexed jetton masters in the blockchain.
     */
    getJettons(requestParameters: GetJettonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Jettons>;
}
/**
 *
 */
export declare class JettonsApi extends runtime.BaseAPI implements JettonsApiInterface {
    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfoRaw(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonInfo>>;
    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfo(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonInfo>;
    /**
     * Get a list of all indexed jetton masters in the blockchain.
     */
    getJettonsRaw(requestParameters: GetJettonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Jettons>>;
    /**
     * Get a list of all indexed jetton masters in the blockchain.
     */
    getJettons(requestParameters?: GetJettonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Jettons>;
}
