import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserDetailsQuery } from "../features/apiSlice";
import { setUserInfos } from "../features/auth/authSlice";
import Modal from "../components/Modal";
import UserAccount from "../components/UserAccount";

const User = () => {
  const { userInfos } = useSelector((state) => state.auth);
  const { data } = useGetUserDetailsQuery();
  const dispatch = useDispatch();
  const accountData = [
    { title: "Argent Bank Checking (x8349)", amount: "2,082.79" },
    { title: "Argent Bank Checking (x8349)", amount: "2,082.79" },
    { title: "Argent Bank Checking (x8349)", amount: "2,082.79" },
  ];

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
        <Modal />
      </div>
      <h2 className='sr-only'>Accounts</h2>
      {accountData.map((accountData, index) => (
        <UserAccount
          key={index}
          title={accountData.title}
          amount={accountData.amount}
        />
      ))}
    </main>
  );
};

export default User;
