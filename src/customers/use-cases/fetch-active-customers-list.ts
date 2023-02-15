import { Customer } from '../Customer';
import { fetchCustomersList } from './fetch-customers-list';

export const fetchActiveCustomersList = async (): Promise<Customer[]> => {
  const customers = await fetchCustomersList();
  console.log('Should retrieve active customers list');
  return customers.filter((customer) => customer.status === 'active');
};
