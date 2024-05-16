import { CardActions, Skeleton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function ProductDetails() {
  const [product, setProduct] = useState();
  const { id } = useParams(); // get the id slug
  const navigate = useNavigate();
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
              {product.description} <br />
              Price : {product.price}
            </Typography>
          </CardContent>
          <CardActions>
            
          </CardActions>
        </Card>
      ) : (
        <Card sx={{ width: 600, height: 700, m: "100px auto" }}>
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
