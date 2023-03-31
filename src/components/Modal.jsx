import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateUserDetailsMutation } from "../features/apiSlice";

function Modal() {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [updateUserDetails] = useUpdateUserDetailsMutation();

  const toggleModal = () => {
    setShow(!show);
    reset();
  };

  const updateUserHandler = (data) => {
    reset();
    updateUserDetails(data);
    toggleModal();
  };

  return (
    <>
      <button onClick={() => toggleModal()} className='edit-button'>
        Edit Name
      </button>
      {show && (
        <div className='update-form'>
          <form
            className='update-form-content'
            onSubmit={handleSubmit(updateUserHandler)}
          >
            <i
              onClick={() => toggleModal()}
              className='fa fa-times update-form-close'
              aria-hidden='true'
            ></i>
            <h1>Update your profile</h1>
            <div className='input-wrapper'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                placeholder='First Name'
                {...register("firstName", { required: true })}
                id='firstName'
              />
              {errors.firstName && (
                <p className='update-form-error'>
                  <i
                    className='fa fa-exclamation-triangle'
                    aria-hidden='true'
                  ></i>{" "}
                  This is required
                </p>
              )}
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
      )}
    </>
  );
}

export default Modal;
