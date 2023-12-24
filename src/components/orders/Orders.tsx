import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { paginatorOptions } from "../../constants/shared/paginator.constants";
import {
  selectFilteredOrders,
  selectFilteredOrdersLength,
} from "../../store/orders/orders.selector";
import Paginator from "../shared/Paginator";
import Order from "./Order";

const Orders = () => {
  const filteredOrders = useSelector(selectFilteredOrders);
  const filteredOrdersLength = useSelector(selectFilteredOrdersLength);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    +paginatorOptions[0].value,
  );

  const stringFilteredOrders = filteredOrders.toString();

  useEffect(() => {
    setCurrentPage(1);
  }, [stringFilteredOrders]);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter orders based on the current page and items per page
  const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left">
              <th className="py-2 px-4 border-b">Order ID</th>
              <th className="py-2 px-4 border-b">Order date</th>
              <th className="py-2 px-4 border-b">Order total</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order) => (
              <Order key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <Paginator
          page={currentPage}
          total={filteredOrdersLength}
          itemsPerPage={itemsPerPage}
          onChangePage={(val) => setCurrentPage(val)}
          onChangeItemsPerPage={(val) => setItemsPerPage(val)}
        />
      </div>
    </>
  );
};

export default Orders;
