"use client";
import React, { FC } from "react";
import {
  DataGrid,
  DataGridProps,
  gridClasses,
  GridColDef,
} from "@mui/x-data-grid";

export interface CustomDataGridProps extends DataGridProps {}

const CustomDataGrid: FC<CustomDataGridProps> = (props) => {
  return (
    <DataGrid
      checkboxSelection
      disableColumnResize
      pageSizeOptions={[10, 25, 50, 100]}
      initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
      {...props}
      sx={{
        minHeight: 600,
        borderRadius: "0 0 8px 8px",
        borderBottom: 0,
        borderRight: 0,
        borderLeft: 0,
        ["& ." + gridClasses.columnHeaderTitle]: {
          fontWeight: 700,
        },
        ["& ." + gridClasses.columnHeader]: {
          bgcolor: "background.paper",
        },
        [`& .${gridClasses["columnHeader"]} + .${gridClasses["filler"]}`]: {
          bgcolor: `background.paper`,
        },
        ...props.sx,
      }}
    />
  );
};

export { gridClasses };
export type { GridColDef };
export default CustomDataGrid;
