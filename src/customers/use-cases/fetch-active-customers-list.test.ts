import { fetchActiveCustomersList } from './fetch-active-customers-list';
import * as fetchCustomersListData from './fetch-customers-list';

import { fetchCustomersList } from './fetch-customers-list';

jest.mock('./fetch-customers-list', () => ({
  fetchCustomersList: jest.fn(),
}));

describe('fetchActiveCustomersList', () => {
  test('Should return the active customers list 1', async () => {
    (fetchCustomersList as jest.Mock).mockImplementation(() =>
      Promise.resolve([
        {
          id: 'CUST_0001',
          firstName: 'john',
          lastName: 'SMith',
          status: 'active',
        },
        {
          id: 'CUST_0002',
          firstName: 'john2',
          lastName: 'SMith2',
          status: 'inactive',
        },
      ]),
    );

    const data = await fetchActiveCustomersList();

    expect(data).toHaveLength(1);
  });

  test('Should return the active customers list 2', async () => {
    (fetchCustomersList as jest.Mock).mockReturnValue([
      {
        id: 'CUST_0001',
        firstName: 'john',
        lastName: 'SMith',
        status: 'active',
      },
      {
        id: 'CUST_0002',
        firstName: 'john2',
        lastName: 'SMith2',
        status: 'inactive',
      },
    ]);

    const data = await fetchActiveCustomersList();

    expect(data).toHaveLength(1);
  });

  test('Should return the active customers list 3', async () => {
    fetchCustomersListData.fetchCustomersList = jest.fn();
    (fetchCustomersListData.fetchCustomersList as jest.Mock).mockReturnValue([
      {
        id: 'CUST_0001',
        firstName: 'john',
        lastName: 'SMith',
        status: 'active',
      },
      {
        id: 'CUST_0002',
        firstName: 'john2',
        lastName: 'SMith2',
        status: 'inactive',
      },
    ]);

    const data = await fetchActiveCustomersList();

    expect(data).toHaveLength(1);
  });
});
