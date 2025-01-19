import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function Services() {

      const navigate = useNavigate(); // Initialize useNavigate hook
    
      const handleClick = () => {
        navigate('/contact'); // Navigate to the Contact Us page
      };


      useEffect(() => {
          const reveal = () => {
            const reveals = document.querySelectorAll('.reveal');
            for (let i = 0; i < reveals.length; i++) {
              const windowHeight = window.innerHeight;
              const revealTop = reveals[i].getBoundingClientRect().top;
              const revealPoint = 150;
      
              if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
              } else {
                reveals[i].classList.remove('active');
              }
            }
          };
      
          window.addEventListener('scroll', reveal);
      
          return () => {
            window.removeEventListener('scroll', reveal); // Clean up the event listener
          };
        },[]);
    
  return (
  <>
   <section class="vehicles-section">
    <h1>All Vehicles Ready for Immediate Use</h1>
   
  
    <div class="vehicles-container ">
      <div class="vehicle-card ">
        <img src="assets/ertiga.png" alt="Ertiga"/>
        <h3>Ertiga</h3>
        <button onClick={handleClick}>Book Your Ride</button>
      </div>
      <div class="vehicle-card ">
        <img src="assets/innova.png" alt="Innova Crysta"/>
        <h3>Innova Crysta</h3>
        <button onClick={handleClick}>Book Your Ride</button>
      </div>
      <div class="vehicle-card ">
        <img src="assets/swift.png" alt="Swift Dzire"/>
        <h3>swift dzire</h3>
        <button onClick={handleClick}>Book Your Ride</button>
      </div>
      <div class="vehicle-card">
        <img src="assets/eco.png" alt="Eco"/>
        <h3>Eco</h3>
        <button onClick={handleClick}>Book Your Ride</button>
      </div>
    </div>

  
  </section>
  <div className='service-video-div reveal'>
    <video width="100%" loop autoPlay muted>
            <source src="assets/Green White Video Centric Travel YouTube Video Intro.mp4" type="video/mp4" />
          </video>

    </div>
   
   
    
    <h1 className="chooseus-h1 reveal">Why Choose Us?</h1>
<div className="why-process-img reveal">
  <div class="icon-container">
    <div class="icon-block">
      <div class="icon">
        <img src="assets/24hourservice.png" alt="24/7 Support" />
      </div>
      <p class="icon-text">24/7 Support</p>
    </div>
    
    <div class="line"></div>
    
    <div class="icon-block">
      <div class="icon">
        <img src="assets/amazingprice.png" alt="Affordable Price" />
      </div>
      <p class="icon-text">Affordable Price</p>
    </div>
    
    <div class="line"></div>
    
    <div class="icon-block">
      <div class="icon">
        <img src="assets/comfortableseat.png" alt="Comfortable Seat" />
      </div>
      <p class="icon-text">Comfortable Seat</p>
    </div>
  </div>
</div>

  </>
  )
}

export default Services
