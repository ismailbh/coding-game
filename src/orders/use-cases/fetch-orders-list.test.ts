import { ordersList } from '../orders-list';
import { fetchOrdersList } from './fetch-orders-list';

describe('fetchOrdersList', () => {
  test('Should return the orders list', async () => {
    const result = await fetchOrdersList();

    expect(result).toStrictEqual(ordersList);
  });
});
