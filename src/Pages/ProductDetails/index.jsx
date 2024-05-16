import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductDetails() {
  const [product, setProduct] = useState();
  const { id } = useParams(); // get the id slug
  const navigate=useNavigate()
  // get one product
  useEffect(()=>{
    (async()=>{
        try {
            const res=await fetch(`https://fakestoreapi.com/products/${id}`)
            const data=await res.json()
            data?setProduct(data):navigate('/product-not-found')
        } catch (error) {
         toast.error('Network error!')   
        }
    })()
  },[id])
  return <></>;
}
