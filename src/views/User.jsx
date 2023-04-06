import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserDetailsQuery } from "../features/apiSlice";
import { setUserInfos } from "../features/auth/authSlice";
import NameUpdater from "../components/NameUpdater";
import UserAccount from "../components/UserAccount";

const User = () => {
  const { userInfos } = useSelector((state) => state.auth);
  const { data } = useGetUserDetailsQuery();
  const dispatch = useDispatch();
  const accountData = [
    { title: "Argent Bank Checking (x8349)", amount: "2,082.79" },
    { title: "Argent Bank Savings (x6712)", amount: "10,928.42" },
    { title: "Argent Bank Credit Card (x8349)", amount: "184.30" },
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
        <NameUpdater
          fName={userInfos ? userInfos.body.firstName : "Chargement"}
          lName={userInfos ? userInfos.body.lastName : "Chargement"}
        />
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
