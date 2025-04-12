"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../styles/home.css";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    const handleScroll = () => {
      const elements = document.querySelectorAll(".business-info .col-md-4, .business-essentials, .more-tools .col-md-2, .more-tool-selection-head");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add("in-view");
        } else {
          element.classList.remove("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getEmbedUrl = (url) => {
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  };

  const openPopup = (url) => {
    setVideoUrl(getEmbedUrl(url));
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setVideoUrl("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, mobile, city });
    closePopup();
  };

  return (
    <div className="home-page min-w-md">
      {/* Carousel Section */}
      <div id="carouselExampleCaptions" className="carousel slide carousel-container" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/home_img/1.jpg" className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption">
              <h5>WELCOME TO AUTOTAK</h5>
              <p>Serving Uttar Pradesh with top-quality solutions since 2015..</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/home_img/2.jpg" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption">
              <h5>"Over 3000+ Equipment Sold"</h5>
              <p>Delivering excellence with world-leading brands and reliable service.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/home_img/3.jpg" className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption">
              <h5>Local Support You Can Count On</h5>
              <p>Resident engineers across Lucknow, Prayagraj, Varanasi, and Gorakhpur.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/home_img/4.jpg" className="d-block w-100" alt="Slide 4" />
            <div className="carousel-caption">
              <h5>Enhance Your Workshop's Productivity with Auto Tek</h5>
              <p>Some representative placeholder content for the fourth slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* More Tool Selection head */}
      <div className="text-center mt-5 more-tool-selection-head">
        <h1 className="text-3xl font-bold"> MORE TOOL SELECTION</h1>
      </div>

      {/* More Tool Selection */}
      <div className="container mt-5 more-tools">
        <div className="row mt-4">
          <div className="col-md-2">
            <div className="card text-center">
              <img 
                src="/images_products/John_Bean_B600L_Wheel_Balancer_20.jpg" 
                className="card-img-top" 
                alt="John Bean B600L Wheel Balancer" 
              />
              <div className="card-body">
                <h5 className="card-title">John Bean B600L Wheel Balancer</h5>
                {/* Read More Link to Product Page */}
                <Link href="/products" className="btn btn-link read-more-btn">
                  Read More
                </Link>
                {/* Centered Enquiry Button & WhatsApp Icon with Space */}
                <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                  {/* WhatsApp Icon */}
                  <a href="https://wa.me/+919794800900" className="whatsapp" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
                  </a>
                  {/* Enquiry Button */}
                  <a onClick={() => setPopupVisible(true)} className="btn btn-primary d-flex align-items-center px-2 py-1">
                    <FontAwesomeIcon icon={faEnvelope} size="sm" className="me-1" />
                    <span className="small">Enquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
          <div className="card text-center">
            <img 
              src="/images_products/John-Bean-GOLD-2-Wheel-Alignment-Machine.jpg" 
              className="card-img-top" 
              alt="John Bean GOLD 2 Wheel Alignment Machine" 
            />
            <div className="card-body">
              <h5 className="card-title">John Bean GOLD 2 Wheel Alignment</h5>
              {/* Read More Link to Product Page */}
              <Link href="/products" className="btn btn-link read-more-btn">
                Read More
              </Link>
              {/* Centered Enquiry Button & WhatsApp Icon with Space */}
              <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                {/* WhatsApp Icon */}
                <a href="https://wa.me/+919794800900" className="whatsapp" target="_blank">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
                </a>
                {/* Enquiry Button */}
                <a onClick={() => setPopupVisible(true)} className="btn btn-primary d-flex align-items-center px-2 py-1">
                  <FontAwesomeIcon icon={faEnvelope} size="sm" className="me-1" />
                  <span className="small">Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="card text-center">
            <img 
              src="/images_products/John Bean V2100 Wheel Aligner.jpg" 
              className="card-img-top" 
              alt="John Bean V2100 Wheel Aligner" 
            />
            <div className="card-body">
              <h5 className="card-title">John Bean V2100 Wheel Aligner</h5>
              {/* Read More Link to Product Page */}
              <Link href="/products" className="btn btn-link read-more-btn">
                Read More
              </Link>
              {/* Centered Enquiry Button & WhatsApp Icon with Space */}
              <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                {/* WhatsApp Icon */}
                <a href="https://wa.me/+919794800900" className="whatsapp" target="_blank">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
                </a>
                {/* Enquiry Button */}
                <a onClick={() => setPopupVisible(true)} className="btn btn-primary d-flex align-items-center px-2 py-1">
                  <FontAwesomeIcon icon={faEnvelope} size="sm" className="me-1" />
                  <span className="small">Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="card text-center">
            <img 
              src="/images_products/John_Bean_B100_Wheel_Balancer_4.jpg" 
              className="card-img-top" 
              alt="John Bean B100 Wheel Balancer" 
            />
            <div className="card-body">
              <h5 className="card-title">John Bean B100 Wheel Balancer</h5>
              {/* Read More Link to Product Page */}
              <Link href="/products" className="btn btn-link read-more-btn">
                Read More
              </Link>
              {/* Centered Enquiry Button & WhatsApp Icon with Space */}
              <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                {/* WhatsApp Icon */}
                <a href="https://wa.me/+919794800900" className="whatsapp" target="_blank">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
                </a>
                {/* Enquiry Button */}
                <a onClick={() => setPopupVisible(true)} className="btn btn-primary d-flex align-items-center px-2 py-1">
                  <FontAwesomeIcon icon={faEnvelope} size="sm" className="me-1" />
                  <span className="small">Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="card text-center">
            <img 
              src="/images_products/John_Bean_3D_Wheel_Aligner.jpg" 
              className="card-img-top" 
              alt="John Bean 3D Wheel Aligner" 
            />
            <div className="card-body">
              <h5 className="card-title">John Bean 3D Wheel Aligner</h5>
              {/* Read More Link to Product Page */}
              <Link href="/products" className="read-more-btn">
                Read More
              </Link>
              {/* Centered Enquiry Button & WhatsApp Icon with Space */}
              <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                {/* WhatsApp Icon */}
                <a href="https://wa.me/+919794800900" className="whatsapp" target="_blank">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
                </a>
                {/* Enquiry Button */}
                <a onClick={() => setPopupVisible(true)} className="btn btn-primary d-flex align-items-center px-2 py-1">
                  <FontAwesomeIcon icon={faEnvelope} size="sm" className="me-1" />
                  <span className="small">Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="card text-center">
            <img 
              src="/images_products/Dent_Puller_(4).jpg" 
              className="card-img-top" 
              alt="Dent Puller Machine" 
            />
            <div className="card-body">
              <h5 className="card-title">Dent Puller Machine</h5>
              {/* Read More Link to Product Page */}
              <Link href="/products" className="btn btn-link read-more-btn">
                Read More
              </Link>
              {/* Centered Enquiry Button & WhatsApp Icon with Space */}
              <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                {/* WhatsApp Icon */}
                <a href="https://wa.me/+919794800900" className="whatsapp" target="_blank">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
                </a>
                {/* Enquiry Button */}
                <a onClick={() => setPopupVisible(true)} className="btn btn-primary d-flex align-items-center px-2 py-1">
                  <FontAwesomeIcon icon={faEnvelope} size="sm" className="me-1" />
                  <span className="small">Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          {/* New Product 1 */}
          <div className="col-md-2">
            <div className="card text-center">
              <img 
                src="/images_products/Vacuum-Cleaner.jpg" 
                className="card-img-top" 
                alt="Vacuum Cleaner" 
              />
              <div className="card-body">
                <h5 className="card-title">Vacuum Cleaner</h5>
                {/* Read More Link to Product Page */}
                <Link href="/products" className="btn btn-link read-more-btn">
                  Read More
                </Link>
                {/* Centered Enquiry Button & WhatsApp Icon with Space */}
                <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                  {/* WhatsApp Icon */}
                  <a href="https://wa.me/+919794800900" className="whatsapp" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
                  </a>
                  {/* Enquiry Button */}
                  <a onClick={() => setPopupVisible(true)} className="btn btn-primary d-flex align-items-center px-2 py-1">
                    <FontAwesomeIcon icon={faEnvelope} size="sm" className="me-1" />
                    <span className="small">Enquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* New Product 2 */}
          <div className="col-md-2">
            <div className="card text-center">
              <img 
                src="/images_products/Stanley-6-Drawer-Roller-Cabinet-(8).jpg" 
                className="card-img-top" 
                alt="Stanley 6 Drawer Roller Cabinet" 
              />
              <div className="card-body">
                <h5 className="card-title">Stanley 6 Drawer Roller Cabinet</h5>
                {/* Read More Link to Product Page */}
                <Link href="/products" className="btn btn-link read-more-btn">
                  Read More
                </Link>
                {/* Centered Enquiry Button & WhatsApp Icon with Space */}
                <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                  {/* WhatsApp Icon */}
                  <a href="https://wa.me/+919794800900" className="whatsapp" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
                  </a>
                  {/* Enquiry Button */}
                  <a onClick={() => setPopupVisible(true)} className="btn btn-primary d-flex align-items-center px-2 py-1">
                    <FontAwesomeIcon icon={faEnvelope} size="sm" className="me-1" />
                    <span className="small">Enquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* New Product 3 */}
          <div className="col-md-2">
            <div className="card text-center">
              <img 
                src="/images_products/MIG_Welding_Machine.webp" 
                className="card-img-top" 
                alt="MIG Welding Machine" 
              />
              <div className="card-body">
                <h5 className="card-title">MIG Welding Machine</h5>
                {/* Read More Link to Product Page */}
                <Link href="/products" className="btn btn-link read-more-btn">
                  Read More
                </Link>
                {/* Centered Enquiry Button & WhatsApp Icon with Space */}
                <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                  {/* WhatsApp Icon */}
                  <a href="https://wa.me/+919794800900" className="whatsapp" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
                  </a>
                  {/* Enquiry Button */}
                  <a onClick={() => setPopupVisible(true)} className="btn btn-primary d-flex align-items-center px-2 py-1">
                    <FontAwesomeIcon icon={faEnvelope} size="sm" className="me-1" />
                    <span className="small">Enquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* New Product 4 */}
          <div className="col-md-2">
            <div className="card text-center">
              <img 
                src="/images_products/10mm-Stanley-VSR-Drill_(1).jpg" 
                className="card-img-top" 
                alt="10mm Stanley VSR Drill" 
              />
              <div className="card-body">
                <h5 className="card-title">10mm Stanley VSR Drill</h5>
                {/* Read More Link to Product Page */}
                <Link href="/products" className="btn btn-link read-more-btn">
                  Read More
                </Link>
                {/* Centered Enquiry Button & WhatsApp Icon with Space */}
                <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                  {/* WhatsApp Button */}
                  <a href="https://wa.me/+919794800900" className="whatsapp" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
                  </a>
                  {/* Enquiry Button */}
                  <a onClick={() => setPopupVisible(true)} className="btn btn-primary d-flex align-items-center px-2 py-1">
                    <FontAwesomeIcon icon={faEnvelope} size="sm" className="me-1" />
                    <span className="small">Enquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

      </div>

      </div>
          
      </div>
      {/* Enquiry Popup */}
      {popupVisible && (
        <div className="enquiry-popup-overlay" onClick={closePopup}>
          <div className="enquiry-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close" onClick={closePopup} aria-label="Close"></button>
            <h2>Enquiry</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">Your City</label>
                <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* all products button */}
      <div className="col-12 text-center mt-4">
          <Link href="/products" className="btn btn-primary see-all-products-button">
              See All Products
          </Link>
      </div>

      {/* Product Video Section */}
      <section className="text-center mt-5 product-video-section">
      <h1 className="text-3xl font-bold mb-4">Product Video</h1>
      <div className="container">
        <div className="row justify-content-center">
          {["5TztBf_MEGc", "2vMxkvXsY-E"].map((videoId, index) => (
            <div className="col-md-5" key={index}>
              <div className="card video-card">
                <a href={`https://youtu.be/${videoId}`} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                    className="card-img-top"
                    alt={`Product Video ${index + 1}`}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Business Essentials */}
      <div className="text-center mt-5 business-essentials">
        <h1 className="text-3xl font-bold">Business Essentials</h1>
      </div>

      {/* Business Information Section */}
      <div className="container mt-5 business-info">
        <div className="row text-center">
          <div className="col-md-4">
            <h5>Nature of Business</h5>
            <p>Service Provider and Others</p>
            <img src="/images_logo/money-bag.gif" alt="Money Bag Logo" />
          </div>
          <div className="col-md-4">
            <h5>Legal Status of Firm</h5>
            <p>Partnership</p>
            <img src="/images_logo/Partnership.gif" alt="Partnership" />
          </div>
          <div className="col-md-4">
            <h5>Annual Turnover</h5>
            <p>1.5 - 5 Cr</p>
            <img src="/images_logo/Annual-Turnover.gif" alt="Annual-Turnover" />
          </div>
        </div>
        <div className="row text-center mt-4">
          <div className="col-md-4">
            <h5>GST Registration Date</h5>
            <p>01-07-2017</p>
            <img src="/images_logo/GST-Registration-Date.gif" alt="GST-Registration-Date" />
          </div>
          <div className="col-md-4">
            <h5>Total Number of Employees</h5>
            <p>Up to 10 People</p>
            <img src="/images_logo/Total-Number-of-Employees.gif" alt="Total-Number-of-Employees" />
          </div>
          <div className="col-md-4">
            <h5>GST Number</h5>
            <p>09ABEFA2524Q1Z6</p>
            <img src="/images_logo/GST-Number.png" alt="GST-Number" className="gst-icon" />
          </div>
        </div>
        <div className="row text-center mt-4">
          <a href="https://trustseal.indiamart.com/members/autotekgorakhpur" target="_blank" rel="noopener noreferrer" className="col-md-12">
            <h5>IndiaMART Certification</h5>
            <p>Trust Seal Verified</p>
            <img src="/images_logo/indiamart.png" alt="IndiaMART" />
          </a>
        </div>
      </div>
    </div>

  )
};
