import React from 'react';

const Service = ({service}) => {
    const {name,slots}=service;
    return (
        <div class="card  shadow-xl ">
        <div class="card-body items-center text-center">
          <h2 class="card-title text-secondary text-2xl">{name}</h2>
          <p>{slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another date.</span>}</p>
          <p className='my-1'>{slots.length} {slots.length >1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
          <div class="card-actions justify-end">
            <button disabled={slots.length===0} class="btn  btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
          
          </div>
        </div>
      </div>
    );
};

export default Service;