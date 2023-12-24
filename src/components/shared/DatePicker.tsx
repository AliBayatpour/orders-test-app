import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  value: Date;
  onChange: (value: Date | null) => void;
  label: string;
};

const DatePicker: React.FC<Props> = ({ value, onChange, label }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <ReactDatePicker
        selected={value}
        onChange={(date) => onChange(date)}
        dateFormat="yyyy-MM-dd"
        onKeyDown={(e) => {
          e.preventDefault();
        }}
        className="input-sky"
        minDate={new Date()}
      />
    </div>
  );
};

export default DatePicker;
