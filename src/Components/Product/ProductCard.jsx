import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Rating} from "@mui/material"
import classes from "./Product.module.css"
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
function ProductCard({ product, flex, renderdesc,renderadd}) {
  const { image, title, id, rating, price,description } = product;

const [state,dispatch]=useContext(DataContext)
 const addtocart=()=>{
  dispatch({
    type:Type.ADD_TO_BASKET,
    item:{

      image, title, id, rating, price,description
    }
  })
 }

  return (
    <div
      className={`${classes.card_container} ${flex ? classes.product_flexed : ""}`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
       {renderdesc && <div>{description}</div>}
        <div className={classes.rating}>
          {/*rating  */}
          <Rating value={rating.rate} precision={0.1} />
          {/* count */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>

        {renderadd && <button className={classes.button} onClick={addtocart}>add to cart</button>}
       
      </div>
    </div>
  );
}

export default ProductCard;
