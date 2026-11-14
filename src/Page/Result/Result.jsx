import React, { useEffect, useState } from 'react'
import classes from "./Result.module.css"
import { useParams } from 'react-router-dom'
import Layout from '../../Components/Layout/Layout'
import axios from 'axios'
import { producturl } from '../../Api/endPoint'
import ProductCard from '../../Components/Product/ProductCard'
function Result() {
    const [result , setResult]=useState([]);
    const {categoryName}=useParams()
    useEffect(()=>{

          axios.get(`${producturl}/products/category/${categoryName}`).then((res)=>{
                 
setResult(res.data) 
console.log(res.data);
    }).catch((err)=>{
        console.log(err)
    })
    },[])
  
  return (
    <Layout>
      <section>
        <h1 style={{padding:"30px"}}>Results</h1>
        <p style={{padding:"30px"}}>Category / {categoryName}</p>
        <hr />
        <div className={classes.product_container}>
{result?.map((product)=>(
    <ProductCard key={product.id}
    product={product}/>
))}


        </div>
      </section>
    </Layout>
  )
}

export default Result
