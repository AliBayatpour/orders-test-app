import React from "react";
import { paginatorOptions } from "../../constants/shared/paginator.constants";
import { SelectOption } from "../../types/shared/selectOption.type";
import Select from "./Select";

type Props = {
  total: number;
  itemsPerPage: number;
  page: number;
  onChangePage: (page: number) => void;
  onChangeItemsPerPage: (page: number) => void;
};
const Paginator: React.FC<Props> = ({
  total,
  itemsPerPage,
  page,
  onChangePage,
  onChangeItemsPerPage,
}) => {
  const totalPages = Math.ceil(total / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  const getOptionByValue = (
    targetValue: SelectOption["value"],
  ): SelectOption => {
    return paginatorOptions.find((option) => option.value === targetValue)!;
  };

  const changeItemsPerPage = (itemsPerPageVal: number) => {
    onChangePage(1);
    onChangeItemsPerPage(itemsPerPageVal);
  };

  const nextBtnDisabled = page === totalPages;
  const prevBtnDisabled = page === 1;

  return (
    <div className="flex">
      <ul className="inline-flex -space-x-px text-sm mt-auto me-4">
        <li>
          <button
            className={`pagination-btn-previous ${
              prevBtnDisabled && "btn-disabled"
            }`}
            disabled={prevBtnDisabled}
            onClick={() => onChangePage(page - 1)}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={`page-number-${pageNumber}`}>
            <button
              className={
                page === pageNumber
                  ? "pagination-item-selected"
                  : "pagination-item"
              }
              onClick={() => onChangePage(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}

        <li>
          <button
            className={`pagination-btn-next ${
              nextBtnDisabled && "btn-disabled"
            }`}
            onClick={() => onChangePage(page + 1)}
            disabled={nextBtnDisabled}
          >
            Next
          </button>
        </li>
      </ul>
      <div>
        <Select
          options={paginatorOptions}
          value={getOptionByValue(itemsPerPage.toString())}
          onChange={(target) => changeItemsPerPage(+target.value)}
        />
      </div>
    </div>
  );
};

export default Paginator;
