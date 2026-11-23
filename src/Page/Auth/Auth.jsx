import React, { useState,useContext } from 'react'
import classes from "./Auth.module.css";
import {Link} from "react-router-dom";
import {auth} from "../../Utility/firebase"
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";

import { DataContext } from "../../Components/DataProvider/DataProvider";
import {Type} from "../../Utility/action.type"

function Auth() {

  const [email,setemail]=useState("");
   const [password, setpassword] = useState("");
    const [error, seterror] = useState("");

    const [{user},dispatch]=useContext(DataContext)
    // console.log(password,email)

          console.log(user);



     const authhandler =async(e)=>{
    e.preventDefault()
    // console.log(e.target.name)
    if(e.target.name =="signin"){
      signInWithEmailAndPassword(auth,email,password).then((userinfo)=>{
        // console.log(userinfo)
        dispatch({
          type:Type.SET_USER,
          user:userinfo.user
        })
      }).catch((err)=>{
        console.log(err)

      })
    } 
    else{
      createUserWithEmailAndPassword(auth,email,password).then((userinfo)=>{
        // console.log(userinfo);
        dispatch({
          type: Type.SET_USER,
          user: userinfo.user,
        });
      }).catch((err)=>{
        console.log(err);
      })
    }
     }


  return (
    <section className={classes.Auth}>
      <Link>
        <img
          src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
          alt=""
        />
      </Link>

      <div className={classes.login}>
        <h1>Sign In </h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authhandler}
            name="signin"
            className={classes.login_signin}
          >
            Sign in
          </button>
        </form>
        <p>
          By sign in you agree to the amazon fake clone condition of use and
          sale . please see our privacy notice, our cookies notice and our
          interest based ads notice
        </p>

        {/* create account */}

        <button
          type="submit"
          onClick={authhandler}
          name="signup"
          className={classes.login_register}
        >
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
