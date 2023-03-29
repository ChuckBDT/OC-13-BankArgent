import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "./features/auth/authSlice";

import Logo from "./assets/argentBankLogo.png";
import "./App.css";

function App() {
  const { logDetails } = useSelector((state) => state.auth);
  const { userInfos } = useSelector((state) => state.auth);

  return (
    <>
      <header className='App-header'>
        <nav className='main-nav'>
          <Link className='main-nav-logo' to={"/"}>
            <img
              className='main-nav-logo-image'
              src={Logo}
              alt='Argent Bank Logo'
            />
            <h1 className='sr-only'>Argent Bank</h1>
          </Link>
          <div>
            {logDetails ? (
              <>
                <Link className='main-nav-item' to={"/user/profile"}>
                  <i className='fa fa-user-circle icon-margin-right'></i>
                  {userInfos ? userInfos.body.firstName : "Chargement"}{" "}
                  {userInfos ? userInfos.body.lastName : ""}
                </Link>
                <Link
                  className='main-nav-item'
                  onClick={() => dispatch(logout())}
                  to={"/"}
                >
                  <i className='fa fa-sign-out icon-margin-right'></i>
                  Sign Out
                </Link>
              </>
            ) : (
              <Link className='main-nav-item' to={"/login"}>
                <i className='fa fa-user-circle icon-margin-right'></i>
                Sign In
              </Link>
            )}
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className='footer'>
        <p className='footer-text'>Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
}

export default App;
