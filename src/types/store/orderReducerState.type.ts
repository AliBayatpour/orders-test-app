import { Order } from "../orders/order.type";

export type OrderReducerState = {
  isLoading: boolean;
  error: undefined | string;
  currentOrders: Order[];
  filteredOrders: Order[];
};
