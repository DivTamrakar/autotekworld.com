"use client"; // ✅ Mark as a Client Component

import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Import Bootstrap CSS
import "@/styles/footer.css"; // ✅ Ensure this file exists
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="footer_bg text-dark mt-5">
      {/* Section: Social media */}
      <section className="d-flex justify-content-between p-3 text-white" style={{ backgroundColor: 'rgb(205 9 4)' }}>
        {/* Left */}
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Right */}
        <div>
          <a href="#" className="text-white me-3">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="text-white me-3">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-white me-3">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </section>
      {/* Section: Social media */}

      {/* Deals in HSN Code Section */}
      <div className="container mt-4 hsn-code-section">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <h2>Deals in HSN Code</h2>
            <table className="hsn-code-table">
              <thead>
                <tr>
                  <th>HSN Code</th>
                  <th>HSN Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>84281019</td>
                  <td>Other lifting, handling, loading or unloading machinery (for example, lifts, escalators, conveyors, teleferics) 8428 10 - lifts and skip hoists: lifts: other</td>
                </tr>
                <tr>
                  <td>84798950</td>
                  <td>Machines and mechanical appliances having individual functions, not specified or included elsewhere in this chapter - other machines and mechanical appliances: other: car washing machines and related appliances</td>
                </tr>
                <tr>
                  <td>84798999</td>
                  <td>Machines and mechanical appliances having individual functions, not specified or included elsewhere in this chapter - other machines and mechanical appliances: other: other : other</td>
                </tr>
                <tr>
                  <td>90311000</td>
                  <td>Measuring or checking instruments, appliances and machines, not specified or included elsewhere in this chapter; profile projectors machines for balancing mechanical parts</td>
                </tr>
                <tr>
                  <td>90318000</td>
                  <td>Measuring or checking instruments, appliances and machines, not specified or included elsewhere in this chapter; profile projectors other instruments, appliances and machines</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section: Links */}
      <section className="">
        <div className="container text-center text-md-start mt-4">
          <div className="row mt-2">
            {/* Company Info */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-3">
              <h6 className="text-uppercase fw-bold">Auto Tek</h6>
              <hr className="mb-3 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
              Auto Tek is Uttar Pradesh's leading supplier and service provider of high-quality automobile workshop equipment and tools. With a strong commitment to excellence and customer satisfaction, Auto Tek has established itself as a trusted name in the automotive industry.
              </p>
            </div>

            {/* Products */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr className="mb-3 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p><a href="products" className="text-dark">Tyre Changer</a></p>
              <p><a href="products" className="text-dark">Wheel Alignment Machine</a></p>
              <p><a href="products" className="text-dark">Wheel Balancer</a></p>
              <p><a href="products" className="text-dark">Two Post Lift</a></p>
            </div>

            {/* Useful Links */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-3">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr className="mb-3 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p><a href="/contact" className="text-dark">Contact Us</a></p>
              <p><a href="/about" className="text-dark">About Us</a></p>
              <p><a href="/products" className="text-dark">Products</a></p>
              <p><a href="/p_services" className="text-dark">Services</a></p>
              <p><a href="/auto-tek-PDF/auto-tek.pdf" className="text-dark" download>Download Brochure</a></p>
            </div>




            {/* Contact */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-3">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-3 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p><FontAwesomeIcon icon={faHome} className="me-2" /> Near Spring Green Apartments, K-313, Ayodhya Marg, Anora Kala, Chinhat, Lucknow-226028, Uttar Pradesh, India</p>
              <a href="https://www.google.co.in/maps/dir//26.89925000,81.08431000" target="_blank">Get Directions</a>
              <p><FontAwesomeIcon icon={faEnvelope} className="me-2" /> info@example.com</p>
              <p><FontAwesomeIcon icon={faPhone} className="me-2" /> +91 9794800900</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2025 Copyright:
        <a className="text-dark" href="#"> Auto Tek</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}