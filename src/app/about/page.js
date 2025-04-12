import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap CSS
import "../../styles/about.css"; // ✅ Custom CSS

export default function AboutPage() {
  return (
    <div className="container about-page mt-5">
      {/* Heading */}
      <h2 className="text-center text-primary mb-4">About Auto Tek</h2>

      {/* Company Overview */}
      <div className="row mb-5">
        <div className="col-lg-6">
          <div className="about-section p-4">
            <h4 className="text-danger">Who We Are</h4>
            <p>
              <strong>"Auto Tek”</strong> is UP's leading Automobile Workshop Equipment and Tools supplier & service provider.  
              We offer a wide range of high-quality products, including:
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">✔ Wheel Alignment Machine</li>
              <li className="list-group-item">✔ Alignment Lift</li>
              <li className="list-group-item">✔ Tyre Changer</li>
              <li className="list-group-item">✔ Wheel Balancer</li>
              <li className="list-group-item">✔ Two Post Lift</li>
              <li className="list-group-item">✔ Dent Puller, Mig Welder, Paint Booth</li>
              <li className="list-group-item">✔ Washing Setup, Tools & More</li>
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img
            src="/About_img/about_1.jpg"
            alt="Auto Tek Workshop"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Key Highlights with Icons */}
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card text-center p-3 shadow">
            <h3 className="text-danger">🚗 Since 2015</h3>
            <p>Providing high-quality equipment for over 9 years.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-3 shadow">
            <h3 className="text-success">🔧 3000+ Equipments Sold</h3>
            <p>Ensuring the best solutions for customers.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-3 shadow">
            <h3 className="text-primary">💼 2300+ Satisfied Customers</h3>
            <p>We build trust with top-class service.</p>
          </div>
        </div>
      </div>

      {/* Infrastructure Section */}
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="about-section p-4">
            <h4 className="text-success">📍 Resident Engineers</h4>
            <p>We have local engineers at:</p>
            <ul>
              <li>Lucknow</li>
              <li>Prayagraj</li>
              <li>Varanasi</li>
              <li>Gorakhpur</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-section p-4 ">
            <h4 className="text-success">📦 Local Spare Stock</h4>
            <p>
              Stock available worth <strong>₹20,00,000+</strong> at Lucknow.
            </p>
          </div>
        </div>
      </div>

      {/* Distribution Brands */}
      <div className="about-section p-4 mb-5">
        <h4 className="text-danger">🏆 Distribution of World Leading Brands</h4>
        <p>
          We distribute brands like <strong>JOHNBEAN, BLUEPOINT, STANLEY, DEWALT, PCL-SUMO, DYNABRED, SATA, PENTA, AUTONICS.</strong>
        </p>
      </div>

      {/* Office Details */}
      <div className="about-section p-4 mb-5">
        <h4 className="text-primary">📍 Main Office & Warehouse</h4>
        <p>
          <strong>K-313, Anorakala, Near Spring Green Apartments, Ayodhya Marg, Lucknow-226028, UP, India</strong>
        </p>
      </div>

      {/* Company Information */}
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="about-section p-4">
            <h5 className="text-info">📜 Basic Information</h5>
            <p><strong>Nature of Business:</strong> Service Provider & Others</p>
            <p><strong>Additional Business:</strong> Retail, Wholesale, Service Provision</p>
            <p><strong>Company CEO:</strong> Digvijay Verma</p>
            <p><strong>Registered Address:</strong> Plot No. 12/469, Deva Road, Shiv Nagar Colony, Lucknow-227105, UP, India</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="about-section p-4">
            <h5 className="text-info">📊 Statutory Profile</h5>
            <p><strong>GST Registration Date:</strong> 01-07-2017</p>
            <p><strong>Legal Status:</strong> Partnership</p>
            <p><strong>Annual Turnover:</strong> ₹1.5 - 5 Cr</p>
            <p><strong>Banker:</strong> Union Bank Of India</p>
            <p><strong>GST No.:</strong> 09ABEFA2524Q1Z6</p>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      {/* Company Album Section */}
      <div className="company-album hidden">
        <h4 className="text-center">📸 Company Album</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <img src="/About_img/about_1.jpg" className="card-img-top" alt="About Us" />
              <div className="card-body text-center">
                <h5 className="card-title">About Us</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-lg">
              <img src="/About_img/about_2(photo).webp" className="card-img-top" alt="Infrastructure" />
              <div className="card-body text-center">
                <h5 className="card-title">Infrastructure</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
