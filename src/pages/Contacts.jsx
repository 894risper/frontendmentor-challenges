import React from 'react'
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

const Contacts = () => {
  const { register, handleSubmit, formState, reset } = useForm()

  const handleFormSubmit = (data) => {
    // Trigger notification on successful submission
    toast("Form submitted successfully!")
    reset() // Reset the form fields
  }

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
              minLength: {
                value: 3,
                message: "First name should be at least 3 characters"
              },
              required: "First name is required",
              pattern: {
                value: /^[a-zA-Z ]+$/,
                message: "First name should only contain letters"
              }
            })}
          />
          {formState.errors.fname && (
            <p className='text-sm text-red-500'>
              {formState.errors.fname.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            placeholder='Last Name'
            {...register("lname", {
              minLength: {
                value: 5,
                message: "Last name should be at least 5 characters"
              },
              required: "Last name is required",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Last name should only contain letters"
              }
            })}
          />
          {formState.errors.lname && (
            <p className='text-sm text-red-500'>
              {formState.errors.lname.message}
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
  )
}

export default Contacts
