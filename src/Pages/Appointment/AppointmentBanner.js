import React, { useState } from 'react';
import bg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'
import {DayPicker} from 'react-day-picker';

import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = () => {
    const [selectedDate,setSelectedDate]=useState(new Date())
    
    return (
        <>
       
        <div style={{backgroundImage: `url(${bg})`}} className="hero lg:min-h-screen ">
   <div className="hero-content flex-col lg:flex-row-reverse">
     <img src={chair} className="lg:max-w-lg lg:ml-20  rounded-lg shadow-2xl" alt="" />
     <div className="w-full">
   
     <DayPicker 
       mode="single"
       selected={selectedDate}
       onSelect={setSelectedDate}
     />
     <p>Your Seclected date : {format(selectedDate, 'PP')}</p>
     </div>

   </div>
 </div>
        </>
    );
};

export default AppointmentBanner;