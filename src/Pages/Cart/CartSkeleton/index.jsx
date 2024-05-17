import {
  Paper,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  Skeleton,
  Stack,
  TableBody,
} from "@mui/material";
import React from "react";
// create many skeleton in array to use
let loading = [];
for (let i = 0; i < 5; i++) {
  loading.push(
    <TableRow key={i}>
      <TableCell align={"center"}>
        <Skeleton width={"30px"} animation={"wave"} />
      </TableCell>
      <TableCell align={"center"}>
        <Skeleton width={"50px"} animation={"wave"} />
      </TableCell>
      <TableCell align={"center"}>
        <Skeleton
          width={"35px"}
          height={"35px"}
          variant={"rounded"}
          animation={"wave"}
        />
      </TableCell>
      <TableCell align={"center"}>
        <Skeleton width={"30px"} animation={"wave"} />
      </TableCell>
      <TableCell align={"center"}>
        <Skeleton width={"30px"} animation={"wave"} />
      </TableCell>
      <TableCell align={"center"}>
        <Skeleton width={"30px"} animation={"wave"} />
      </TableCell>
      <TableCell align={"center"}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Skeleton
            width={"25px"}
            height={"25px"}
            variant={"rounded"}
            animation={"wave"}
          />
          <Skeleton
            width={"25px"}
            height={"25px"}
            variant={"rounded"}
            animation={"wave"}
          />
        </Stack>
      </TableCell>
    </TableRow>
  );
}
export default function CartSkeleton() {
  return (
    // skeleton table
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>{loading}</TableHead>
        </Table>
      </TableContainer>
    </Paper>
  );
}
