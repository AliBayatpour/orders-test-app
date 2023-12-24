import { OrderStatus } from "../../enums/orderStatus";
import { Order } from "../../types/orders/order.type";
import { SelectOption } from "../../types/shared/selectOption.type";

export const orderStatusOptions: SelectOption<Order["status"]>[] = [
  { label: OrderStatus.NEW, value: OrderStatus.NEW },
  { label: OrderStatus.IN_TRANSIT, value: OrderStatus.IN_TRANSIT },
  { label: OrderStatus.DELIVERED, value: OrderStatus.DELIVERED },
];

export const zeroErrorMessage = "value must be greater than 0";
export const requiredErrorMessage = "value is required";
export const idErrorMessage = "id already exists enter a different id";
