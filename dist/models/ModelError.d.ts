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
/**
 *
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     *
     * @type {string}
     * @memberof ModelError
     */
    error: string;
}
export declare function ModelErrorFromJSON(json: any): ModelError;
export declare function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError;
export declare function ModelErrorToJSON(value?: ModelError | null): any;