import React from "react";
import Logo from "../assets/argentBankLogo.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className='error-page'>
      <img src={Logo} alt='' />
      <h1>404 Route not found !</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <Link to='/'>Go to Home Page</Link>
    </main>
  );
};

export default ErrorPage;
