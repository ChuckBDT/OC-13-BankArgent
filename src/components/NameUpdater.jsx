import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateUserDetailsMutation } from "../features/apiSlice";

function NameUpdater({ fName, lName }) {
  const [formShow, setFormShow] = useState(false);
  const [btnformShow, setBtnformShow] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [updateUserDetails] = useUpdateUserDetailsMutation();

  const toggleShow = () => {
    setBtnformShow(!btnformShow);
    setFormShow(!formShow);
    reset();
  };

  const updateUserHandler = (data) => {
    updateUserDetails(data);
    toggleShow();
  };

  return (
    <>
      {btnformShow && (
        <button onClick={() => toggleShow()} className='edit-button'>
          Edit Name
        </button>
      )}
      {formShow && (
        <form
          className='update-form'
          onSubmit={handleSubmit(updateUserHandler)}
        >
          <div className='update-form-fields'>
            <div className='input-wrapper'>
              <input
                type='text'
                placeholder={fName}
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
              <input
                type='text'
                placeholder={lName}
                {...register("lastName")}
                id='lastName'
              />
            </div>
          </div>
          <div className='update-form-btn'>
            <button type='submit' className='sign-in-button'>
              Save
            </button>
            <button
              type='button'
              onClick={() => {
                toggleShow();
              }}
              className='sign-in-button'
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default NameUpdater;
