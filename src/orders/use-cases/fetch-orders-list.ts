import { Order } from '../Order';
import { ordersList } from '../orders-list';

export const fetchOrdersList = async (): Promise<Order[]> => {
  return ordersList;
};
