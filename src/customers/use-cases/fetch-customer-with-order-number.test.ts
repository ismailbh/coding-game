import { fetchOrdersList } from '../../orders/use-cases/fetch-orders-list';
import { fetchCustomerWithOrderNumber } from './fetch-customer-with-order-number';
import { fetchCustomersList } from './fetch-customers-list';

jest.mock('./fetch-customers-list', () => ({ fetchCustomersList: jest.fn() }));
jest.mock('../../orders/use-cases/fetch-orders-list.ts', () => ({ fetchOrdersList: jest.fn() }));

describe('fetchCustomerWithOrderList', () => {
  test('shoud return customer with order number', async () => {
    (fetchCustomersList as jest.Mock).mockReturnValue([
      {
        id: 'CUST_0001',
        firstName: 'john',
        lastName: 'SMith',
        status: 'active',
      },
      {
        id: 'CUST_0002',
        firstName: 'ismail',
        lastName: 'SMith',
        status: 'active',
      },
    ]);
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
        customerId: 'CUST_0002',
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
    ]);
    const data = await fetchCustomerWithOrderNumber();
    expect(data).toEqual([
      { name: 'john', orderNumber: 2 },
      { name: 'ismail', orderNumber: 1 },
    ]);
  });
});
