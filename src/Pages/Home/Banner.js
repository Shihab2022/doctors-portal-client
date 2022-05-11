import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import CustomBtn from '../Sherad/CustomBtn';
const Banner = () => {
    return (
       <>
       
       <div style={{backgroundImage: `url(${bg})`}} className="hero lg:min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="lg:max-w-lg  rounded-lg shadow-2xl" alt="" />
    <div>
      <h1 className="text-3xl md:text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
     <CustomBtn>GET STARTED</CustomBtn>
    </div>
  </div>
</div>
       </>
    );
};

export default Banner;