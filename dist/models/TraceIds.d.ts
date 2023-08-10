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
import type { TraceID } from './TraceID';
/**
 *
 * @export
 * @interface TraceIDs
 */
export interface TraceIDs {
    /**
     *
     * @type {Array<TraceID>}
     * @memberof TraceIDs
     */
    traces: Array<TraceID>;
}
/**
 * Check if a given object implements the TraceIDs interface.
 */
export declare function instanceOfTraceIDs(value: object): boolean;
export declare function TraceIDsFromJSON(json: any): TraceIDs;
export declare function TraceIDsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceIDs;
export declare function TraceIDsToJSON(value?: TraceIDs | null): any;