import { fetchOrdersList } from './fetch-orders-list';

export const fetchOrderWithCustomerId = async (customerId: string): Promise<string> => {
  const orders = await fetchOrdersList();
  const customerOrders = orders.filter((order) => order.customerId === customerId);

  const sma = customerOrders.map(
    (customerOrder) => customerOrder.skus.reduce((acc, curr) => (curr.quantity > acc.quantity ? curr : acc)).name,
  );
  console.log('TCL ~ fetchOrderWithCustomerId ~ sma', sma);

  return sma[0];
};
