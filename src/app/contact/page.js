"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/contact.css"; // Import external CSS

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="text-center mb-4">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">Tell us what you need, and we'll help you get quotes</p>
      </div>

      <div className="row w-100">
        {/* Left Section: Contact Details with Map */}
        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
          <div className="card contact-card">
            <h3 className="fw-bold">Reach Us</h3>
            <p>
              Near Spring Green Apartments, K-313, Ayodhya Marg, Anora Kala, Chinhat,
              Lucknow-226028, Uttar Pradesh, India
            </p>

            {/* Google Maps Embed */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113860.2720583014!2d81.00166312761456!3d26.899257892644243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995f50e3ed172b%3A0xb7c2d4d7d1edf3d3!2sAnora%20Kala%2C%20Uttar%20Pradesh%20226028!5e0!3m2!1sen!2sin!4v1739566743136!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: "0", borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href="https://www.google.co.in/maps/dir//26.89925000,81.08431000"
              target="_blank"
              className="btn btn-primary mt-3"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Right Section: CEO + Customer Support */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          {/* CEO Details */}
          <div className="card contact-card mb-4">
            <h3 className="fw-bold">AUTO TEK (CEO)</h3>
            <p className="mb-1">
              <strong>View Mobile Number: <a href="#"> 9794800900</a></strong>
            </p>
            <p><strong>81% Call Response Rate</strong></p>
            <h2>&#128515;</h2>
          </div>

          {/* Customer Support (Now Below CEO) */}
          <div className="card contact-card">
            <h3 className="fw-bold">Customer Support</h3>
            <p><strong>Need Help? We're Here for You!</strong></p>
            <p>
              ✉️ Email: <strong><a href="mailto:support@autotek.com">support@autotek.com</a></strong>
            </p>
            <p>🕒 Service Hours: Monday - Saturday (9 AM - 7 PM)</p>
            <p>💬 Live Chat Available on Our Website</p>
          </div>
        </div>

        {/* Corporate Office */}
        <div className="col-12 mt-4">
          <div className="card contact-card text-center">
            <h3 className="fw-bold">Corporate Office</h3>
            <p>
              Near Spring Green Apartments, K-313, Ayodhya Marg, Anora Kala, 226028, Lucknow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
