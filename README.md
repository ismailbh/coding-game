# sephora-coding-game

Little exercises to show your coding skills!

## Basic functionnalities

- To build app and execute the code contained in the _src/index.ts_ file, run the `yarn start` command.
- To prevent relaunching the yarn start command everytime, execution can be launched in watch mode using the `yarn dev` command.
- Tests can be launched with `yarn test`
- To ease test driven development on given files, tests can be launched in watch mode with `yarn tdd <pattern>` with `<pattern>` a pattern matching the given files path

## Game goal

The applicant should implement the code responding to the need express by each questions. The implementation is completely free: new files can be created anywhere and existing code can be modified at will. **Providing tests for every answer is strongly encouraged**.

## Questions

1. Implement a method that retrieve all active customers

2. Implement a method that retrieve all customers and display their full name, with first letter of first name to upper case, the rest in lower case and the last name to upper case. Examples:

- REMI GUERIN => Remi GUERIN
- EMManuel CapeLLE => Emmanuel CAPELLE
- SOFYANE messoussi => Sofyane MESSOUSSI

3. Implement a fetchCustomerOrders use case (src/orders/use-cases/fetch-customer-orders.ts), that retrieve in the orders list all orders corresponding to a given customer id

4. Implement a method that return the name of the customer with the most expensive order

5. Implement a method that display for each customers, their name and corresponding number of orders

6. Implement a method that, given a customer ID, return the name of its most buyed SKU
