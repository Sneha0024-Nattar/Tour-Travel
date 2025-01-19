import React, { useEffect } from 'react';

const NewContact = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    if (window.emailjs) {
      window.emailjs.init("sPf856y6FZMvqqz1r"); // Replace with your actual public key
    }

    const form = document.getElementById('contact-form');
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent default form submission

      // Send the form using emailjs.sendForm() method
      window.emailjs.sendForm('service_fcdnkbd', 'template_ukglmzl', form)
        .then((response) => {
          console.log('SUCCESS!', response);
          alert('Email sent successfully!');
        })
        .catch((error) => {
          console.log('FAILED...', error);
          alert('Failed to send email. Error: ' + JSON.stringify(error));
          console.error('Error details:', error);
        });
    };

    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, []); // Empty array to ensure this effect runs only once on mount

  return (
    <div className="contact-container">
      <div className="contact-image-container">
        <img src="assets/contact (1).png" alt="Car on Road" />
      </div>
      <div className="contact-form-container">
        <form id="contact-form">
          <label htmlFor="contact-source-city">Source City:</label>
          <input
            type="text"
            id="contact-source-city"
            name="sourceCity"  // Ensure this name matches the template variable
            placeholder="Enter source city"
            required
          />

          <label htmlFor="contact-destination-city">Destination City:</label>
          <input
            type="text"
            id="contact-destination-city"
            name="destinationCity"  // Ensure this name matches the template variable
            placeholder="Enter destination city"
            required
          />

          <label htmlFor="contact-departure-date">Date of Departure:</label>
          <input
            type="date"
            id="contact-departure-date"
            name="departureDate"  // Ensure this name matches the template variable
            required
          />

          <label htmlFor="contact-departure-time">Time of Departure:</label>
          <input
            type="time"
            id="contact-departure-time"
            name="departureTime"  // Ensure this name matches the template variable
            required
          />

          <label htmlFor="contact-returning-to">Returning the Cab To:</label>
          <input
            type="text"
            id="contact-returning-to"
            name="returnDestination"  // Ensure this name matches the template variable
            placeholder="Enter return destination"
            required
          />

          <label htmlFor="contact-end-date">Journey End Date:</label>
          <input
            type="date"
            id="contact-end-date"
            name="endDate"  // Ensure this name matches the template variable
            required
          />

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default NewContact;
