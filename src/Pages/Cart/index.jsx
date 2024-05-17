import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clear, removeItem } from "../../Store/Slices/cartSlice";
import CartSkeleton from "./CartSkeleton";
export default function Cart() {
  const { list } = useSelector((state) => state.cartSlice); //get the list of items
  const dispatch = useDispatch();
  // create for each item col for table and put the data in it
  let total = 0;
  const items = list?.map((e, index) => {
    total = e.price * e.quantity;
    return (
      <TableRow key={index}>
        <TableCell align={"center"}>{index + 1}</TableCell>
        <TableCell align={"center"}>{e.title.slice(0, 30)}</TableCell>
        <TableCell align={"center"}>
          <img src={e.image} alt={e.title} width={"50px"} height={"50px"} />
        </TableCell>
        <TableCell align={"center"}>{e.price}</TableCell>
        <TableCell align={"center"}>{e.quantity}</TableCell>
        <TableCell align={"center"}>{e.price * e.quantity}</TableCell>
        <TableCell align={"center"}>
          <Button
            mx={"5px"}
            variant={"contained"}
            color={"error"}
            disabled={!e.quantity}
            onClick={() => dispatch(removeItem(e.id))}
          >
            -
          </Button>
          <Button
            mx={"5px"}
            variant={"contained"}
            color={"success"}
            onClick={() => dispatch(addItem(e))}
          >
            +
          </Button>
        </TableCell>
      </TableRow>
    );
  });
  return (
    <>
      {/* if list was'nt empty will show it, but if cart was empty will show skeleton table with  text  */}
      {list.length > 0 ? (
        <>
          <Paper>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align={"center"}>Id</TableCell>
                    <TableCell align={"center"}>Name</TableCell>
                    <TableCell align={"center"}>Image</TableCell>
                    <TableCell align={"center"}>Price</TableCell>
                    <TableCell align={"center"}>Quantity</TableCell>
                    <TableCell align={"center"}>Total Price</TableCell>
                    <TableCell align={"center"}>Add/remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{items}</TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Button
            variant={"contained"}
            color={"error"}
            onClick={() => dispatch(clear([]))}
          >
            Clear
          </Button>
        </>
      ) : (
        <>
          {/* skeleton table  */}
          <CartSkeleton />
          <Stack alignItems={"center"} my={3}>
            <Typography variant={"h1"}> Cart is empty!</Typography>
          </Stack>
        </>
      )}
    </>
  );
}
