import React from 'react';
import footer from '../../assets/images/footer.png'
const Footer = () => {
    return (
        <div className=''>
            <footer style={{backgroundImage: `url(${footer})` ,backgroundSize:'cover'}}  className="  p-10 lg:pt-48 ">
                <div className='footer'>
  <div>
    <span className="footer-title">SERVICES</span> 
    <button className="link link-hover"> Emergency Checkup</button>
    <button className="link link-hover">Monthly Checkup</button>
    <button className="link link-hover">Weekly Checkup</button>
    <button className="link link-hover">Deep Checkup</button>
  </div> 
  <div>
    <span className="footer-title">ORAL HEALTH</span> 
    <button className="link link-hover">Fluoride Treatment</button>
    <button className="link link-hover">Cavity Filling</button>
    <button className="link link-hover">Teath Whitening</button> 
  </div> 
  <div>
    <span className="footer-title">OUR ADDRESS</span> 
    <button className="link link-hover">New York - 101010 Hudson</button>
  
  </div>
  </div>
  <div>
    <p className='text-center py-10'>Copyright © 2022 - All right reserved by SHIHAB</p>
  </div>
</footer>

        </div>
    );
};

export default Footer;