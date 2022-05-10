import React from 'react';

const CustomBtn = ({children}) => {
    return (<>
      <button class="btn border-0 w-32 my-2 font-bold text-white bg-gradient-to-r from-primary to-secondary">{children}</button>
    </>
      
    );
};

export default CustomBtn;