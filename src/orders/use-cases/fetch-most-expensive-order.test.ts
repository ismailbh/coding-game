import { fetchMostExpensiveOrder } from './fetch-most-expensive-order';
import { fetchOrdersList } from './fetch-orders-list';

jest.mock('./fetch-orders-list', () => ({ fetchOrdersList: jest.fn() }));

describe('fetchMostExpensiveOrders', () => {
  test('should return expensive order', async () => {
    (fetchOrdersList as jest.Mock).mockReturnValue([
      {
        id: 'ORDER_0001',
        customerId: 'CUST_0001',
        skus: [
          {
            id: 'SKU_0001',
            name: 'Super famous perfume',
            quantity: 2,
            unitPrice: 12,
          },
          {
            id: 'SKU_0002',
            name: 'Super famous make up',
            quantity: 3,
            unitPrice: 20,
          },
          {
            id: 'SKU_0003',
            name: 'Welcome gift',
            quantity: 1,
            unitPrice: 100,
          },
        ],
      },
      {
        id: 'ORDER_0002',
        customerId: 'CUST_0003',
        skus: [
          {
            id: 'SKU_0001',
            name: 'Super famous perfume',
            quantity: 1,
            unitPrice: 40,
          },
          {
            id: 'SKU_0003',
            name: 'Famous cream',
            quantity: 1,
            unitPrice: 60,
          },
        ],
      },
    ]);
    const data = await fetchMostExpensiveOrder();
    expect(data.customerName).toBe('john');
    expect(data.total).toBe(184);
  });
});
