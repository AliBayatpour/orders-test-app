import { OrderStatus } from "../../enums/orderStatus";

export type Order = {
  id: string;
  total: string;
  quantity: string;
  status: OrderStatus;
  date: string;
};
