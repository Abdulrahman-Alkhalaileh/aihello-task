"use client";
import React, { useState } from "react";
import { MenuItem, SelectProps, Stack } from "@mui/material";
import StyledSelect from "../Inputs/StyledSelect";
import Image from "next/image";

interface RegionType {
  title: string;
  value: string;
  img: string;
}

const regions: RegionType[] = [
  {
    title: "Natural Things Main (US)",
    value: "US",
    img: "https://s3-alpha-sig.figma.com/img/8fe7/06bf/fe1dd782b06ca9a644e976a4e3969e5f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f61wXkDEliMSGq4FYQ82D1dbrsECGsj9JhfAAEeX9Yv4yH94qSEhbNAFFYs2hqOvg7Dr3-kgDqafbNpDtwL4B2n-zxFIEOfAr0zqE-nyDdUrDod2x5Ggbc8sKgRSbjCqooXBEzZK2wMalCyM2wtiVnHIvWkI9-MXsXqpMIXr1ro2uV3BmR2lXZpGiUSPLU9snqn-XRR32FFB~93FrFWNxZWUVqhBpRow-cCVLKtBnpXJ~5izlxuFjsV~kWJu-ljPCurFVniEOLSQDNKOcbWXtj~X0JSq4nLDTMwnr2XJFkdRnuhzeNEXtJrP0HwUSyUbxI-daE5pZecEDtyoFLv85A__",
  },
  {
    title: "New York City (US)",
    value: "NY",
    img: "https://s3-alpha-sig.figma.com/img/8fe7/06bf/fe1dd782b06ca9a644e976a4e3969e5f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f61wXkDEliMSGq4FYQ82D1dbrsECGsj9JhfAAEeX9Yv4yH94qSEhbNAFFYs2hqOvg7Dr3-kgDqafbNpDtwL4B2n-zxFIEOfAr0zqE-nyDdUrDod2x5Ggbc8sKgRSbjCqooXBEzZK2wMalCyM2wtiVnHIvWkI9-MXsXqpMIXr1ro2uV3BmR2lXZpGiUSPLU9snqn-XRR32FFB~93FrFWNxZWUVqhBpRow-cCVLKtBnpXJ~5izlxuFjsV~kWJu-ljPCurFVniEOLSQDNKOcbWXtj~X0JSq4nLDTMwnr2XJFkdRnuhzeNEXtJrP0HwUSyUbxI-daE5pZecEDtyoFLv85A__",
  },
];

const RegionField: React.FC<SelectProps> = ({ ...props }) => {
  const [value, setValue] = useState<string>(regions[0].value);

  return (
    <StyledSelect
      value={value}
      renderValue={(value) => {
        const result = regions.find(
          (item) => item.value === value
        ) as RegionType;
        return (
          <Stack direction="row" alignItems="center" gap={2} fontSize={14}>
            <Image width={24} height={24} alt={result.value} src={result.img} />
            {result.title}
          </Stack>
        );
      }}
      onChange={(event) => {
        setValue(event.target.value as string);
      }}
      {...props}
    >
      {regions.map((region) => (
        <MenuItem
          key={region.value}
          value={region.value}
          sx={{ display: "flex", gap: 2, alignItems: "center", fontSize: 14 }}
        >
          <Image width={24} height={24} alt={region.value} src={region.img} />
          {region.title}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default RegionField;
