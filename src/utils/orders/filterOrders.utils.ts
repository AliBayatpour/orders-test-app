import { listHeaderColumnsArr } from "../../constants/Orders/orders.constants";
import { SortDirection } from "../../enums/shared/sortDirection.enum";
import { Order } from "../../types/orders/order.type";
import { deepClone } from "../shared/deepClone.utils";

export const initialListHeaderColumns = () => deepClone(listHeaderColumnsArr);

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

export const sortOrders = (
  orders: Order[],
  key: keyof Order,
  direction: SortDirection,
): Order[] => {
  const compareFunction = (a: Order, b: Order): number => {
    const aValue = a[key];
    const bValue = b[key];

    if (key === "date") {
      const transformedA = new Date(aValue);
      const transformedB = new Date(bValue);
      return direction === SortDirection.ASC
        ? transformedA.getTime() - transformedB.getTime()
        : transformedB.getTime() - transformedA.getTime();
    }
    if (key === "quantity" || key === "total") {
      const transformedA = +aValue;
      const transformedB = +bValue;
      return direction === SortDirection.ASC
        ? transformedA - transformedB
        : transformedB - transformedA;
    }

    const comparison = aValue.localeCompare(bValue);

    return direction === SortDirection.DESC ? comparison : -comparison;
  };

  return orders.slice().sort(compareFunction);
};
