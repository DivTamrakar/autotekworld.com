"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/p_services.css";
import { useEffect, useState } from "react";

export default function PServices() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 300);
    }, []);

    return (
        <div className={`container p-services-container ${isVisible ? "fade-in" : ""}`}>
            <h1 className={`p-services-text-center ${isVisible ? "popup-heading fade-in" : ""}`}> Our Services </h1>
            
            {/* Annual Maintenance Contract (AMC) Section */}
            <section className="p-services-section">
                <div className="row justify-content-center">
                    <div className="col-md-10 mb-4">
                        <div className={`card p-services-card ${isVisible ? "popup-effect" : ""}`}>
                            <img src="/about_img/amc_service.jpg" className="card-img-top p-services-card-img-top" alt="AMC Service" />
                            <div className="card-body">
                                <h2 className="card-title p-services-card-title">Annual Maintenance Contract (AMC)</h2>
                                <p className="card-text p-services-card-text">
                                    Our Annual Maintenance Contract (AMC) services are designed to provide businesses with peace of mind by ensuring their equipment functions optimally with minimal downtime. Regular maintenance helps in preventing unexpected failures, extending the lifespan of machines, and improving overall productivity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Our AMC Plans Section */}
            <section className="p-services-section">
                <div className="row justify-content-center">
                    <div className="col-md-10 mb-4">
                        <div className={`card p-services-card ${isVisible ? "popup-effect" : ""}`}>
                            <div className="card-body">
                                <h3 className="p-services-subtitle">Our AMC Plans:</h3>
                                <ul className="p-services-list">
                                    <li><strong>Comprehensive AMC</strong> – A full-coverage plan that includes preventive maintenance, repairs, and replacement of parts. This plan ensures complete protection, with costs estimated at 8-10% of the product's value. It’s ideal for businesses looking for a hassle-free maintenance experience.</li>
                                    <li><strong>Maintenance Service Only</strong> – This plan covers regular servicing and troubleshooting without part replacements. It is a cost-effective option where pricing varies depending on the product type and age. Businesses that require periodic checkups to maintain efficiency can opt for this plan.</li>
                                    <li><strong>Customized Services</strong> – We understand that every business has unique requirements. Our customized AMC solutions allow you to tailor services as per your specific operational needs, ensuring flexibility and affordability.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Why Choose Our AMC Services? Section */}
            <section className="p-services-section">
                <div className="row justify-content-center">
                    <div className="col-md-10 mb-4">
                        <div className={`card p-services-card ${isVisible ? "popup-effect" : ""}`}>
                            <div className="card-body">
                                <h3 className="p-services-subtitle">Why Choose Our AMC Services?</h3>
                                <ul className="p-services-list">
                                    <li><strong>Minimized Downtime</strong> – Regular inspections and preventive measures ensure that your equipment remains operational with minimal interruptions.</li>
                                    <li><strong>Cost Savings</strong> – Avoid unexpected breakdowns and expensive emergency repairs by opting for a structured maintenance plan.</li>
                                    <li><strong>Expert Technicians</strong> – Our team of highly trained professionals ensures top-notch service and quick resolution of any issues.</li>
                                    <li><strong>Priority Support</strong> – AMC customers receive prioritized support, ensuring faster response times and quicker service delivery.</li>
                                    <li><strong>Enhanced Equipment Lifespan</strong> – Routine maintenance extends the life of your assets, providing long-term value.</li>
                                </ul>
                                <p className="card-text p-services-card-text">Investing in our AMC services allows you to focus on your core business operations while we take care of your equipment maintenance. Contact us today to explore the best plan for your business needs and ensure seamless operational efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
