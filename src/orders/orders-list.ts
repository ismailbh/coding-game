import { Order } from './Order';

export const ordersList: Order[] = [
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
  {
    id: 'ORDER_0003',
    customerId: 'CUST_0003',
    skus: [
      {
        id: 'SKU_0002',
        name: 'Super famous make up',
        quantity: 8,
        unitPrice: 44.5,
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
    id: 'ORDER_0004',
    customerId: 'CUST_0003',
    skus: [
      {
        id: 'SKU_0003',
        name: 'Famous cream',
        quantity: 1,
        unitPrice: 60,
      },
    ],
  },
  {
    id: 'ORDER_0005',
    customerId: 'CUST_0002',
    skus: [
      {
        id: 'SKU_0001',
        name: 'Super famous perfume',
        quantity: 15,
        unitPrice: 12,
      },
      {
        id: 'SKU_0003',
        name: 'Famous cream',
        quantity: 2,
        unitPrice: 60,
      },
    ],
  },
];
