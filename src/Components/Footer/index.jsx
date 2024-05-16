import { Stack, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          height: 200,
          bgcolor: "teal",
        }}
      >
        <Typography variant={"h1"} style={{ color: "white" }}>
          Footer
        </Typography>
      </Stack>
    </>
  );
}
