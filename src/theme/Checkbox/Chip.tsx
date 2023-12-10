import * as React from "react";

import { CheckboxProps } from "@mui/material";

import Checkbox from "./index";

export default function ChipCheckbox({
  Component,
  ...props
}: CheckboxProps & {
  Component: React.FunctionComponent<{ selected?: boolean }>;
}) {
  return (
    <Checkbox
      inputProps={{ "aria-label": "Chip Checkbox" }}
      icon={<Component />}
      checkedIcon={<Component selected />}
      {...props}
    />
  );
}
