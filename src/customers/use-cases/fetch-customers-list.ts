import { Customer } from '../Customer';
import { customersList } from '../customers-list';

export const fetchCustomersList = async (): Promise<Customer[]> => {
  return customersList;
};
