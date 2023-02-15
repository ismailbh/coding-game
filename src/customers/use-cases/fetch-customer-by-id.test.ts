import { fetchCustomerById } from './fetch-customer-by-id';
import { fetchCustomersList } from './fetch-customers-list';

jest.mock('./fetch-customers-list', () => ({ fetchCustomersList: jest.fn() }));

describe('fetchCustomerById', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test('shoud return customer by id', async () => {
    (fetchCustomersList as jest.Mock).mockReturnValue([
      {
        id: 'CUST_0001',
        firstName: 'john',
        lastName: 'SMith',
        status: 'active',
      },
      {
        id: 'CUST_0002',
        firstName: 'Richard',
        lastName: 'STALLMAN',
        status: 'active',
      },
    ]);

    const data = await fetchCustomerById('CUST_0001');
    expect(data?.firstName).toBe('john');
  });
});
