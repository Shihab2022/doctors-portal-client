// import { Input } from 'postcss';
import React from "react";
import { useForm } from "react-hook-form";
const LoginPage = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center">
        <div class="card shadow-2xl w-1/4  text-neutral-content">
  <div class="card-body ">
   
  <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          name="email"
          {...register("email", {
            pattern: {
              value: /[A-Za-z]{3}/,
              message: 'error message' // JS only: <p>error message</p> TS only support string
            }
          })}
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full "
        />
        <label className="label">
          <span className="label-text-alt">Alt label</span>
        </label>

        {errors?.email && "First name is required"}
        {/* <Input name="lastName" ref={register({ required: true })} />
      {errors.lastName && "Last name is required"} */}
        <input className="btn btn-accent text-center w-full" type="submit" />
      </form>
  </div>
</div>
    
    </div>
  );
};

export default LoginPage;
