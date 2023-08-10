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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatesApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class RatesApi extends runtime.BaseAPI {
    /**
     * Get chart by token
     */
    getChartRatesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.token === null || requestParameters.token === undefined) {
                throw new runtime.RequiredError('token', 'Required parameter requestParameters.token was null or undefined when calling getChartRates.');
            }
            const queryParameters = {};
            if (requestParameters.token !== undefined) {
                queryParameters['token'] = requestParameters.token;
            }
            if (requestParameters.currency !== undefined) {
                queryParameters['currency'] = requestParameters.currency;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/rates/chart`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.GetChartRates200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Get chart by token
     */
    getChartRates(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getChartRatesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the token price to the currency
     */
    getRatesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.tokens === null || requestParameters.tokens === undefined) {
                throw new runtime.RequiredError('tokens', 'Required parameter requestParameters.tokens was null or undefined when calling getRates.');
            }
            if (requestParameters.currencies === null || requestParameters.currencies === undefined) {
                throw new runtime.RequiredError('currencies', 'Required parameter requestParameters.currencies was null or undefined when calling getRates.');
            }
            const queryParameters = {};
            if (requestParameters.tokens !== undefined) {
                queryParameters['tokens'] = requestParameters.tokens;
            }
            if (requestParameters.currencies !== undefined) {
                queryParameters['currencies'] = requestParameters.currencies;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/rates`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.GetRates200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Get the token price to the currency
     */
    getRates(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getRatesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.RatesApi = RatesApi;