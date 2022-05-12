import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots}=service;
    return (
        <div className="card  shadow-xl ">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary text-2xl">{name}</h2>
          <p>{slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another date.</span>}</p>
          <p className='my-1'>{slots.length} {slots.length >1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
          <div className="card-actions justify-end">
            <button ></button>
            <label for="booking-modal" onClick={() =>setTreatment(service)} disabled={slots.length===0} className="btn  btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary  ">Book Appointment</label>

          
          </div>
        </div>
      </div>
    );
};

export default Service;