import { Order } from '../Order';


export const fetchCustomerOrders = async (customerId: string): Promise<Order[]> => {
  console.log('Should retrieve customer offers among list given their id', { customerId });
  return [];   // TO IMPLEMENT
};
