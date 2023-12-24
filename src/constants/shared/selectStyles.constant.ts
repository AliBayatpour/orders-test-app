import { GroupBase, StylesConfig } from "react-select";
import colors from "tailwindcss/colors";

export const selectStyes: StylesConfig<unknown, false, GroupBase<unknown>> = {
  control: (styles: any, state) => ({
    ...styles,
    borderColor: state.isFocused && colors.sky["500"],
    boxShadow: "none",
    "&:hover": {
      borderColor: state.isFocused && colors.sky["500"],
    },
  }),
  option: (styles: any, state) => {
    return {
      ...styles,
      backgroundColor: state.isSelected
        ? colors.sky["500"]
        : state.isFocused
        ? colors.sky["300"]
        : null,
      "&:hover": {
        borderColor: state.isFocused && colors.sky["300"],
      },
    };
  },
};
