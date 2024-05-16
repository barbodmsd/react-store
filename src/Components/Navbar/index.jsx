import { Button, Stack, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
            <Link style={{ color: "white" }}>Navbar</Link>
          </Typography>
          <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
            <Button style={{ color: "white" }}>
              <Link style={{ color: "white" }}>Home</Link>
            </Button>
            <Button style={{ color: "white" }}>
              <Link style={{ color: "white" }}>Products</Link>
            </Button>
            <Button style={{ color: "white" }}>
              <Link style={{ color: "white" }}>Auth</Link>
            </Button>
          </Stack>
        </Stack>
        <Box>
          <IconButton>
            <StyledBadge badgeContent={4} color="secondary">
              <Link style={{ color: "white" }}>
                <ShoppingCartIcon />
              </Link>
            </StyledBadge>
          </IconButton>
        </Box>
      </Stack>
    </>
  );
}
