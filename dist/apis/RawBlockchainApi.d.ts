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
import { Account, Block, Transaction, Transactions } from '../models';
export interface GetAccountRequest {
    account: string;
}
export interface GetBlockByHashRequest {
    blockHash: string;
}
export interface GetTransactionRequest {
    hash: string;
}
export interface GetTransactionsRequest {
    account?: string;
    maxLt?: number;
    minLt?: number;
    limit?: number;
}
/**
 * RawBlockchainApi - interface
 *
 * @export
 * @interface RawBlockchainApiInterface
 */
export interface RawBlockchainApiInterface {
    /**
     * Get all info about account address
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RawBlockchainApiInterface
     */
    getAccountRaw(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Account>>;
    /**
     * Get all info about account address
     */
    getAccount(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Account>;
    /**
     * Get block by root hash
     * @param {string} blockHash block root hash in hex (without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RawBlockchainApiInterface
     */
    getBlockByHashRaw(requestParameters: GetBlockByHashRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Block>>;
    /**
     * Get block by root hash
     */
    getBlockByHash(requestParameters: GetBlockByHashRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Block>;
    /**
     * Get transaction by hash
     * @param {string} hash transaction hash in hex (without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RawBlockchainApiInterface
     */
    getTransactionRaw(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Transaction>>;
    /**
     * Get transaction by hash
     */
    getTransaction(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Transaction>;
    /**
     * Get transactions by account address
     * @param {string} [account] address in raw (hex without 0x) or base64url format
     * @param {number} [maxLt] omit this parameter to get last transactions
     * @param {number} [minLt] omit this parameter to get last transactions
     * @param {number} [limit]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RawBlockchainApiInterface
     */
    getTransactionsRaw(requestParameters: GetTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Transactions>>;
    /**
     * Get transactions by account address
     */
    getTransactions(requestParameters: GetTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Transactions>;
}
/**
 *
 */
export declare class RawBlockchainApi extends runtime.BaseAPI implements RawBlockchainApiInterface {
    /**
     * Get all info about account address
     */
    getAccountRaw(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Account>>;
    /**
     * Get all info about account address
     */
    getAccount(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Account>;
    /**
     * Get block by root hash
     */
    getBlockByHashRaw(requestParameters: GetBlockByHashRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Block>>;
    /**
     * Get block by root hash
     */
    getBlockByHash(requestParameters: GetBlockByHashRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Block>;
    /**
     * Get transaction by hash
     */
    getTransactionRaw(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Transaction>>;
    /**
     * Get transaction by hash
     */
    getTransaction(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Transaction>;
    /**
     * Get transactions by account address
     */
    getTransactionsRaw(requestParameters: GetTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Transactions>>;
    /**
     * Get transactions by account address
     */
    getTransactions(requestParameters?: GetTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Transactions>;
}