import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./features/auth/authSlice";

import Logo from "./assets/argentBankLogo.png";
import "./App.css";

function App() {
  const isConnected = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();

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
            {isConnected ? (
              <>
                <Link className='main-nav-item' to={"/user/fakeID"}>
                  <i className='fa fa-user-circle icon-margin-right'></i>
                  Name
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
