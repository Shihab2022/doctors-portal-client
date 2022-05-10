import React from "react";

const TestimonialDetails = ({ data }) => {
  const { name, img, about, location } = data;
  return (
    <div>
      <div class="card max-w-lg p-8 bg-base-100 shadow-xl">
        <p class='py-5 text-accent font-semibold'>{about}</p>

        <div class="flex py-5 items-center">
          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="Shoes" />
          </div>
          <div class='ml-5 '>
            <h2 class="card-title">{name}</h2>
            <h2 class="card-title">{location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
