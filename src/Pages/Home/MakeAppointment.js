import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import CustomBtn from "../Sherad/CustomBtn";
const Appointment = () => {
  return (
    <div className='flex  justify-center py-10 lg:h-[500px] items-center lg:my-0 lg:mt-40 my-14' style={{background: `url(${appointment})`}}>
     
        <div className="lg:flex-1">
          <img src={doctor} className='mt-[-180px] hidden lg:block' alt="Album" />
        </div>
        <div className="lg:flex-1 px-10 text-white">
            <h1 className='text-xl text-primary font-bold'>Appointment</h1>
          <h2 className="card-title text-3xl md:text-4xl my-2 font-bold mb-2 ">
          Make an appointment Today
          </h2>
          <p className='mb-2'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>

          <CustomBtn>GET STARTED</CustomBtn>
        </div>
   
    </div>
  );
};

export default Appointment;
