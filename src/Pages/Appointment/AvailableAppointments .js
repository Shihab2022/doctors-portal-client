import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
const AvailableAppointments  = ({selectedDate}) => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('appointmentData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    // console.log(services)
    return (
        <div className="lg:py-10 lg:px-24">
            <h2 className="text-center text-primary font-bold text-xl">Available Appointments on   {format(selectedDate, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:my-20 my-8 lg:grid-cols-3 gap-8'>
                {
                    services.map((service)=><Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments ;