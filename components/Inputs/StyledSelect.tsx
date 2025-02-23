import React from "react";
import { Select, SelectProps } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledSelect: React.FC<SelectProps> = ({ ...props }) => {
  return (
    <Select
      IconComponent={(args) => (
        <KeyboardArrowDownIcon fontSize="small" {...args} />
      )}
      {...props}
      sx={{
        borderRadius: 2,
        height: 45,
        bgcolor: "background.default",
        color: "text.secondary",
        "& fieldset": {
          borderColor: "border.main",
        },
        ...props.sx,
      }}
    />
  );
};

export default StyledSelect;
