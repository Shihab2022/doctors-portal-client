import React from 'react';
import footer from '../../assets/images/footer.png'
const Footer = () => {
    return (
        <div className=''>
            <footer style={{backgroundImage: `url(${footer})` ,backgroundSize:'cover'}}  class="  p-10 lg:pt-48 ">
                <div className='footer'>
  <div>
    <span class="footer-title">SERVICES</span> 
    <button class="link link-hover"> Emergency Checkup</button>
    <button class="link link-hover">Monthly Checkup</button>
    <button class="link link-hover">Weekly Checkup</button>
    <button class="link link-hover">Deep Checkup</button>
  </div> 
  <div>
    <span class="footer-title">ORAL HEALTH</span> 
    <button class="link link-hover">Fluoride Treatment</button>
    <button class="link link-hover">Cavity Filling</button>
    <button class="link link-hover">Teath Whitening</button> 
  </div> 
  <div>
    <span class="footer-title">OUR ADDRESS</span> 
    <button class="link link-hover">New York - 101010 Hudson</button>
  
  </div>
  </div>
  <div>
    <p class='text-center py-10'>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>

        </div>
    );
};

export default Footer;