import React from "react";

import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import MuiSelect, { SelectProps as MuiSelectProps } from "@mui/material/Select";
import Typography from "@mui/material/Typography";

export interface SelectProps extends MuiSelectProps {
  options:
    | string[]
    | number[]
    | {
        value: string | number;
        label: React.ReactNode;
        description?: React.ReactNode;
      }[];
  label?: React.ReactNode;
  labelId?: string;
  onReset?: () => void;
}
const getItem = (option: any) => {
  let val = typeof option !== "object" ? option : option.value;
  let label = typeof option !== "object" ? option : option.label;
  let description = typeof option !== "object" ? null : option.description;

  return { val, label, description };
};

const Item = ({ option }: any) =>
  option?.description ? (
    <div>
      <Typography>{option?.label}</Typography>

      <Typography variant="caption">{option?.description}</Typography>
    </div>
  ) : (
    option?.label
  );

const Select: React.FC<SelectProps> = ({
  options,
  label,
  labelId,
  children,
  onReset,
  ...props
}) => (
  <>
    {label ? (
      <InputLabel id={labelId} htmlFor={labelId}>
        {label}
      </InputLabel>
    ) : null}
    <MuiSelect
      {...{ ...props, label, labelId }}
      renderValue={(value: any) => {
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Item
              option={getItem(
                (options as any).find((option: any) =>
                  typeof option !== "object"
                    ? option === value
                    : option.value === value
                )
              )}
            />
            {!!onReset && (
              <Close
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                onClick={() => {
                  onReset?.();
                }}
              />
            )}
          </Box>
        );
      }}
    >
      {options.map((option, key) => {
        const item = getItem(option);

        return (
          <MenuItem key={key} value={item?.val}>
            <Item option={item} />
          </MenuItem>
        );
      })}
    </MuiSelect>
  </>
);

export default Select;
