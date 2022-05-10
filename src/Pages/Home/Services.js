import React from "react";
import Service from "./Service";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import CustomBtn from "../Sherad/CustomBtn";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      img: fluoride,
      titel: "Fluoride Treatment",
      about:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      img: cavity,
      titel: "Cavity Filling",
      about:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      img: whitening,
      titel: "Teeth Whitening",
      about:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <>
      <div class="text-center md:py-20 py-8">
        <p class="text-xl font-bold text-primary">OUR SERVICES</p>
        <h2 class="text-4xl ">Services We Provide</h2>
      </div>
      <div class="grid md:grid-cols-3 grid-cols-1 justify-center items-center px-7 gap-5">
        {servicesData.map((data) => (
          <Service data={data} key={data.id}></Service>
        ))}
      </div>

      <div>

      <div class="card lg:card-side bg-base-100 md:py-20  py-8 md:px-40 ">
  <figure >
      <img src={treatment} class='h-[500px] w-[400px]'  alt="Album"/>
      </figure>
  <div class="card-body lg:pt-36 lg:pl-24">
    <h2 class="card-title text-3xl md:text-5xl font-bold mb-2 text-accent">Exceptional Dental Care, on Your Terms</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
  
    <CustomBtn>GET STARTED</CustomBtn>
  </div>
</div>
      </div>
    </>
  );
};

export default Services;
