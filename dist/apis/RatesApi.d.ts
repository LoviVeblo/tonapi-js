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
import type { GetChartRates200Response, GetRates200Response } from '../models/index';
export interface GetChartRatesRequest {
    token: string;
    currency?: string;
}
export interface GetRatesRequest {
    tokens: string;
    currencies: string;
}
/**
 * RatesApi - interface
 *
 * @export
 * @interface RatesApiInterface
 */
export interface RatesApiInterface {
    /**
     * Get chart by token
     * @param {string} token accept jetton master address
     * @param {string} [currency]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RatesApiInterface
     */
    getChartRatesRaw(requestParameters: GetChartRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetChartRates200Response>>;
    /**
     * Get chart by token
     */
    getChartRates(requestParameters: GetChartRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetChartRates200Response>;
    /**
     * Get the token price to the currency
     * @param {string} tokens accept ton and jetton master addresses, separated by commas
     * @param {string} currencies accept ton and all possible fiat currencies, separated by commas
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RatesApiInterface
     */
    getRatesRaw(requestParameters: GetRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetRates200Response>>;
    /**
     * Get the token price to the currency
     */
    getRates(requestParameters: GetRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetRates200Response>;
}
/**
 *
 */
export declare class RatesApi extends runtime.BaseAPI implements RatesApiInterface {
    /**
     * Get chart by token
     */
    getChartRatesRaw(requestParameters: GetChartRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetChartRates200Response>>;
    /**
     * Get chart by token
     */
    getChartRates(requestParameters: GetChartRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetChartRates200Response>;
    /**
     * Get the token price to the currency
     */
    getRatesRaw(requestParameters: GetRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetRates200Response>>;
    /**
     * Get the token price to the currency
     */
    getRates(requestParameters: GetRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetRates200Response>;
}