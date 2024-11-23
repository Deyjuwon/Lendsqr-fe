import React from 'react';
import logo from '../../assets/logo.svg';
import signIn from '../../assets/pablo-sign-in 1.svg';
import classes from '../Login/Login.module.scss';

const Login = () => {
  return (
    <div className={classes.Login}>
      <img className={classes.logo} src={logo} alt="Logo" />
      <div className={classes.InnerLogin}>
        {/* Left Section */}
        <div className={classes.LoginLeft}>
          <img src={signIn} alt="Sign In Illustration" />
        </div>

        {/* Right Section */}
        <div className={classes.LoginRight}>
          <h2>Welcome!</h2>
          <h3>Enter details to login.</h3>
          <form>
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <p>FORGOT PASSWORD?</p>
            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
