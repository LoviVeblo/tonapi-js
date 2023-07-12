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
/**
 *
 * @export
 * @interface Seqno
 */
export interface Seqno {
    /**
     *
     * @type {number}
     * @memberof Seqno
     */
    seqno: number;
}
/**
 * Check if a given object implements the Seqno interface.
 */
export declare function instanceOfSeqno(value: object): boolean;
export declare function SeqnoFromJSON(json: any): Seqno;
export declare function SeqnoFromJSONTyped(json: any, ignoreDiscriminator: boolean): Seqno;
export declare function SeqnoToJSON(value?: Seqno | null): any;
