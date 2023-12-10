import * as React from "react";

import Select from "@/theme/Select";

interface ILanguageSelectProps {
  selectedValue?: string;
  onChange: (selectedValue: string) => void;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
}

const data = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "ar",
    label: "Arabic",
  },
];
export default function LanguageSelect(props: ILanguageSelectProps) {
  return (
    <Select
      labelId="language"
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
