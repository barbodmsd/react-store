import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
        {/*create navbar */}
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        px={"50px"}
        direction={"row"}
        sx={{
          height: 60,
          bgcolor: "teal",
        }}
        component={"nav"}
      >
        <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
          <Typography component={"h1"} fontSize={"1.5rem"}>
            Navbar
          </Typography>
          <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
            <Button variant={'text'} style={{color:'white'}}><Link>Home</Link></Button>
            <Button variant={'text'} style={{color:'white'}}><Link>Products</Link></Button>
            <Button variant={'text'} style={{color:'white'}}><Link>Auth</Link></Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
