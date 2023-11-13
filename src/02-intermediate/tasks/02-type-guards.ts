/* eslint-disable max-len */
/*

Опишите функции type guards и выведите их типы.

*/

interface Order {
  address: string;
}
interface TelephoneOrder extends Order {
  callerNumber: string;
}
interface InternetOrder extends Order {
  email: string;
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

const isAnInternetOrder = (order: PossibleOrders): order is InternetOrder => (order as InternetOrder).email !== undefined;

/*

Alternative solution

const isAnInternetOrder = (order: PossibleOrders): order is InternetOrder => !!order && 'email' in order;

*/

const isATelephoneOrder = (order: PossibleOrders): order is TelephoneOrder => (order as TelephoneOrder).callerNumber !== undefined;

const makeOrder = (order: PossibleOrders) => {
  if (isAnInternetOrder(order)) {
    console.log(order.email);
  } else if (isATelephoneOrder(order)) {
    console.log(order.callerNumber);
  }
};
