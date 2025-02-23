"use client";
import React from "react";
import {
  Avatar,
  AvatarProps,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export interface UserMenuProps extends StackProps {
  avatarProps?: AvatarProps;
}

const UserMenu: React.FC<UserMenuProps> = ({ avatarProps, ...props }) => {
  return (
    <Stack direction="row" gap={1} alignItems="center" {...props}>
      <Stack alignItems="end">
        <Typography
          variant="body1"
          fontSize={14}
          fontWeight={500}
          lineHeight={1.5}
        >
          Qasim Rai
        </Typography>
        <Typography
          variant="caption"
          fontSize={12}
          color="text.secondary"
          fontWeight={500}
          lineHeight={1.2}
        >
          Brand Manager
        </Typography>
      </Stack>
      <Avatar
        src="https://s3-alpha-sig.figma.com/img/2bee/0fbf/29e6a0ad57082e27e63e3a74cebcbbdf?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hxbz-f6lTrpjT60lzE-xiKtxT4FkXjB6LdLvImPLP3yxB6aW5BxmkA-9HmpvlVQSBVQ3DzZiWkH-pBpiAtbed5BhQtsl8OFWxf3vEz605WNufvEl39i8pP2bvqZWF2UiYJl4BlPEIrzZKdv5dw1bblAsoStDOh1vmM8Y8sDPkjndfm-rHtYr7uYjGG1Lwd1-8HOeK38NuWyGtOkMLLg8IptWqTrIxSz6nMcVrRkWQBvjUhz-PiXBhJDtjB7YczLmpeAOb6M5GIRoCDWpt~Q-jg5sqMmjIpVryepYe8ieZEx3o2YTMgqgx4OkTmHdC-gtms4ZOOeqUdlmHSSx6Za8Iw__"
        {...avatarProps}
        sx={{ height: 48, width: 48, ...avatarProps?.sx }}
      />
      <KeyboardArrowDownIcon sx={{color: 'text.secondary'}}/>
    </Stack>
  );
};

export default UserMenu;
