import { Button, CardActions, Skeleton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Store/Slices/cartSlice";
export default function ProductDetails() {
  const [product, setProduct] = useState();
  const { id } = useParams(); // get the id slug
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   for show the count of item in cart
  const quantity = useSelector((state) => state.cartSlice.list)?.filter(
    (e) => e.id == id
  )[0]?.quantity;
  // get one product
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        data ? setProduct(data) : navigate("/product-not-found");
      } catch (error) {
        toast.error("Network error!");
      }
    })();
  }, [id]);
  return (
    <>
      {product ? (
        <Card sx={{ width: 600, height: 500, m: "100px auto" }}>
          <CardMedia
            sx={{ height: "100%", height: "60%", objectFit: "cover" }}
            image={product.image}
            title={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description.slice(0,150)}
            </Typography>
            <Typography fontSize={"20px"}>Price : {product.price}</Typography>
          </CardContent>
          <CardActions>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Button
                mx={"5px"}
                variant={"contained"}
                color={"error"}
                disabled={!quantity}
                onClick={() => dispatch(removeItem(product.id))}
              >
                -
              </Button>
              {quantity && (
                <Typography component={"span"}>{quantity}</Typography>
              )}
              <Button
                mx={"5px"}
                variant={"contained"}
                color={"success"}
                onClick={() => dispatch(addItem(product))}
              >
                +
              </Button>
            </Stack>
          </CardActions>
        </Card>
      ) : (
        // skeleton
        <Card sx={{ width: 600, height: 500, m: "100px auto" }}>
          <Skeleton
            width={"100%"}
            height={"60%"}
            variant={"rectangular"}
            animation={"wave"}
          />
          <CardContent>
            <Skeleton width={"50%"} height={"30px"} animation={"wave"} />
            <Skeleton width={"100%"} height={"100px"} animation={"wave"} />
            <Skeleton width={"20%"} height={"30px"} animation={"wave"} />
          </CardContent>
          <CardActions>
            <Stack direction={"row"} spacing={1}>
              <Skeleton
                width={"70px"}
                height={"50px"}
                animation={"wave"}
                variant={"rounded"}
              />
              <Skeleton
                width={"70px"}
                height={"50px"}
                animation={"wave"}
                variant={"rounded"}
              />
            </Stack>
          </CardActions>
        </Card>
      )}
    </>
  );
}
