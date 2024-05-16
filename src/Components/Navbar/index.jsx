import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Stack, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// style to shopping cart
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
export default function Navbar() {
  // to show list length
  const listLength = useSelector((state) => state.cartSlice.list).length;
  console.log({listLength})
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
        <Stack direction={"row"} alignItems={"center"} gap={"15px"}>
          <Typography component={"h1"} fontSize={"1.5rem"}>
            <Link to={"/"} style={{ color: "white" }}>
              Navbar
            </Link>
          </Typography>
          <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
            <Button style={{ color: "white" }}>
              <Link to={"/"} style={{ color: "white" }}>
                Home
              </Link>
            </Button>
            <Button style={{ color: "white" }}>
              <Link to={"/products"} style={{ color: "white" }}>
                Products
              </Link>
            </Button>
            <Button style={{ color: "white" }}>
              <Link to={"/auth"} style={{ color: "white" }}>
                Auth
              </Link>
            </Button>
          </Stack>
        </Stack>

        <IconButton>
          <StyledBadge badgeContent={listLength} color="secondary">
            <Link to={"/cart"} style={{ color: "white" }}>
              <ShoppingCartIcon />
            </Link>
          </StyledBadge>
        </IconButton>
      </Stack>
    </>
  );
}
