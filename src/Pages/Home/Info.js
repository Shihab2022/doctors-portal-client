import React from 'react';
import InfoDetails from './InfoDetails';
import clock  from './../../assets/icons/clock.svg'
import marker  from './../../assets/icons/marker.svg'
import phone  from './../../assets/icons/phone.svg'


const Info = () => {

  const infoData=[
    {id:1,img:`${clock}`,bgColor:'bg-gradient-to-r from-primary to-secondary',titel:'Opening Hours',about:'Lorem Ipsum is simply dummy text of the pri'},
    {id:2,img:`${marker}`,bgColor:'accent',titel:'Visit our location',about:'Brooklyn, NY 10036, United States'},
    {id:3,img:`${phone}`,bgColor:'bg-gradient-to-r from-primary to-secondary',titel:'Contact us now',about:'+000 123 456789'},
  ]  
    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 md:gap-10 gap-5 md:px-20">
            {
                infoData.map(data=><InfoDetails data={data} key={data.id}></InfoDetails>)
            }
        </div>
    );
};

export default Info;