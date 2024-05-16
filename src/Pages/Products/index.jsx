import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function Products() {
    const [products,setProducts]=useState()
    // get all the products
    useEffect(()=>{
        (async()=>{
            try {
                const res=await fetch('https://fakestoreapi.com/products')
                const data=await res.json()
                setProducts(data)
            } catch (error) {
                toast.error('Network error!')
            }
        })()
    },[])
    
  return (
    <div>Products</div>
  )
}
