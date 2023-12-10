import * as React from "react";

import { Box } from "@mui/material";

import { ButtonHolder, ChipCheckboxWrapper, FormGroupHolder } from "./Styled";

interface IQueryCheckboxProps {
  selectedValues?: string[];
  multiselect?: boolean;
  onChange?: (selectedValues: string[]) => void;
}

const Queries = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Meta",
    value: "meta",
  },
  {
    label: "Netflix",
    value: "netflix",
  },
  {
    label: "Google",
    value: "google",
  },
  {
    label: "Twitter",
    value: "twitter",
  },
  {
    label: "Tesla",
    value: "tesla",
  },
];

export default function QueryCheckbox(props: IQueryCheckboxProps) {
  const [selectedValues, setSelectedValues] = React.useState<string[]>(
    props.selectedValues?.length ? props.selectedValues : []
  );

  React.useEffect(() => {
    props?.onChange?.(selectedValues);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValues]);

  return (
    <FormGroupHolder>
      {Queries?.map?.((item) => {
        return (
          <Box key={item.value}>
            <ChipCheckboxWrapper
              key={item.value}
              checked={selectedValues.includes(item.value)}
              onChange={(e, checked) => {
                if (checked && props?.multiselect) {
                  setSelectedValues(selectedValues.concat(item.value));
                } else if (checked && !props?.multiselect) {
                  setSelectedValues([item.value]);
                } else {
                  setSelectedValues(
                    selectedValues.filter((value) => value !== item.value)
                  );
                }
              }}
              Component={({ selected }) => (
                <ButtonHolder
                  variant="outlined"
                  selected={selected}
                  size="small"
                >
                  {item.label}
                </ButtonHolder>
              )}
            />
          </Box>
        );
      })}
    </FormGroupHolder>
  );
}
