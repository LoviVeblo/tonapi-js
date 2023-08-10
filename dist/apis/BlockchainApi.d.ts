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
import type { BlockchainBlock, BlockchainConfig, BlockchainRawAccount, MethodExecutionResult, SendBlockchainMessageRequest, Transaction, Transactions, Validators } from '../models/index';
export interface ExecGetMethodForBlockchainAccountRequest {
    accountId: string;
    methodName: string;
    args?: Array<string>;
}
export interface GetBlockchainAccountTransactionsRequest {
    accountId: string;
    afterLt?: number;
    beforeLt?: number;
    limit?: number;
}
export interface GetBlockchainBlockRequest {
    blockId: string;
}
export interface GetBlockchainBlockTransactionsRequest {
    blockId: string;
}
export interface GetBlockchainRawAccountRequest {
    accountId: string;
}
export interface GetBlockchainTransactionRequest {
    transactionId: string;
}
export interface GetBlockchainTransactionByMessageHashRequest {
    msgId: string;
}
export interface SendBlockchainMessageOperationRequest {
    sendBlockchainMessageRequest: SendBlockchainMessageRequest;
}
/**
 * BlockchainApi - interface
 *
 * @export
 * @interface BlockchainApiInterface
 */
export interface BlockchainApiInterface {
    /**
     * Execute get method for account
     * @param {string} accountId account ID
     * @param {string} methodName contract get method name
     * @param {Array<string>} [args]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    execGetMethodForBlockchainAccountRaw(requestParameters: ExecGetMethodForBlockchainAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MethodExecutionResult>>;
    /**
     * Execute get method for account
     */
    execGetMethodForBlockchainAccount(requestParameters: ExecGetMethodForBlockchainAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MethodExecutionResult>;
    /**
     * Get account transactions
     * @param {string} accountId account ID
     * @param {number} [afterLt] omit this parameter to get last transactions
     * @param {number} [beforeLt] omit this parameter to get last transactions
     * @param {number} [limit]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainAccountTransactionsRaw(requestParameters: GetBlockchainAccountTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transactions>>;
    /**
     * Get account transactions
     */
    getBlockchainAccountTransactions(requestParameters: GetBlockchainAccountTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transactions>;
    /**
     * Get blockchain block data
     * @param {string} blockId block ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainBlockRaw(requestParameters: GetBlockchainBlockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainBlock>>;
    /**
     * Get blockchain block data
     */
    getBlockchainBlock(requestParameters: GetBlockchainBlockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainBlock>;
    /**
     * Get transactions from block
     * @param {string} blockId block ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainBlockTransactionsRaw(requestParameters: GetBlockchainBlockTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transactions>>;
    /**
     * Get transactions from block
     */
    getBlockchainBlockTransactions(requestParameters: GetBlockchainBlockTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transactions>;
    /**
     * Get blockchain config
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainConfigRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainConfig>>;
    /**
     * Get blockchain config
     */
    getBlockchainConfig(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainConfig>;
    /**
     * Get last known masterchain block
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainMasterchainHeadRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainBlock>>;
    /**
     * Get last known masterchain block
     */
    getBlockchainMasterchainHead(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainBlock>;
    /**
     * Get low-level information about an account taken directly from the blockchain.
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainRawAccountRaw(requestParameters: GetBlockchainRawAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainRawAccount>>;
    /**
     * Get low-level information about an account taken directly from the blockchain.
     */
    getBlockchainRawAccount(requestParameters: GetBlockchainRawAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainRawAccount>;
    /**
     * Get transaction data
     * @param {string} transactionId transaction ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainTransactionRaw(requestParameters: GetBlockchainTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>>;
    /**
     * Get transaction data
     */
    getBlockchainTransaction(requestParameters: GetBlockchainTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction>;
    /**
     * Get transaction data by message hash
     * @param {string} msgId message ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainTransactionByMessageHashRaw(requestParameters: GetBlockchainTransactionByMessageHashRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>>;
    /**
     * Get transaction data by message hash
     */
    getBlockchainTransactionByMessageHash(requestParameters: GetBlockchainTransactionByMessageHashRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction>;
    /**
     * Get blockchain validators
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainValidatorsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Validators>>;
    /**
     * Get blockchain validators
     */
    getBlockchainValidators(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Validators>;
    /**
     * Send message to blockchain
     * @param {SendBlockchainMessageRequest} sendBlockchainMessageRequest both a single boc and a batch of boc serialized in base64 are accepted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    sendBlockchainMessageRaw(requestParameters: SendBlockchainMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Send message to blockchain
     */
    sendBlockchainMessage(requestParameters: SendBlockchainMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
/**
 *
 */
export declare class BlockchainApi extends runtime.BaseAPI implements BlockchainApiInterface {
    /**
     * Execute get method for account
     */
    execGetMethodForBlockchainAccountRaw(requestParameters: ExecGetMethodForBlockchainAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MethodExecutionResult>>;
    /**
     * Execute get method for account
     */
    execGetMethodForBlockchainAccount(requestParameters: ExecGetMethodForBlockchainAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MethodExecutionResult>;
    /**
     * Get account transactions
     */
    getBlockchainAccountTransactionsRaw(requestParameters: GetBlockchainAccountTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transactions>>;
    /**
     * Get account transactions
     */
    getBlockchainAccountTransactions(requestParameters: GetBlockchainAccountTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transactions>;
    /**
     * Get blockchain block data
     */
    getBlockchainBlockRaw(requestParameters: GetBlockchainBlockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainBlock>>;
    /**
     * Get blockchain block data
     */
    getBlockchainBlock(requestParameters: GetBlockchainBlockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainBlock>;
    /**
     * Get transactions from block
     */
    getBlockchainBlockTransactionsRaw(requestParameters: GetBlockchainBlockTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transactions>>;
    /**
     * Get transactions from block
     */
    getBlockchainBlockTransactions(requestParameters: GetBlockchainBlockTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transactions>;
    /**
     * Get blockchain config
     */
    getBlockchainConfigRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainConfig>>;
    /**
     * Get blockchain config
     */
    getBlockchainConfig(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainConfig>;
    /**
     * Get last known masterchain block
     */
    getBlockchainMasterchainHeadRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainBlock>>;
    /**
     * Get last known masterchain block
     */
    getBlockchainMasterchainHead(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainBlock>;
    /**
     * Get low-level information about an account taken directly from the blockchain.
     */
    getBlockchainRawAccountRaw(requestParameters: GetBlockchainRawAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainRawAccount>>;
    /**
     * Get low-level information about an account taken directly from the blockchain.
     */
    getBlockchainRawAccount(requestParameters: GetBlockchainRawAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainRawAccount>;
    /**
     * Get transaction data
     */
    getBlockchainTransactionRaw(requestParameters: GetBlockchainTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>>;
    /**
     * Get transaction data
     */
    getBlockchainTransaction(requestParameters: GetBlockchainTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction>;
    /**
     * Get transaction data by message hash
     */
    getBlockchainTransactionByMessageHashRaw(requestParameters: GetBlockchainTransactionByMessageHashRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>>;
    /**
     * Get transaction data by message hash
     */
    getBlockchainTransactionByMessageHash(requestParameters: GetBlockchainTransactionByMessageHashRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction>;
    /**
     * Get blockchain validators
     */
    getBlockchainValidatorsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Validators>>;
    /**
     * Get blockchain validators
     */
    getBlockchainValidators(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Validators>;
    /**
     * Send message to blockchain
     */
    sendBlockchainMessageRaw(requestParameters: SendBlockchainMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Send message to blockchain
     */
    sendBlockchainMessage(requestParameters: SendBlockchainMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}