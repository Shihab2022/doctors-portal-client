import React from 'react';

const Service = ({data}) => {
    const {img,titel,about}=data
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{titel}</h2>
          <p>{about}</p>
        </div>
      </div>
    );
};

export default Service;