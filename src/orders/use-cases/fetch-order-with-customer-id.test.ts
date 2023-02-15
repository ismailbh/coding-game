import { fetchOrderWithCustomerId } from './fetch-order-with-customer-id';
import { fetchOrdersList } from './fetch-orders-list';

jest.mock('./fetch-orders-list', () => ({ fetchOrdersList: jest.fn() }));

describe('fetchOrderWithCustomerId', () => {
  test('should return name of most buyed SKU', async () => {
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
            unitPrice: 44.5,
          },
          {
            id: 'SKU_0003',
            name: 'Welcome gift',
            quantity: 1,
            unitPrice: -9.99,
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
            quantity: 5,
            unitPrice: 12,
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
    const data = await fetchOrderWithCustomerId('CUST_0001');
    expect(data).toBe('Super famous make up');
  });
});
