import { Address } from '@ton/core';
import { client } from './client.test';
import { getAccount } from './__mock__/bigint';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
    fetchMock.enableMocks();
    fetchMock.resetMocks();
});

afterAll(() => {
    fetchMock.disableMocks();
});

test('BigInt parse data test', async () => {
    fetchMock.mockResponseOnce(getAccount);

    const addressStrings = [
        '0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168',
        '0:7c9fc62291740a143086c807fe322accfd12737b3c2243676228176707c7ce40'
    ];
    const accountIds = addressStrings.map(value => Address.parse(value));
    const res = await client.accounts.getAccounts({ accountIds });
    const { accounts } = res;

    expect(res).toBeDefined();
    expect(accounts).toHaveLength(2);
    expect(accounts[0].balance).toBe(471698230471698230471698230471698230n);
    expect(typeof accounts[0].balance).toBe('bigint');
    expect(accounts[1].balance).toBe(47602800n);
    expect(typeof accounts[1].balance).toBe('bigint');
});