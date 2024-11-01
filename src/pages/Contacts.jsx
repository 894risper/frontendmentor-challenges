import React from 'react'
import {useForm} from "react-hook-form"



const Contacts = () => {
  const {register,handleSubmit, formState,reset}=useForm()
  const handleFormSubmit=(data)=>{
   

    reset()
  }
  return (
    <div>
      <h1>Contact Us</h1>
<form onSubmit={handleSubmit(handleFormSubmit)}>
  <div>
    <label htmlFor="fname">First Name</label>
    <input type="text"
    placeholder='firstName'
    {...register("fname",{
      minLength:{
        value:3,
      message:"fname should be at least 3 characters ",
    },
    required: "tittleis required",
pattern:{
  value: /^[a-zA-Z ]+$/,
  message: "Title should only contain letters", 
}
    })}
    />
    {formState.errors.fname &&(
      <p className='text-sm text-red-500'>
        {formState.errors.fname.message}
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