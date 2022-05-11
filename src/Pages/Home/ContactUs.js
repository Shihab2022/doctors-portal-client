import React from 'react';
import appointment from '../../assets/images/appointment.png'
import CustomBtn from '../Sherad/CustomBtn';
const ContactUs = () => {
    return (
        <div style={{backgroundImage:`url(${appointment})`}} className="lg:my-14 py-8 lg:py-24 flex justify-center items-center">
            

<div>
    <input type="email" className='border-2 border-gray-600 py-3 pr-52 pl-5 rounded-md' name="email" placeholder=" Email Address" id="" /> <br />
    <input type="text" className='border-2 border-gray-600 py-3 pr-52 pl-5 my-5 rounded-md' name="email" placeholder="Subject" id="" /><br />
    <textarea name="" id="" cols="30" placeholder='Your message' className='border-2 border-gray-600 pr-40 pl-5 pt-3 rounded-md'rows="5"></textarea> <br />
    <div className='flex justify-center'>
    <CustomBtn>SUBMIT</CustomBtn>
    </div>
    
</div>
        </div>
    );
};

export default ContactUs;