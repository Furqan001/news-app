import MuiCard from "@mui/material/Card";

export default function Card({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <MuiCard
      {...props}
      sx={{
        padding: (theme) => theme.spacing(2),
        margin: (theme) => theme.spacing(2, 0),
      }}
    >
      {children}
    </MuiCard>
  );
}
