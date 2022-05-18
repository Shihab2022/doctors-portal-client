import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';
const AvailableAppointments  = ({date}) => {
    const [services,setServices]=useState([])
    const [treatment,setTreatment]=useState(null)
    const formattedDate=format(date,'PP')
    useEffect(()=>{
       

        fetch(`http://localhost:5000/available?date=${formattedDate}`)
        // fetch('appointmentData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    // console.log(services)
    return (
        <div className="lg:py-10 lg:px-24">
            <h2 className="text-center text-primary font-bold text-xl">Available Appointments on   {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:my-20 my-8 lg:grid-cols-3 gap-8'>
                {
                    services.map((service)=><Service key={service._id} setTreatment={setTreatment} service={service}></Service>)
                }
            </div>
            {
                treatment && <BookingModal setTreatment={setTreatment} date={date} treatment={treatment}></BookingModal>
            }
            
        </div>
    );
};

export default AvailableAppointments ;