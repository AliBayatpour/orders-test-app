import { OrderStatus } from "../../enums/Orders/orderStatus.enum";

export type Order = {
  id: string;
  total: string;
  quantity: string;
  status: OrderStatus;
  date: string;
};
