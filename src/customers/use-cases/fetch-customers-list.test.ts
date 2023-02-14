import { customersList } from '../customers-list';
import { fetchCustomersList } from './fetch-customers-list';

describe('fetchCustomersList', () => {
  test('Should return the customers list', async () => {
    const result = await fetchCustomersList();

    expect(result).toStrictEqual(customersList);
  });
});
