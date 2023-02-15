import { Customer } from '../Customer';
import { fetchCustomersList } from './fetch-customers-list';

export const fetchCustomersWithFullName = async (): Promise<(Customer & { fullName: string })[]> => {
  const customers = await fetchCustomersList();

  return customers.map((customer) => ({
    fullName: `${
      customer.firstName.charAt(0).toUpperCase() + customer.firstName.slice(1).toLowerCase()
    } ${customer.lastName.toUpperCase()}`,
    ...customer,
  }));
};
