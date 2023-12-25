import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginatorOptions } from "../../constants/shared/paginator.constants";
import { SortDirection } from "../../enums/shared/sortDirection.enum";
import {
  selectFilteredOrders,
  selectFilteredOrdersLength,
} from "../../store/orders/orders.selector";
import { ordersActions } from "../../store/orders/orders.slice";
import { AppDispatch } from "../../store/store";
import { Order as OrderType } from "../../types/orders/order.type";
import { ListColumn } from "../../types/shared/ListColumn.type";
import {
  initialListHeaderColumns,
  sortOrders,
} from "../../utils/orders/filterOrders.utils";
import ListHeader from "../shared/ListHeader";
import Paginator from "../shared/Paginator";
import Order from "./Order";

const Orders = () => {
  const dispatch: AppDispatch = useDispatch();

  const filteredOrders = useSelector(selectFilteredOrders);
  const filteredOrdersLength = useSelector(selectFilteredOrdersLength);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    +paginatorOptions[0].value,
  );

  const [listColumns, setListColumns] = useState<ListColumn<keyof OrderType>[]>(
    initialListHeaderColumns(),
  );

  const stringFilteredOrders = filteredOrders.toString();

  useEffect(() => {
    setCurrentPage(1);
  }, [stringFilteredOrders]);

  const onSortChange = (column: ListColumn<keyof OrderType>) => {
    const tempListHeader = initialListHeaderColumns();
    const idx = tempListHeader.findIndex((col) => col.key === column.key);
    tempListHeader[idx] = {
      ...tempListHeader[idx],
      sortDirection:
        column.sortDirection === SortDirection.ASC
          ? SortDirection.DESC
          : SortDirection.ASC,
    };
    setListColumns(tempListHeader);
    const sortedOrders = sortOrders(
      filteredOrders,
      column.key,
      tempListHeader[idx].sortDirection,
    );
    dispatch(ordersActions.setFilteredOrders(sortedOrders));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <ListHeader listColumns={listColumns} onSortChange={onSortChange} />
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
