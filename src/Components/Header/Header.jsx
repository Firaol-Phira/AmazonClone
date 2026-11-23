import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import classes from "./Header.module.css";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {

  const [{basket},dispatch]=useContext(DataContext)
  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount+amount
  },0)
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <Link
              to="/
            "
            >
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt=""
              />
            </Link>{" "}
            {/* delivery */}
            <div className={classes.delivery}>
              <span>{SlLocationPin}</span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* Search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Product" />
            <BsSearch size={25} />
          </div>
          {/* right side */}
          <div className={classes.order_container}>
            <Link
              className={classes.language}
              to="
"
            >
              <img
                src="https://image.shutterstock.com/image-vector/american-flag-usa-design-united-260nw-2759513845.jpg"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>

            {/* 3 COMPONENTS */}
            <Link to="/auth">
              <p>Sign IN</p>
              <span>Account & Lists</span>
            </Link>
            {/* Orders */}
            <Link
              to="/orders
           "
            >
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
