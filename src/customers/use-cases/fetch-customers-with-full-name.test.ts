import { fetchCustomersList } from './fetch-customers-list';
import { fetchCustomersWithFullName } from './fetch-customers-with-full-name';

jest.mock('./fetch-customers-list.ts', () => ({ fetchCustomersList: jest.fn() }));

describe('fetchCustomersWithFullName', () => {
  test('should return customer with full name 1', async () => {
    (fetchCustomersList as jest.Mock).mockImplementation(() =>
      Promise.resolve([
        {
          id: 'CUST_0001',
          firstName: 'REMI',
          lastName: 'GUERIN',
          status: 'active',
        },
      ]),
    );
    const data = await fetchCustomersWithFullName();

    expect(data[0].fullName).toBe('Remi GUERIN');
  });

  test('should return customer with full name 2', async () => {
    (fetchCustomersList as jest.Mock).mockReturnValue([
      {
        id: 'CUST_0001',
        firstName: 'REMI',
        lastName: 'GUERIN',
        status: 'active',
      },
    ]);

    const data = await fetchCustomersWithFullName();

    expect(data[0].fullName).toBe('Remi GUERIN');
  });
});
