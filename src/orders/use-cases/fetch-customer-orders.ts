import { fetchOrdersList } from './fetch-orders-list';
import { Order } from '../Order';

export const fetchCustomerOrders = async (customerId: string): Promise<Order[]> => {
  const orders = await fetchOrdersList();
  console.log('Should retrieve customer offers among list given their id', { customerId });
  return orders.filter((order) => order.customerId === customerId);
};
