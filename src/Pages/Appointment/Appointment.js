import React, { useState } from 'react';
import Footer from '../Sherad/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments ';

const Appointment = () => {
    const [date,setdate]=useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setdate={setdate}></AppointmentBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;