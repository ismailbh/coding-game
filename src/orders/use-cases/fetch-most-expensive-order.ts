import { fetchOrdersList } from './fetch-orders-list';
import { Order } from '../Order';
import { fetchCustomerById } from '../../customers/use-cases/fetch-customer-by-id';

export const fetchMostExpensiveOrder = async (): Promise<
  Order & { total: number; customerName: string | undefined }
> => {
  const orders = await fetchOrdersList();

  const orderWithTotal = orders.map((order) => ({
    ...order,
    total: order.skus.reduce((acc, curr) => acc + curr.quantity * curr.unitPrice, 0),
  }));
  const expensiveOrder = orderWithTotal.reduce((acc, curr) => {
    acc = curr.total > acc.total ? curr : acc;
    return acc;
  });

  const customer = await fetchCustomerById(expensiveOrder.customerId);

  return { customerName: customer?.firstName, ...expensiveOrder };
};
