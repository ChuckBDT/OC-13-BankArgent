import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/auth/authActions";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const { logDetails, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(userLogin(data));
  };

  useEffect(() => {
    if (logDetails) {
      navigate("/user/profile");
    }
  }, [logDetails]);

  return (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <i className='fa fa-user-circle sign-in-icon'></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='input-wrapper'>
            <label htmlFor='username'>Username</label>
            <input {...register("email")} type='email' id='username' />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input {...register("password")} type='password' id='password' />
          </div>
          <div className='input-remember'>
            <input type='checkbox' id='remember-me' />
            <label htmlFor='remember-me'>Remember me</label>
          </div>
          {error && (
            <p className='login-form-error'>
              Wrong Username / Password
              <br />
              Please try again
            </p>
          )}
          <button type='submit' className='sign-in-button'>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
