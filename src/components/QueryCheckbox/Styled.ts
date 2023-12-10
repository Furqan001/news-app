import Button from "@/theme/Button";

import ChipCheckbox from "@/theme/Checkbox/Chip";

import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel, { FormLabelProps } from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";

export const FormWrapper = styled(FormControl)((props) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

export const FormGroupHolder = styled(FormGroup)((props) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
}));

export const FormLabelHolder = styled(FormLabel)<FormLabelProps>((props) => ({
  marginRight: props.theme.spacing(4),
  maxWidth: "10%",
  minWidth: "10%",
  color: props.theme.palette.text.primary,
  fontSize: "14px",
})) as typeof FormLabel;

export const ChipCheckboxWrapper = styled(ChipCheckbox)((props) => ({
  paddingLeft: `0 !important`,
  "&:hover > button": {
    // backgroundColor: props.theme.palette.background.primaryLight,
  },
}));

export const ButtonHolder = styled(Button)<{
  selected?: boolean;
}>((props) => ({
  borderColor: props.theme.palette.primary.main,
  backgroundColor: props.selected
    ? props.theme.palette.primary.main
    : props.theme.palette.common.white,
  color: props.selected ? props.theme.palette.common.white : undefined,
}));
