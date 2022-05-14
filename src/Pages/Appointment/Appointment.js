import React, { useState } from 'react';
import Footer from '../Sherad/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments ';

const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date())
    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
            <AvailableAppointments selectedDate={selectedDate}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;