import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateUserDetailsMutation } from "../features/apiSlice";

function Modal() {
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();
  const [updateUserDetails] = useUpdateUserDetailsMutation();

  const toggleModal = () => setShow(!show);
  const updateUserHandler = (data) => {
    console.log(data);
    updateUserDetails(data);
  };

  return (
    <>
      <button onClick={() => toggleModal()} className='edit-button'>
        Edit Name
      </button>
      {show && (
        <div className='update-form'>
          <form className='update-form-content'>
            <i
              onClick={() => toggleModal()}
              class='fa fa-times update-form-close'
              aria-hidden='true'
            ></i>
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
            <button
              onClick={() => {
                console.log("click");
                handleSubmit(updateUserHandler);
              }}
              className='sign-in-button'
            >
              Update
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Modal;
