import React, { useEffect, useState } from 'react'
import classes from "./ProductDetail.module.css";
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { producturl } from '../../Api/endPoint';
import ProductCard from '../../Components/Product/ProductCard';
function ProductDetail() {
  const {productId}=useParams()
   const [product, setproduct] = useState(null);

   useEffect(()=>{
    axios.get(`${producturl}/products/${productId}`).then((res)=>{
      setproduct(res.data)
    }).catch((err)=>{
      console.log(err)
    })
   },[productId])
  return (
    <Layout>
      {product ?<ProductCard product={product}/>:<p>Loading....</p>}
     
    </Layout>
  )

}
export default ProductDetail
