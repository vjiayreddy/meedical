import React, { ReactNode } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

interface UiIconButtonProps extends IconButtonProps {
  children: ReactNode;
}

const UiIconButton = ({ children, ...props }: UiIconButtonProps) => {
  return <IconButton {...props}>{children}</IconButton>;
};

export default UiIconButton;
