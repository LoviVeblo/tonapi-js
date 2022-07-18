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
  AccountEvents200Response,
  Event,
} from '../models';
import {
    AccountEvents200ResponseFromJSON,
    AccountEvents200ResponseToJSON,
    EventFromJSON,
    EventToJSON,
} from '../models';

export interface AccountEventsRequest {
    account: string;
    limit: number;
    beforeLt?: number;
}

export interface GetEventRequest {
    eventId: string;
}

/**
 * EventApi - interface
 * 
 * @export
 * @interface EventApiInterface
 */
export interface EventApiInterface {
    /**
     * Get events for account
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {number} limit 
     * @param {number} [beforeLt] omit this parameter to get last events
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApiInterface
     */
    accountEventsRaw(requestParameters: AccountEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountEvents200Response>>;

    /**
     * Get events for account
     */
    accountEvents(requestParameters: AccountEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountEvents200Response>;

    /**
     * Get the event by event ID or hash of any transaction in trace
     * @param {string} eventId event ID or transaction hash in hex (without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApiInterface
     */
    getEventRaw(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>>;

    /**
     * Get the event by event ID or hash of any transaction in trace
     */
    getEvent(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event>;

}

/**
 * 
 */
export class EventApi extends runtime.BaseAPI implements EventApiInterface {

    /**
     * Get events for account
     */
    async accountEventsRaw(requestParameters: AccountEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountEvents200Response>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling accountEvents.');
        }

        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling accountEvents.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
        }

        if (requestParameters.beforeLt !== undefined) {
            queryParameters['beforeLt'] = requestParameters.beforeLt;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
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
            path: `/v1/event/getAccountEvents`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountEvents200ResponseFromJSON(jsonValue));
    }

    /**
     * Get events for account
     */
    async accountEvents(requestParameters: AccountEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountEvents200Response> {
        const response = await this.accountEventsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the event by event ID or hash of any transaction in trace
     */
    async getEventRaw(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling getEvent.');
        }

        const queryParameters: any = {};

        if (requestParameters.eventId !== undefined) {
            queryParameters['event_id'] = requestParameters.eventId;
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
            path: `/v1/event/getEvent`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventFromJSON(jsonValue));
    }

    /**
     * Get the event by event ID or hash of any transaction in trace
     */
    async getEvent(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event> {
        const response = await this.getEventRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
