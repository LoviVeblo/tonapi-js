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
exports.JettonsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class JettonsApi extends runtime.BaseAPI {
    /**
     * Get jetton\'s holders
     */
    getJettonHoldersRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getJettonHolders.');
            }
            const queryParameters = {};
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/jettons/{account_id}/holders`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.JettonHoldersFromJSON)(jsonValue));
        });
    }
    /**
     * Get jetton\'s holders
     */
    getJettonHolders(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getJettonHoldersRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfoRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getJettonInfo.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/jettons/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.JettonInfoFromJSON)(jsonValue));
        });
    }
    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfo(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getJettonInfoRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get a list of all indexed jetton masters in the blockchain.
     */
    getJettonsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/jettons`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.JettonsFromJSON)(jsonValue));
        });
    }
    /**
     * Get a list of all indexed jetton masters in the blockchain.
     */
    getJettons(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getJettonsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.JettonsApi = JettonsApi;
