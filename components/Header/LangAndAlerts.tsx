import React from "react";
import { Avatar, Stack, StackProps } from "@mui/material";
import NotificationIcon from "../SVG/NotificationIcon";

const LangAndAlerts: React.FC<StackProps> = ({ ...props }) => {
  return (
    <Stack direction="row" alignItems="center" gap={3} {...props}>
      <Stack
        alignItems="center"
        justifyContent="center"
        height={41}
        width={41}
        border={1}
        borderRadius="50%"
        bgcolor="background.default"
        borderColor="border.main"
        position="relative"
        sx={{
          "&:after": {
            content: "''",
            position: "absolute",
            top: 0,
            right: 0,
            width: 12,
            height: 12,
            bgcolor: "error.main",
            boxSizing: "border-box",
            borderRadius: "50%",
            border: 2,
            borderColor: "white",
          },
        }}
      >
        <NotificationIcon />
      </Stack>
      <Avatar
        src="https://s3-alpha-sig.figma.com/img/e4a1/94b3/da74631302c2f1508421871755fe4276?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bKYXXyj2EClS4w5kGZvgvBAdjHjWHAuKS34giaYirIfKiOq8RNGxwOO1kyUCZx-F9qWvxBqzELnAe~oN4wa4Q0OOXEVNw4M8ZpC~psG-g2Gmap2iCieA8YYgdG2yDT-boPPN6OUUiKbs4pvwGH7FhWZzeEuITrvUOJJc03lyin0yGEuXI5Ma43DwQqiIFJYxrlWAPhEsT80LDAPblSUDTkPRr67Qls72~oCNP1Fg0KKbri3wLiO4Q61dJzPI1koGVbUkoWl60kwAO9fCB1IlmsVgOYAPqmxngWIFPT2Z2cu6QIfzNipBXTtgSQk3dnFV6mx3AIr3Y5IHAgRgLfzjPw__"
        sx={{ height: 41, width: 41 }}
      />
    </Stack>
  );
};

export default LangAndAlerts;
