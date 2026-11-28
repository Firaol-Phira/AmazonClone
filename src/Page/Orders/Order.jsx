import React, { use, useEffect, useState } from 'react'
import classes from "./Order.module.css"
import Layout from '../../Components/Layout/Layout'
import { db } from '../../Utility/firebase'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import { useContext } from 'react'
import ProductCard from "../../Components/Product/ProductCard"

function Order() {
  const [{user},dispatch]=useContext(DataContext);
  const[ orders, serOrders]=useState([])
  useEffect(()=>{
    if (user){
db.collection("users").doc(user.uid).collection("orders").orderBy("created","desc").onSnapshot((snapshot)=>{
  serOrders(snapshot.docs.map((doc)=>({
    id:doc.id,
    data:doc.data(),
  })));

});
    }else{
      serOrders([])
    }
  },[])
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>
{
  orders?.length==0 && <div style={{padding:"20px"}}>
    You don't have orders yet.
  </div>
}


          {/* ordered items */}
          <div>
{
  orders?.map((eachOrder,i)=>{
    return(
      <div key={i}>
        <hr />
        <p>
          Order Id:{eachOrder?.id}
        </p>
        {
          eachOrder?.data?.basket?.map((order)=>{
            return(
              <ProductCard flex={true} product={order} key={order.id}>
              
            </ProductCard>
            )
            

          })
        }
      </div>
    )
  })
}
          </div>
        </div>
      </section>
      
    </Layout>
  )
}

export default Order
