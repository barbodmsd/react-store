import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductsCard from "./ProductsCard";
import ProductsSkeleton from "./ProductsSkeleton";
// make skeleton an array
let loading = [];
for (let i = 0; i < 8; i++) {
  loading.push(<ProductsSkeleton />);
}
export default function Products() {
  const [products, setProducts] = useState();
  // get all the products
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        toast.error("Network error!");
      }
    })();
  }, []);

//   make card for all product
  const items = products?.map((e, index) => (
    <ProductsCard
      key={index}
      img={e.image}
      name={e.title}
      price={e.price}
      id={e.id}
    />
  ));
  return (
    <>
      {products ? (
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={"15px"}
          justifyContent={"center"}
          p={3}
        >
          {items}
        </Stack>
      ) : (
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={"15px"}
          justifyContent={"center"}
          p={3}
        >
          {loading}
        </Stack>
      )}
    </>
  );
}
