import React from "react";
import { OrderStatus } from "../../enums/Orders/orderStatus.enum";
import { Order as OrderType } from "../../types/orders/order.type";

type Props = {
  order: OrderType;
};

const Order: React.FC<Props> = ({ order }) => {
  const assertUnreachable = (value: never): never => {
    throw new Error(`${value} is an invalid value`);
  };
  const getBadgeClassColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.NEW:
        return "badge-indigo";
      case OrderStatus.DELIVERED:
        return "badge-green";
      case OrderStatus.IN_TRANSIT:
        return "badge-yellow";
      default:
        return assertUnreachable(status);
    }
  };

  return (
    <tr>
      <td className="py-2 px-4 border-b">{order.id}</td>
      <td className="py-2 px-4 border-b">{order.date.slice(0, 10)}</td>
      <td className="py-2 px-4 border-b">€{order.total}</td>
      <td className="py-2 px-4 border-b">{order.quantity}</td>
      <td className="py-2 px-4 border-b">
        <span className={`badge p-2 ${getBadgeClassColor(order.status)}`}>
          {order.status}
        </span>
      </td>
    </tr>
  );
};

export default Order;
