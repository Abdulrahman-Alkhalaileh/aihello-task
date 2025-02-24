"use client";
import React, { useState } from "react";
import { Stack, StackProps, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import {
  profileData,
  MarketplaceData,
  AmountDetails,
} from "../../campaignData";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import Controller from "./Controller";
import CustomDataGrid from "@/components/Tables/CustomDataGrid";

const ProfileView: React.FC<StackProps> = ({ ...props }) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  return (
    <Stack border={1} borderColor="border.main" borderRadius={2} {...props}>
      <Controller selectedRows={selectedRows.length} />
      <CustomDataGrid
        rows={profileData}
        columns={columns}
        onRowSelectionModelChange={(selectionModel) =>
          setSelectedRows(selectionModel as number[])
        }
      />
    </Stack>
  );
};

const columns: GridColDef<MarketplaceData>[] = [
  {
    field: "marketplace",
    headerName: "Marketplace",
    width: 200,
    renderCell: ({ row }) => (
      <Typography mt={2} color="primary.main" fontSize={14}>
        {row.marketplace}
      </Typography>
    ),
  },
  { field: "shortName", headerName: "Short Name", width: 200 },
  { field: "autoPilot", headerName: "Auto Pilot", width: 200 },
  { field: "dailyBudget", headerName: "Daily Budget", width: 200 },
  {
    field: "spend",
    headerName: "Spend",
    width: 200,
    renderCell: ({ row }) => <AmountCell amount={row.spend} />,
  },
  {
    field: "sales",
    headerName: "Sales",
    width: 200,
    renderCell: ({ row }) => <AmountCell amount={row.sales} />,
  },
  {
    field: "acos",
    headerName: "ACoS",
    width: 200,
    renderCell: ({ row }) => <AmountCell amount={row.acos} />,
  },
  {
    field: "units",
    headerName: "Units",
    width: 200,
    renderCell: ({ row }) => <AmountCell amount={row.units} />,
  },
];

const AmountCell = ({ amount }: { amount: AmountDetails }) => {
  return (
    <>
      {amount.change === 0 ? (
        <>{`${amount.currency}${amount.amount}`}</>
      ) : (
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowDropDownCircleIcon
            color={amount.change < 0 ? "error" : "success"}
            fontSize="small"
            sx={{
              transform: amount.change > 0 ? "rotate(180deg)" : "none",
            }}
          />{" "}
          <>{`${amount.currency}${amount.amount}`}</>
          <Typography variant="caption">{`${amount.change}%`}</Typography>
        </Stack>
      )}
    </>
  );
};

export default ProfileView;
