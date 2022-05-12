import React from "react";
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Spinner from "../Sherad/Spinner";
import { Link } from "react-router-dom";


const LoginPage = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

if(loading){
    return <Spinner></Spinner>
}
if(error){
    console.log(error)
}
  const onSubmit = (data) => {
    console.log(data.email,data.password);
  };
  if(user){
      console.log(user)
  }
  return (
    <div className="flex justify-center h-screen items-center">
        <div class="card shadow-2xl w-4/12 ">
  <div class="card-body ">
   <h1 className="text-3xl font-bold text-center uppercase text-primary">login </h1>
  <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
         
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full max-w-lg "
          {...register("email", {
              required: {
                value: true,
                message: 'Email address is required'
              },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: 'Your email is valid .' // JS only: <p>error message</p> TS only support string
            }
          })}
          
        />
        <label className="label">
           
        {errors?.email?.type==='required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
        {errors?.email?.type==='pattern' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
        </label>


        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
         
          type="password"
          placeholder="Your Password"
          className="input input-bordered w-full max-w-lg "
          {...register("password", {
              required: {
                value: true,
                message: 'Password address is required'
              },
              minLength: {
              value: 6,
              message: 'Your password must be 6 charecter .' 
            }
          })}
          
        />
        <label className="label">
           
        {errors?.password?.type==='required' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
        {errors?.password?.type==='minLength' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
        </label>

    
        <input className="btn btn-accent text-center w-full" type="submit" />
      </form>

      <div class="divider">OR</div>
      <div class="flex justify-between mb-1">
          <p className="text-sm">Don't have an account? <Link to='/register' className="text-red-500 hover:underline">Register </Link></p>
          <button className="text-sm text-red-500 hover:underline">Reset Password</button>
      </div>
      <p></p>
      <button onClick={() =>signInWithGoogle()} className='w-full btn btn-outline btn-accent'>Continue with google</button>
  </div>
</div>

    </div>
  );
};

export default LoginPage;
