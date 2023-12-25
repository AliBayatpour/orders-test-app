import { OrderStatus } from "../../enums/Orders/orderStatus.enum";
import { SortDirection } from "../../enums/shared/sortDirection.enum";
import { Order } from "../../types/orders/order.type";
import { ListColumn } from "../../types/shared/ListColumn.type";
import { SelectOption } from "../../types/shared/selectOption.type";

export const orderStatusOptions: SelectOption[] = [
  { label: OrderStatus.NEW, value: OrderStatus.NEW },
  { label: OrderStatus.IN_TRANSIT, value: OrderStatus.IN_TRANSIT },
  { label: OrderStatus.DELIVERED, value: OrderStatus.DELIVERED },
];

export const zeroErrorMessage = "value must be greater than 0";
export const requiredErrorMessage = "value is required";
export const idErrorMessage = "id already exists enter a different id";

export const listHeaderColumnsArr: ListColumn<keyof Order>[] = [
  {
    key: "id",
    label: "Order ID",
    sortDirection: SortDirection.NONE,
    sortable: false,
  },
  {
    key: "date",
    label: "Order date",
    sortDirection: SortDirection.NONE,
    sortable: true,
  },
  {
    key: "total",
    label: "Order total",
    sortDirection: SortDirection.NONE,
    sortable: true,
  },
  {
    key: "quantity",
    label: "Quantity",
    sortDirection: SortDirection.NONE,
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    sortDirection: SortDirection.NONE,
    sortable: true,
  },
];
