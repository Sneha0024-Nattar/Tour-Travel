import React from 'react';

function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-image-container">
          <img src="assets/contact (1).png" alt="Car on Road" />
        </div>
        <div className="contact-form-container">
          <form>
            <label htmlFor="contact-source-city">Source City:</label>
            <input type="text" id="contact-source-city" placeholder="Enter source city" />

            <label htmlFor="contact-destination-city">Destination City:</label>
            <input type="text" id="contact-destination-city" placeholder="Enter destination city" />

            <label htmlFor="contact-departure-date">Date of Departure:</label>
            <input type="date" id="contact-departure-date" />

            <label htmlFor="contact-departure-time">Time of Departure:</label>
            <input type="time" id="contact-departure-time" />

            <label htmlFor="contact-returning-to">Returning the Cab To:</label>
            <input type="text" id="contact-returning-to" placeholder="Enter return destination" />

            <label htmlFor="contact-end-date">Journey End Date:</label>
            <input type="date" id="contact-end-date" />

            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
