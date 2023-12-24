import React from "react";
import ReactSelect from "react-select";
import { selectStyes } from "../../constants/shared/selectStyles.constant";
import { SelectOption } from "../../types/shared/selectOption.type";

type Props = {
  options: SelectOption[];
  value: SelectOption;
  onChange: (value: SelectOption) => void;
  label?: string;
};

const Select: React.FC<Props> = ({ options, value, onChange, label }) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}

      <ReactSelect
        options={options}
        value={value}
        styles={selectStyes}
        onChange={(value) => onChange(value as SelectOption)}
        className="Select"
      />
    </div>
  );
};

export default Select;
