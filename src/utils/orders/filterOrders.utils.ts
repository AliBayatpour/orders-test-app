import { Order } from "../../types/orders/order.type";

export const filterCurrentOrders = (
  orders: Order[],
  searchString: string,
): Order[] => {
  return orders.filter((order) =>
    Object.values(order).some((value) =>
      value.toLowerCase().includes(searchString.toLowerCase()),
    ),
  );
};
