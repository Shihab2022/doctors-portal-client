import React from 'react';
import bg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'
import {DayPicker} from 'react-day-picker';

import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date,setdate}) => {

    
    return (
        <>
       
        <div style={{backgroundImage: `url(${bg})`}} className="hero lg:min-h-screen ">
   <div className="hero-content flex-col lg:flex-row-reverse">
     <img src={chair} className="lg:max-w-lg lg:ml-20  rounded-lg shadow-2xl" alt="" />
     <div className="w-full">
   
     <DayPicker 
       mode="single"
       selected={date}
       onSelect={setdate}
     />

     </div>

   </div>
 </div>
        </>
    );
};

export default AppointmentBanner;