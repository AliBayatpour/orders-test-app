import { SelectOption } from "../shared/selectOption.type";
import { Order } from "./order.type";

export type AddOrderForm = {
  id: { value: Order["id"]; error: string };
  total: { value: string; error: string };
  quantity: { value: string; error: string };
  date: { value: Date; error: string };
  status: { value: SelectOption<Order["status"]>; error: string };
};
