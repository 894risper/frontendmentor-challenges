import React from 'react';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const notify = () => toast("Form submitted successfully");

const Contacts = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const handleFormSubmit = (data) => {
    notify();
    reset();
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="p-6 bg-white shadow-lg rounded-md max-w-lg w-full">
        <h1 className="font-bold text-lg">Contact Us</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex flex-row mb-2 space-x-1">
            <div className="flex-1">
              <label htmlFor="fname">First Name *</label>
              <input
                className="block mt-2 px-2 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-300"
                type="text"
                placeholder="First Name"
                {...register("fname", {
                  required: "First name is required",
                  minLength: {
                    value: 3,
                    message: "First name should be at least 3 characters"
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "First name should only contain letters"
                  }
                })}
              />
              {errors.fname && (
                <p className="text-sm text-red-500">
                  {errors.fname.message}
                </p>
              )}
            </div>

            <div className="flex-1">
              <label htmlFor="lname">Last Name *</label>
              <input
                className="block mt-2 px-2 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-300"
                type="text"
                placeholder="Last Name"
                {...register("lname", {
                  required: "Last name is required",
                  minLength: {
                    value: 5,
                    message: "Last name should be at least 5 characters"
                  },
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Last name should only contain letters"
                  }
                })}
              />
              {errors.lname && (
                <p className="text-sm text-red-500">
                  {errors.lname.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email">Email *</label>
            <input
              className="border px-2 py-2 w-full rounded-md mt-2 focus:outline-none focus:border-blue-300 border-gray-300"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format, must contain @ symbol"
                }
              })}
            />
            {errors.email && (
              <p className="text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mt-2">
            <label>Query Type *</label>
            <div className="flex flex-row space-x-1 mt-2">
              <div className="flex-1 border rounded-md px-2 py-2 border-gray-300">
                <input 
                  type="radio" 
                  value="general" 
                  {...register("query", { required: "Please select a question type" })}
                />
                <label htmlFor="general">General Question</label>
              </div>
              <div className="flex-1 border rounded-md px-2 py-2 border-gray-300">
                <input
                  type="radio" 
                  value="support" 
                  {...register("query", { required: "Please select a question type" })}
                />
                <label htmlFor="support">Support Request</label>
              </div>
            </div>
            {errors.query && (
              <p className="text-sm text-red-500">{errors.query.message}</p>
            )}
          </div> 

          <div className="mt-2 mb-2">
            <label htmlFor="messages">Message *</label>
            <input
              type="text"
              className="mt-2 border block focus:outline-none border-gray-300 rounded-md w-full h-20"
              {...register("messages", {
                required: "The message is required"
              })}
            />
            {errors.messages && (
              <p className="text-red-500">
                {errors.messages.message}
              </p>
            )}
          </div>

          <div className='mt-3 mb-3'>
            <input
              type="checkbox"
              id="conscent"
              {...register("conscent", {
                required: "Your consent is required"
              })}
            />
            <label htmlFor="conscent"> I consent to being contacted by the team *</label>
            {errors.conscent && (
              <p className="text-red-500">
                {errors.conscent.message}
              </p>
            )}
          </div>

          <button  
            className="p-4 py-2 mt-4 text-white bg-green-800 rounded-md w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
