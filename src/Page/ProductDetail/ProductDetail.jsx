import React, { useEffect, useState } from 'react'
import classes from "./ProductDetail.module.css";
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { producturl } from '../../Api/endPoint';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';
function ProductDetail() {
  const {productId}=useParams()

  const [isLoading, setisLoading]=useState(true)
   const [product, setproduct] = useState({});

   useEffect(()=>{
    setisLoading(true)
    axios.get(`${producturl}/products/${productId}`).then((res)=>{
      setproduct(res.data)
          setisLoading(false);
    }).catch((err)=>{
      console.log(err)
        setisLoading(false);
    })
   },[productId])
  return (
    <Layout>
      {isLoading? (<Loader/>):<ProductCard product={product}
      flex={true}
      renderdesc={true}
     />}
     
    </Layout>
  )

}
export default ProductDetail
