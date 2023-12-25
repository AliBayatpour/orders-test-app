import colors from "tailwindcss/colors";
import ChevronDown from "../../assets/svgs/ChevronDown";
import ChevronUp from "../../assets/svgs/ChevronUp";
import { SortDirection } from "../../enums/shared/sortDirection.enum";
import { Order } from "../../types/orders/order.type";
import { ListColumn } from "../../types/shared/ListColumn.type";

type Props = {
  listColumns: ListColumn<keyof Order>[];
  onSortChange: (column: ListColumn<keyof Order>) => void;
};
const ListHeader: React.FC<Props> = ({ listColumns, onSortChange }) => {
  return (
    <tr>
      {listColumns.map((column) => (
        <th key={`header-column-${column.key}`} className="py-2 px-4 border-b">
          <div
            className={`flex items-center ${
              column.sortable ? "cursor-pointer" : ""
            }`}
            onClick={column.sortable ? () => onSortChange(column) : undefined}
          >
            <p className="me-1">{column.label}</p>
            {column.sortable && (
              <div className="flex flex-col">
                <div className="transform translate-y-1">
                  <ChevronUp
                    fill={
                      column.sortDirection === SortDirection.ASC
                        ? colors.sky["500"]
                        : ""
                    }
                  />
                </div>
                <div className="transform -translate-y-1">
                  <ChevronDown
                    fill={
                      column.sortDirection === SortDirection.DESC
                        ? colors.sky["500"]
                        : ""
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </th>
      ))}
    </tr>
  );
};

export default ListHeader;
