import React from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import classes from "./Header.module.css";
function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <a
              href="
            "
            >
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt=""
              />
            </a>{" "}
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
            <a className={classes.language}
              href="
"
            >
              <img
                src="https://image.shutterstock.com/image-vector/american-flag-usa-design-united-260nw-2759513845.jpg"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>

            {/* 3 COMPONENTS */}
            <a href="">
              <p>Sign IN</p>
              <span>Account & Lists</span>
            </a>
            {/* Orders */}
            <a
              href="
           "
            >
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader/>
    </>
  );
}

export default Header;
