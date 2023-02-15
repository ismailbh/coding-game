import { Customer } from '../Customer';
import { fetchCustomersList } from './fetch-customers-list';

export const fetchCustomerById = async (customerId: string): Promise<Customer | undefined> => {
  const customers = await fetchCustomersList();

  return customers.find((customer) => customer.id === customerId);
};
