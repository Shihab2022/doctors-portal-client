import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Spinner from "../Sherad/Spinner";



    /**
     * 3 ways to store images
     * 1. Third party storage //Free open public storage is ok for Practice project 
     * 2. Your own storage in your own server (file system)
     * 3. Database: Mongodb 
     * 
     * YUP: to validate file: Search: Yup file validation for react hook form
    */
const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  const imgStorageKey = "d92a7867dc5f803eaff37ac866069fb5";

  const onSubmit = async (data) => {
    const image = data.image[0]; //get img from input field by react form data
    const formData = new FormData(); //make form data for upload img
    formData.append("image", image); //add img in from data
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`; //make url by imgStorageKey

    fetch(url, {
      method: "POST",
      body: formData, //add form data in body //// Here you cannot transfer data form in d=stringify
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url; //when photo uplodad then get img url
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: img,
          };

          // send data on database

          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully .");
                reset();
              } else {
                toast.error("Doctors is not added . ");
                reset();
              }
          
            });
        }
      });
  };
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <p>ADD NEW DOCTOR HERE .</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full  max-w-lg"
          {...register("name", {
            required: {
              value: true,
              message: "Name is required",
            },
            minLength: {
              value: 3,
              message: "Your name must be 3 charecter .",
            },
          })}
        />
        <label className="label">
          {errors?.name?.type === "required" && (
            <span className="text-red-500 label-text-alt">
              {errors.name.message}
            </span>
          )}
          {errors?.name?.type === "minLength" && (
            <span className="text-red-500 label-text-alt">
              {errors.name.message}
            </span>
          )}
        </label>

        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full  max-w-lg"
          {...register("email", {
            required: {
              value: true,
              message: "Email address is required",
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: "Your email is valid .",
            },
          })}
        />
        <label className="label">
          {errors?.email?.type === "required" && (
            <span className="text-red-500 label-text-alt">
              {errors.email.message}
            </span>
          )}
          {errors?.email?.type === "pattern" && (
            <span className="text-red-500 label-text-alt">
              {errors.email.message}
            </span>
          )}
        </label>

        <label className="label">
          <span className="label-text">Specialty</span>
        </label>
        <select
          {...register("specialty")}
          class="select  input-bordered w-full  max-w-lg"
        >
          {services?.map((service) => (
            <option key={service._id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>

        <label className="label">
          <span className="label-text">Image</span>
        </label>
        <input
          type="file"
          placeholder="Your Image"
          className="input input-bordered w-full  max-w-lg"
          {...register("image", {
            required: {
              value: true,
              message: "Image is required",
            },
          })}
        />
        <label className="label">
          {errors?.name?.type === "required" && (
            <span className="text-red-500 label-text-alt">
              {errors.name.message}
            </span>
          )}
          {errors?.name?.type === "minLength" && (
            <span className="text-red-500 label-text-alt">
              {errors.name.message}
            </span>
          )}
        </label>

        <br />

        <input
          className="btn btn-accent text-center w-full max-w-lg"
          type="submit"
          value="Add Doctors"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
