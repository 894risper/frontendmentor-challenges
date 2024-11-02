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
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input 
            type="text"
            placeholder='First Name'
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
            <p className='text-sm text-red-500'>
              {errors.fname.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lname">Last Name</label>
          <input 
            type="text"
            placeholder='Last Name'
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
            <p className='text-sm text-red-500'>
              {errors.lname.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            placeholder='Email'
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format, must contain @ symbol"
              }
            })}
          />
          {errors.email && (
            <p className='text-red-500'>
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label>Query Type</label>
          <div>
            <input 
              type="radio" 
              value="general" 
              {...register("query", { required: "Please select a question type" })}
            />
            <label htmlFor="general">General Question</label>
          </div>
          <div>
            <input 
              type="radio" 
              value="support" 
              {...register("query", { required: "Please select a question type" })}
            />
            <label htmlFor="support">Support Request</label>
          </div>
          {errors.query && (
            <p className="text-sm text-red-500">{errors.query.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="messages">Message</label>
          <input type="text" 
          {...register("messages",{
            required:"the message is required"
          })}
          />
          {errors.messages &&(
            <p className='text-red-500'>
              {errors.messages.message}
            </p>
          )}
        </div>

        <div>
          <input type="checkbox"
          id="conscent"
          {...register("conscent",{
            required:"your conscent is required"
          })}
          />
          <label htmlFor="conscent"> I conscent to being contacted by team</label>
          {errors.conscent &&(
            <p className='text-red-500'>
              {errors.conscent.message}
            </p>
          )}
        </div>

        <button  
          className="p-4 py-2 mt-4 text-white bg-blue-800 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contacts;
