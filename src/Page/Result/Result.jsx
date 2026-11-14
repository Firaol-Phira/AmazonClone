import React, { useEffect, useState } from 'react'
import classes from "./Result.module.css"
import { useParams } from 'react-router-dom'
import Layout from '../../Components/Layout/Layout'
import axios from 'axios'
import { producturl } from '../../Api/endPoint'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'
function Result() {
    const [result , setResult]=useState([]);
     const [isLoading, setisLoading]=useState(false)
    const {categoryName}=useParams()
    useEffect(()=>{
setisLoading(true)
          axios.get(`${producturl}/products/category/${categoryName}`).then((res)=>{
                 
setResult(res.data) 
setisLoading(false);
console.log(res.data);
    }).catch((err)=>{
        console.log(err)
    })
    },[])
  
  return (
    <Layout>
      {isLoading? (<Loader/>):(<section>
        <h1 style={{padding:"30px"}}>Results</h1>
        <p style={{padding:"30px"}}>Category / {categoryName}</p>
        <hr />
        <div className={classes.product_container}>
{result?.map((product)=>(
    <ProductCard key={product.id}
    product={product}/>
))}


        </div>
      </section> )}
      
    </Layout>
  )
}

export default Result
