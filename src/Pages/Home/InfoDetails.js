import React from 'react';

const InfoDetails = ( {data}) => {
    const {img,bgColor,titel,about}=data
    return (
        <div class={`card lg:card-side bg-accent py-2 ${bgColor}`} >
  <figure>
      <img src={img} class='h-[86px] pl-5' alt="Album"/>

      </figure>
  <div class="card-body text-white">
    <h2 class="card-title">{titel}</h2>
    <p>{about}</p>
   
  </div>
</div>
    );
};

export default InfoDetails;