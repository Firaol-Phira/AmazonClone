import React from 'react'
import classes from "./Auth.module.css";
import {Link} from "react-router-dom";
function Auth() {
  return (
    <section className={classes.Auth}>
      <Link>
        <img
          src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
          alt=""
        />
      </Link>

      <div className={classes.login}>
        <h1>
          Sign In </h1>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button className={classes.login_signin}>Sign in</button>
          </form>
        <p>
          By sign in you agree to the amazon fake clone condition of use and sale . please see our privacy notice, our cookies notice and our interest based ads notice
        </p>

       
        {/* create account */}

        <button className={classes.login_register}>Create your Amazon Account</button>
      </div>
    </section>
  );
}

export default Auth;
