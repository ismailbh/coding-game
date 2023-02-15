import { fetchCustomersList } from './fetch-customers-list';
import { fetchOrdersList } from '../../orders/use-cases/fetch-orders-list';

export const fetchCustomerWithOrderNumber = async (): Promise<{ name: string; orderNumber: number }[]> => {
  const cutomers = await fetchCustomersList();
  const orders = await fetchOrdersList();

  return cutomers.map((customer) => ({
    name: customer.firstName,
    orderNumber: orders.filter((order) => order.customerId === customer.id).length,
  }));
};
