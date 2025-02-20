import React from 'react'
import { useForm } from "react-hook-form";



const Settings = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    // const onSubmit = (data) => console.log(data);


  return (
    <div>
        <h1>Settings</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: "İsim gerekli!" })} />
      {errors.name && <p>{errors.name.message}</p>}

      <input type="email" {...register("email", { required: "Email gerekli!" })} />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Gönder</button>
    </form>
    </div>
  )
}

export default Settings