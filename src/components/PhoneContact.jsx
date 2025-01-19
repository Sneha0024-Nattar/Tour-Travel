import React from 'react'

function PhoneContact() {

   // Sanitize input function (to prevent malicious input)
   function sanitizeInput(input) {
     return encodeURIComponent(input.trim()); // Basic sanitization with encoding
   }

   function whatsapp(event) {
     event.preventDefault(); // Prevent form submission

     // Get input values and sanitize them
     var name = sanitizeInput(document.getElementById("contact-name").value);
     var sourcecity = sanitizeInput(document.getElementById("contact-source-city").value);
     var destinationcity = sanitizeInput(document.getElementById("contact-destination-city").value);
     var dateofdeparture = sanitizeInput(document.getElementById("contact-departure-date").value);
     var timeofdeparture = sanitizeInput(document.getElementById("contact-departure-time").value);
     var enddate = sanitizeInput(document.getElementById("contact-end-date").value);

     // Check if all fields are filled
     if (!name || !sourcecity || !destinationcity || !dateofdeparture || !timeofdeparture ) {
       alert("Please fill in all the fields before submitting.");
       return;
     }

     // Construct the WhatsApp URL
     var whatsappurl = "https://wa.me/8200740782?text="
     + "NAME: " + name + "%0a"

     + "SOURCECITY: " + sourcecity + "%0a"
     + "DESTINATION CITY: " + destinationcity + "%0a"
     + "DATE OF DEPARTURE: " + dateofdeparture + "%0a"
     + "TIME OF DEPARTURE: " + timeofdeparture + "%0a"
     + "END DATE: " + enddate + "%0a";

     // Open WhatsApp chat in a new tab
     window.open(whatsappurl, "_blank").focus();

     document.getElementById("contact-form").reset();
   }

  return (
    <>
    <div className="contact-container">
      <div className="contact-image-container">
        <img src="assets/contact (1).png" alt="Car on Road" />
      </div>
      <div className="contact-form-container">
        <form id="contact-form">
        <label htmlFor="contact-returning-to">Name:</label>
          <input
            type="text"
            id="contact-name"
            name="returnDestination"
            placeholder="Enter your Name"
            required
          />


          <label htmlFor="contact-source-city">Source City:</label>
          <input
            type="text"
            id="contact-source-city"
            name="sourceCity"
            placeholder="Enter source city"
            required
          />

          <label htmlFor="contact-destination-city">Destination City:</label>
          <input
            type="text"
            id="contact-destination-city"
            name="destinationCity"
            placeholder="Enter destination city"
            required
          />

          <label htmlFor="contact-departure-date">Date of Departure:</label>
          <input
            type="date"
            id="contact-departure-date"
            name="departureDate"
            required
          />

          <label htmlFor="contact-departure-time">Time of Departure:</label>
          <input
            type="time"
            id="contact-departure-time"
            name="departureTime"
            required
          />

        
          <label htmlFor="contact-end-date">Journey End Date:</label>
          <input
            type="date"
            id="contact-end-date"
            name="endDate"
            required
          />

          {/* Button triggers the whatsapp function */}
          <button type="submit" onClick={whatsapp}>SUBMIT</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default PhoneContact;
