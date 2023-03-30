import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetUserDetailsQuery,
  useUpdateUserDetailsMutation,
} from "../features/apiSlice";
import { setUserInfos } from "../features/auth/authSlice";
import { useForm } from "react-hook-form";

const User = () => {
  const { userInfos } = useSelector((state) => state.auth);
  const { data } = useGetUserDetailsQuery();
  const [updateUserDetails] = useUpdateUserDetailsMutation();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const updateUserHandler = (data) => {
    updateUserDetails(data);
  };

  useEffect(() => {
    if (data) dispatch(setUserInfos(data));
  }, [data, dispatch]);

  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          {userInfos ? userInfos.body.firstName : "Chargement"}{" "}
          {userInfos ? userInfos.body.lastName : ""} !
        </h1>
        <button onClick={() => handleDisplay()} className='edit-button'>
          Edit Name
        </button>

        <div
          className={`update-form ${displayed ? "update-form--active" : ""}`}
        >
          <form
            className='update-form-content'
            onSubmit={() => {
              handleSubmit(updateUserHandler);
            }}
          >
            <h1>Update your profile</h1>
            <div className='input-wrapper'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                placeholder='First Name'
                {...register("firstName")}
                id='firstName'
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                placeholder='Last Name'
                {...register("lastName")}
                id='lastName'
              />
            </div>
            <button type='submit' className='sign-in-button'>
              Update
            </button>
          </form>
        </div>
      </div>
      <h2 className='sr-only'>Accounts</h2>
      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Checking (x8349)</h3>
          <p className='account-amount'>$2,082.79</p>
          <p className='account-amount-description'>Available Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Savings (x6712)</h3>
          <p className='account-amount'>$10,928.42</p>
          <p className='account-amount-description'>Available Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
          <p className='account-amount'>$184.30</p>
          <p className='account-amount-description'>Current Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default User;
