import React from "react";
import TestimonialDetails from "./TestimonialDetails";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      img: people1,
      name: "Winson Herry",
      about:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
    {
      id: 2,
      img: people2,
      name: "Winson Herry",
      about:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
    {
      id: 3,
      img: people3,
      name: "Winson Herry",
      about:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center my-10">
        <div>
          <h1 className="text-xl font-bold text-primary">Testimonial</h1>
          <p className="text-2xl lg:text-4xl">What Our Patients Says</p>
        </div>
        <img src={quote} className="w-32 lg:w-44" alt="" />
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 mb-5 gap-5">
        {testimonialData.map((data) => (
          <TestimonialDetails keys={data.id} data={data}></TestimonialDetails>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
