import React from 'react';

const InfoDetails = ( {data}) => {
    const {img,bgColor,titel,about}=data
    return (
        <div className={`card lg:card-side bg-accent py-2 shadow-lg ${bgColor}`} >
  <figure className='md:pt-0 pt-3'>
      <img src={img} className='h-[86px] pl-5 ' alt="Album"/>

      </figure>
  <div className="card-body text-white">
    <h2 className="card-title">{titel}</h2>
    <p>{about}</p>
   
  </div>
</div>
    );
};

export default InfoDetails;