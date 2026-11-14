import React, { useEffect, useState } from "react";
import axios from "axios"
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";
function Product() {
    const [products, setProducts]= useState([])
  const [isLoading, setisLoading]=useState(false)

    useEffect(()=>{
      setisLoading(true);
        axios.get("https://fakestoreapi.com/products").then((res) => {
          // console.log(res.data);
          setProducts(res.data)
         setisLoading(false);
        }).catch((err)=>{
            console.log(err)
             isLoading(false);
        });
    },[])
  return (
    <>
    {

       isLoading?(<Loader/>):(  <section className={classes.product_container}>{
      
 products.map((singleProduct)=>(
     <ProductCard product={singleProduct} key={singleProduct.id}/>
  ))
     } </section>)
    }
   
    
    </>
  
  );
}

export default Product;
