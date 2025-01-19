import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [activeTab, setActiveTab] = useState('local');
  const navigate = useNavigate();

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

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
  }, []);

  return (
    <>
      <div className='home-main'>
        <div className='home-video-div'>
          <video width="100%" loop autoPlay muted>
            <source src="assets/get a car lets connect with me.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          {/* Tab buttons */}
          <section className="services reveal">
            <h1 data-text="Services">Services</h1>
            <div className="tabs">
              <button
                className={`tab-btn ${activeTab === 'local' ? 'active' : ''}`}
                onClick={() => handleTabClick('local')}
              >
                Local
              </button>
              <button
                className={`tab-btn ${activeTab === 'outstation' ? 'active' : ''}`}
                onClick={() => handleTabClick('outstation')}
              >
                Outstation
              </button>
              <button
                className={`tab-btn ${activeTab === 'airport' ? 'active' : ''}`}
                onClick={() => handleTabClick('airport')}
              >
                Airport
              </button>
            </div>

            <div className="tab-content reveal" style={{ 'width': "100%" }}>
              <div id="local" className={`tab-pane ${activeTab === 'local' ? 'active' : ''}`}>
                <div className="card reveal">
                  <img src="assets\car .png" alt="Car" className="car-image" />
                  <p>Daily Rental on hourly basis</p>
                  <button onClick={handleClick}>Book Your Ride</button>
                </div>

                <div className="card reveal">
                  <img src="assets\car .png" alt="Car" className="car-image" />
                  <p>Daily Rental on hourly basis</p>
                  <button onClick={handleClick}>Book Your Ride</button>
                </div>
              </div>
              <div id="outstation" className={`tab-pane ${activeTab === 'outstation' ? 'active' : ''}`}>
                <div className="card reveal">
                  <img src="assets/ONE WAY.png" alt="Car" className="car-image" />
                  <p>One-Way Trip</p>
                  <button onClick={handleClick}>Book Your Ride</button>
                </div>

                <div className="card reveal">
                  <img src="assets/TWO WAY (1).png" alt="Car" className="car-image" />
                  <p>Two-Way Trip</p>
                  <button onClick={handleClick}>Book Your Ride</button>
                </div>

                <div className="card reveal">
                  <img src="assets/MULTI DAY TRIP.png" alt="Car" className="car-image" />
                  <p>Multi-city multi-day trip</p>
                  <button onClick={handleClick}>Book Your Ride</button>
                </div>
              </div>
              <div id="airport" className={`tab-pane ${activeTab === 'airport' ? 'active' : ''}`}>
                <div className="card reveal">
                  <img src="assets/pickup.png" alt="Car" className="car-image" />
                  <p>Pick-Up From Airport</p>
                  <button onClick={handleClick}>Book Your Ride</button>
                </div>

                <div className="card reveal">
                  <img src="assets/dropoff.png" alt="Car" className="car-image" />
                  <p>Drop-Off To Airport</p>
                  <button onClick={handleClick}>Book Your Ride</button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className='why-choose reveal'>
          <div className='why-choose-para reveal'>
            <p>Why do customers choose us over the competition?</p>
          </div>

          <div className="why-container reveal">
            <div className="whycard safe-for-women womenimg reveal">
              <img src="assets/safeforwomen.png" alt="Safe for Women" />
            </div>

            <div className="whycard always-on-time timeimg reveal">
              <img src="assets/alwaysontime.png" alt="Always on Time" className="newtime" />
            </div>
            <div className="whycard drivers-professional professionalimg reveal">
              <img src="assets/professionaldriver.png" alt="Drivers are Professional" />
            </div>
            <div className="whycard competitive-rates rateimg reveal">
              <img src="assets/competitiverates.png" alt="Competitive Rates" />
            </div>
            <div className="whycard tailored-care seniorimg reveal">
              <img src="assets/seniortravelers.png" alt="Tailored Care for Senior Travelers" />
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default Home;
