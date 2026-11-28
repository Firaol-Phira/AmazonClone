import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

import { BeatLoader } from "react-spinners";

function Auth() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const [loading, setloading] = useState({
    signin: false,
    signup: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);

  const navigate = useNavigate();
  // console.log(password,email)
  const navstatedata = useLocation();

  console.log(user);

  const authhandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name)
    if (e.target.name == "signin") {
      setloading({ ...loading, signin: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          // console.log(userinfo)
          dispatch({
            type: Type.SET_USER,
            user: userinfo.user,
          });
          setloading({ ...loading, signin: false });

          navigate(navstatedata?.state?.redirect || "/");
        })
        .catch((err) => {
          seterror(err.message);
          setloading({ ...loading, signin: false });
        });
    } else {
      setloading({ ...loading, signup: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          // console.log(userinfo);
          dispatch({
            type: Type.SET_USER,
            user: userinfo.user,
          });
          setloading({ ...loading, signup: false });
          navigate(navstatedata?.state?.redirect || "/");
        })
        .catch((err) => {
          seterror(err.message);
          setloading({ ...loading, signup: false });
        });
    }
  };

  return (
    <section className={classes.Auth}>
      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
          alt=""
        />
      </Link>

      <div className={classes.login}>
        <h1>Sign In </h1>
        {navstatedata?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navstatedata.state.msg}
          </small>
        )}
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
            {loading.signin ? (
              <BeatLoader color="#85b42f" size={17} />
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        <p>
          By sign in you agree to the amazon fake clone condition of use and
          sale. Please see our privacy notice, our cookies notice and our
          interest based ads notice ,okay ?
        </p>

        {/* create account */}

        <button
          type="submit"
          onClick={authhandler}
          name="signup"
          className={classes.login_register}
        >
          {loading.signup ? (
            <BeatLoader color="#85b42f" size={17} />
          ) : (
            "  Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
