import * as React from "react";

import Select from "@/theme/Select";

interface IThemeSelectProps {
  selectedValue?: string;
  onChange: (selectedValue: string) => void;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
}

const data = [
  {
    value: "dark",
    label: "Dark",
  },
  {
    value: "light",
    label: "Light",
  },
];
export default function ThemeSelect(props: IThemeSelectProps) {
  return (
    <Select
      labelId="theme"
      options={data}
      label={props.placeholder}
      value={props.selectedValue}
      onChange={(e: any) => {
        if (!e.target.value) return;
        props.onChange(
          data!?.find?.((item) => item.value === e.target.value)?.value!
        );
      }}
      error={props.error}
    />
  );
}
