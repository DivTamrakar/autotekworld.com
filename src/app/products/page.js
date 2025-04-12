"use client";  
import Link from "next/link";  
import { useEffect, useState } from "react";  
import "bootstrap/dist/css/bootstrap.min.css";  
import "../../styles/products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 

export default function Products() {  
    useEffect(() => {  
        require("bootstrap/dist/js/bootstrap.bundle.min.js");  
    }, []);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = {
        // Wheel Aligner Products
        "tristar-3d": {
            images: [
            "/images_products/Tristar_3D_Wheel_Aligner.1.webp",
            "/images_products/Tristar_3D_Wheel_Aligner.jpg",
            "/images_products/Tristar_3D_Wheel_Aligner.1.webp",
            "/images_products/Tristar_3D_Wheel_Aligner.jpg",
            ],
            content: ` 
                        <h2>Tristar 3D Wheel Aligner</h2>
                        <p><b>₹ 4,75,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Product Brochure</strong></p>
                        <ul>
                        <li>PC Connectivity: Available</li>
                        <li>Structure: Electronic</li>
                        <li>Service Mode: Online Offline</li>
                        <li>Payment Mode: Online Offline</li>
                        <li>Country of Origin: Made in India</li>
                        </ul>
                        <p>The XD cameras, XD targets and Pro42 software provide the technician with an incomparable tool to speed the alignment process. XD Camera Beam with Diamond Shaped Plastic Camera Covers. Small single-plane XD targets (6” ×8”). AC100 GEN II universal wheel clamps (11”---22”). New slim post with multiple height position & shelves. Equipped with Embedded PC (include Win10) to make the system more stable. Pro42 software (Basic Version) - a high resolution ICON based software program with ALL the required functions in a one-touch program format to provide unique DIAGNOSTIC information. With high accuracy, you know you have done the job right the first time. Easy installation and flexible configuration.</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },
        "john-bean-v2100": {
            images: [
            "/images_products/John Bean V2100 Wheel Aligner.jpg",
            "/images_products/John Bean V2100 Wheel Aligner (4).jpg",
            "/images_products/John Bean V2100 Wheel Aligner (3).jpg",
            "/images_products/John Bean V2100 Wheel Aligner (2).jpg",
            "/images_products/John Bean V2100 Wheel Aligner (1).jpg"
            ],
            content: `
                        <h2>John Bean V2100 Wheel Aligner</h2>
                        <p><b>₹ 5,55,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Product Brochure</strong></p>
                        <ul>
                        <li>Automation Grade: Semi-Automatic</li>
                        <li>Voltage: 230 V</li>
                        <li>Country of Origin: Made in India</li>
                        </ul>
                        <p>Faster Alignment HD Camera with VODI AC  400 Target Delux Turn TableVECHICLE DIMENSION FOR PRE- ALIGNMENT DIAGNOSTIC CHECKDELUX KIOSK.</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },
        "dent-puller": {
            images: [
            "/images_products/Dent_Puller_(4).jpg",
            "/images_products/Dent_Puller_2.jpg",
            ],
            content: `
                        <h2>Dent Puller</h2>
                        <p><b>₹ 1,05,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Product Brochure</strong></p>
                        <ul>
                        <li>Phase: Three Phase</li>
                        <li>Usage/Application: DENT WORK</li>
                        <li>Brand: CAR-O-LINER</li>
                        <li>Color: Multicolor</li>
                        <li>Model Name/Number: CR35</li>
                        <li>Country of Origin: Made in India</li>
                        </ul>
                        <p><strong>Product Description:</strong></p>
                        <p>Dent puller is good at moving furniture, glass, it can be used as the door/window handle, It is also Screen Removal Tool. And Lifting and Moving Tiles, Mirror.</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },
        "WHEEL-LAIGNER-RIGEL-JOHNBEAN": {
            images: [
            "/images_products/WHEEL-LAIGNER-RIGEL-JOHNBEAN.jpg",
            "/images_products/WHEEL-LAIGNER-RIGEL-JOHNBEAN.jpg",
            "/images_products/WHEEL-LAIGNER-RIGEL-JOHNBEAN.jpg",
            ],
            content:  `
                        <h2>Wheel Laigner Rigel Johnbean</h2>
                        <p><b>₹ 4,75,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Minimum Order Quantity: 1 Piece</strong></p>
                        <p><strong>Product Brochure</strong></p>
                        <ul>
                        <li>XD CAMERAS</li>
                        <li>XD TARGETS</li>
                        <li>PRO 42 SOFTWARE</li>
                        <li>AC 100 GEN -II UNIVERSAL WHEEL CLAMPS</li>
                        <li>EMBEDED PC with WIN 10</li>
                        <li>HIGH ACCURACY</li>
                        <li>UNIQUE DIAGNOSTIC INFORMATION</li>
                        </ul>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },
        "pyramid-wheel-aligner": {
            images: [
                "/images_products/Pyramid_Wheel_Aligner.jpg"
            ],
            content: `
                        <h2>Pyramid Wheel Aligner</h2>
                        <p><b>₹ 5,98,200/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Minimum Order Quantity: 2 Piece</strong></p>
                        <ul>
                        <li>Automation Grade: Semi-Automatic</li>
                        <li>Brand: Blue Point</li>
                        <li>Voltage: 110V</li>
                        <li>Weight: 195kg</li>
                        <li>Is It Portable: Non Portable</li>
                        <li>Frequency: 50Hz</li>
                        <li>Phase: Single Phase</li>
                        <li>Rim Size: 22inch</li>
                        <li>Model: AC100</li>
                        <li>Wheel Base: 180inch</li>
                        <li>Series: Pyramid</li>
                        </ul>
                        <p><strong>Product Description:</strong></p>
                        <p>Patented imaging technology provides accurate and real-time measurements that improves productivity. User-friendly interface with step-by-step instructions for completing even the most complex tasks. Features such as EZ-TOE*, VODI* and extensive vehicle specification database delivers customer satisfaction, ease of use and accuracy. High resolution imaging technology delivers accurate, live alignment readings and diagnostic data. Passive front and rear XD targets improve durability with no electronics to damage. Lightweight, durable and impact resistant XD targets and AC100 wheel clamps.</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },

        "john-bean-3d-wheel-aligner": {
            images: [
                "/images_products/John_Bean_3D_Wheel_Aligner.jpg"
            ],
            content: `
                        <h2>John Bean 3D Wheel Aligner</h2>
                        <p><b>₹ 4,70,000/ Piece</b> <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Minimum Order Quantity: 2 Piece</strong></p>
                        <p><strong>Product Brochure</strong></p>
                        <ul>
                        <li>Automation Grade: Semi-Automatic</li>
                        <li>Voltage: 230 V</li>
                        <li>Frequency: 50Hz</li>
                        <li>Max Rim Diameter: 22inch</li>
                        <li>Brand: John Bean</li>
                        <li>Display: 22inch TFT</li>
                        <li>Phase: Single Phase</li>
                        </ul>
                        <p><strong>Product Description:</strong></p>
                        <p>The V2100 can benefit from the Next Generation User Interface, designed for maximum clarity and accessibility. Online connectivity for automatic software and specification updates.</p>
                        <p>New wheel aligner, which incorporates the next generation software and camera technology</p>
                        <p>Version without TILT and post</p>
                        <p>Accurate and repeatable readings in under 2 minutes</p>
                        <p>Online connectivity for automatic software and specs updates</p>
                        <p>Portable remote display</p>
                        <p>Mainstream alignment features</p>
                        <p>Easy installation and service</p>
                        <p>Wireless remote display support with connection to many consumer devices</p>
                        <p>Improved installation flexibility with camera beam and printer shelf connected by up to 50m long ethernet cable</p>
                        <p>Standard Equipment:</p>
                        <ul>
                        <li>Wheel Aligner machine</li>
                        <li>Next generation software</li>
                        <li>AC100 wheel clamps with 3D targets</li>
                        <li>Electronics Shelf</li>
                        <li>Host Controller</li>
                        <li>Keyboard and Mouse</li>
                        <li>Color Printer</li>
                        <li>22” Wide-screen monitor</li>
                        </ul>
                        <p>Standard Accessories:</p>
                        <ul>
                        <li>Steering Wheel Holder</li>
                        <li>Brake Pedal Depressor</li>
                        <li>Colour Ink-Jet Printer</li>
                        <li>Wheel Chocks</li>
                        </ul>
                        <p>Vehicle Orientation Directional Indicator (VODI) guides the technician through the measurement process. Reduces the amount of time spent walking back and forth from the vehicle to the aligner.</p>
                        <p>View detailed videos of how to make needed adjustments to complete even the most complex tasks.</p>
                        <p>Turn the front wheels and access difficult adjustment points while still displaying centred toe readings.</p>
                        <p>All new user interface with three levels of intervention — Compensate, Warn, Alert — with corrective actions clearly identified and more information just one click away.</p>
                        <p>Fast and easy to use. Self-centering design for accurate measurement of the vehicle dimensions. Two-sided claws eliminate accessories and allow reliable clamping even over hub caps.</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },
        "video-graphic-wheel-balancer": {
            images: [
                "/images_products/Video_Graphic_Wheel_Balancer.webp"
            ],
            content: `
                        <h2>Video Graphic Wheel Balancer</h2>
                        <p><b>₹ 1,15,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },

        // Wheel Balancer
        "john-bean-b600l": {
            images: [
                "/images_products/John_Bean_B600L_Wheel_Balancer_20.jpg",
                "/images_products/John_Bean_B600L_Wheel_Balancer_(19).jpg",
                "/images_products/John_Bean_B600L_Wheel_Balancer_(18).jpg",
                "/images_products/John_Bean_B600L_Wheel_Balancer_(17).jpg",
                "/images_products/John_Bean_B600L_Wheel_Balancer_(16).jpg",
                "/images_products/John_Bean_B600L_Wheel_Balancer_(15).jpg",
                "/images_products/John_Bean_B600L_Wheel_Balancer_(14).jpg",
                "/images_products/John_Bean_B600L_Wheel_Balancer_(13).jpg",
                "/images_products/John_Bean_B600L_Wheel_Balancer_12.jpg",
                "/images_products/John_Bean_B600L_Wheel_Balancer_(11).jpg",
                "/images_products/John_Bean_B600L_Wheel_Balancer_10.jpg",
                

            ],
            content: `
                        <h2>John Bean B600L Wheel Balancer</h2>
                        <p><b>₹ 3,97,896/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Minimum Order Quantity: 2 Piece</strong></p>
                        <p><strong>Product Brochure</strong> <a>Watch Video</a></p>
                        <ul>
                        <li>Brand: John Bean</li>
                        <li>Voltage: 220V</li>
                        <li>Measuring Speed: 200 rpm</li>
                        <li>Balancing Accuracy: 1g (0.035 oz)</li>
                        <li>Phase: Single Phase</li>
                        <li>Rim Diameter Range: Upto 32inch</li>
                        <li>Diameter Of Shaft: 40mm</li>
                        <li>Rim Width Range: 1050mm</li>
                        <li>Max. Wheel Weight: 70kg</li>
                        <li>Net Weight: 115kg</li>
                        <li>Wheel Clamping: Power Clamp</li>
                        <li>Dimensions LxWxH: 1313 x 868 x 1834mm</li>
                        <li>Lenght Of Shaft: 225mm</li>
                        <li>Start/Stop Balance Time - Check Spin: 4.5sec</li>
                        </ul>
                        <p><strong>Product Description:</strong></p>
                        <p>The B600 series wheel balancing systems are designed for high volume shops. Its intuitive user interface and ergonomic touchscreen reduces complexity and offers short cycle times.</p>
                        <p>Part Number: EEWB568AP</p>
                        <p><strong>Touchscreen with Advanced User Interface:</strong></p>
                        <p>Fast and easy selection of commonly used modes: spoke detection, match mount and manual mode. Large, easy to see measurement results and bright indicators for weight position.</p>
                        <p><strong>Smart Sonar:</strong></p>
                        <p>Automatically calculates wheel width and detects offset. The balancing cycle is started as soon as the wheel guard has been lowered. 30% time savings compared to manual input.</p>
                        <p><strong>Patented Automatic Power Clamp:</strong></p>
                        <p>Electromechanically clamps the wheel accurately with a constant force reducing the opportunity for chasing weight.</p>
                        <p><strong>easyWeight:</strong></p>
                        <p>Pinpoint laser accurately indicates the positioning of adhesive weight on the wheel, avoiding misplacement. Weight location is ergonomically indicated in the lower rim position.</p>
                        <p><strong>LED Wheel Lighting:</strong></p>
                        <p>All B600 series wheel balancing systems come with a bright LED lighting system that facilitates rim cleaning and aids in the weight positioning process.</p>
                        <p><strong>EZ-Collets Mobile App:</strong></p>
                        <p>Helps service technicians identify the best tools for their wheel balancing procedures. Using the mobile app, service professionals can find the best collet, flange, or quick plate for a wheel balancing job by selecting the vehicle and comparing the options and benefits of each tool. The app also provides information about the tire and rim for the selected vehicle and is free to download through the Apple and Google stores - email activation required.</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },
        "john-bean-b9100": {
            images: [
                "/images_products/John-Bean-B9100-Wheel-Balancer-2.jpg",
                "/images_products/John-Bean-B9100-Wheel-Balancer-3.jpg",
                "/images_products/John-Bean-B9100-Wheel-Balancer-(4).jpg",
            ],
            content: `
                        <h2>John Bean B9100 Wheel Balancer</h2>
                        <p><b>₹ 1,00,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Minimum Order Quantity: 2 Piece</strong></p>
                        <p><strong>Product Brochure</strong></p>
                        <ul>
                        <li>Brand: John Bean</li>
                        <li>Model Name/Number: B9100</li>
                        <li>Measuring Speed: < 100 RPM</li>
                        <li>Balancing Accuracy: 1 g (0.035 oz)</li>
                        <li>Max. wheel weight: 70kg</li>
                        <li>Offset Range: Up to 20inch</li>
                        <li>Max. wheel diameter: 960mm</li>
                        <li>Angular resolution: +/- 0,35 Degree</li>
                        <li>Length of shaft: 225mm</li>
                        <li>Diameter of shaft: 40mm</li>
                        <li>Start/Stop balance time - Check spin: 6sec</li>
                        <li>Rim Diameter Range: Up to 32inch</li>
                        <li>Motorized: Yes</li>
                        <li>Wheel clamping: Quick nut</li>
                        </ul>
                        <p><strong>Product Description:</strong></p>
                        <p>The wheel balancer for service stations and garages with small tyre service volume - combines high accuracy with small footprint.</p>
                        <p>Small footprint</p>
                        <p>Semi-automatic input of offset and rim diameter via 2D SAPE</p>
                        <p>Manual input of rim width</p>
                        <p>Conspicuous and intuitive LED display</p>
                        <p>Imbalance minimisation and optimisation programs</p>
                        <p>VPM measurement technique for uncompromised accuracy</p>
                        <p>QuickBal for reduced measurement time:</p>
                        <p>Short start-stop cycle time: 6.5 seconds (15" rim)</p>
                        <p>Measuring speed < 100 rpm</p>
                        <p>Wheel guard</p>
                        <p>Semi-automatic data entry and positioning of adhesive weights.</p>
                        <p>The 225 mm length allows the use of stud-hole flanges and other accessories for almost every type of rim.</p>
                        <p>Hides adhesive weights behind two adjacent spokes so they cannot be seen from the outside.</p>
                        <p>30% reduced cycle time, less than 4,5 seconds, maintaining the same high accuracy.</p>
                        <p>The patented and ergonomic telescopic wheel guard reduces the footprint.</p>
                        <p>Measurement system for high precision and repeatability.</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },
        "john-bean-b100": {
            images: [
            "/images_products/John_Bean_B100_Wheel_Balancer_4.jpg",
            "/images_products/John_Bean_B100_Wheel_Balancer_3.jpg",
            "/images_products/John_Bean_B100_Wheel_Balancer_2.jpg"
            ],
         content: `
                    <h2>John Bean B100 Wheel Balancer</h2>
                    <p><b>₹ 1,62,840/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                    <p><strong>Minimum Order Quantity: 2 Piece</strong></p>
                    <p><strong>Product Brochure</strong></p>
                    <ul>
                    <li>Model Name/Number: B100</li>
                    <li>Brand: John Bean</li>
                    <li>Voltage: 220V</li>
                    <li>Measuring Speed: 100 RPM</li>
                    <li>Balancing Accuracy: 1g (0.035 oz)</li>
                    <li>Phase: Single Phase</li>
                    <li>Diametre Of Shaft: 40mm</li>
                    <li>Max. Wheel Weight: 70kg</li>
                    <li>Max. Wheel Diameter: 960mm</li>
                    <li>Lenght Of Shaft: 225mm</li>
                    <li>Offset range: Up to 20inch</li>
                    <li>Wheel Clamping: Quick Nut</li>
                    <li>Rim Width Range: Up to 20inch</li>
                    <li>Rim Diameter Range: Up to 32inch</li>
                    <li>Start/Stop Balance Time - Check Spin: 6sec</li>
                    <li>Angular Resolution: +- 0,35 Degree</li>
                    <li>Dimensions LxWxH: 1100 x 1005 x 1711mm</li>
                    </ul>
                    <p><strong>Product Description:</strong></p>
                    <p>The wheel balancer for service stations and garages with small tyre service volume - combines high accuracy with small footprint.</p>
                    <p>Small footprint</p>
                    <p>Semi-automatic input of offset and rim diameter via 2D SAPE</p>
                    <p>Manual input of rim width</p>
                    <p>Conspicuous and intuitive LED display</p>
                    <p>Imbalance minimisation and optimisation programs</p>
                    <p>VPM measurement technique for uncompromised accuracy</p>
                    <p>QuickBal for reduced measurement time:</p>
                    <p>Short start-stop cycle time: 6.5 seconds (15" rim)</p>
                    <p>Measuring speed < 100 rpm</p>
                    <p>Wheel guard</p>
                    <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                `
        },

        // Air Compressor
        "air-compressor": {
            images: [
                "/images_products/Air_Compressor.jpg"
            ],
            content:  `
                        <h2>Air Compressor</h2>
                        <p><b>₹ 63,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <ul>
                        <li>Motor Power: 3 HP, 3 HP</li>
                        <li>Cooling System: Air Cooled</li>
                        <li>Air Quality Standard: Class I</li>
                        <li>Is It Portable: Yes</li>
                        <li>Country of Origin: Made in India</li>
                        </ul>
                        <p><strong>Product Description:</strong></p>
                        <p>An air compressor is a machine that takes ambient air from the surroundings and discharges it at a higher pressure. It is an application of a gas compressor and a pneumatic device that converts mechanical power (from an electric motor, diesel or gasoline engine, etc.)</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },
        "pcl-sumo-two-stage": {
            images: [
                "/images_products/PCL-Sumo_Two_Stage_Air_Compressors_(4).jpg",
                "/images_products/PCL-Sumo_Two_Stage_Air_Compressors_3.jpg",
                "/images_products/PCL-Sumo_Two_Stage_Air_Compressors_2.jpg",
            ],
            content: `
                        <h2>PCL-Sumo Two Stage Air Compressors</h2>
                        <p><b>₹ 82,700/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Minimum Order Quantity: 2 Piece</strong></p>
                        <p><strong>Product Brochure</strong></p>
                        <ul>
                        <li>Horse Power: 3hp</li>
                        <li>Compressor Brand: PCL Sumo</li>
                        <li>Compressor Technology: Reciprocating</li>
                        <li>Maximum Flow Rate: 380cfm</li>
                        <li>Number Of Compression Stages: Two Stage</li>
                        <li>Brand: PCL-Sumo</li>
                        <li>Cooling Method: Air Cooled</li>
                        <li>Pressure PSIG: 200</li>
                        <li>No. Of Cylinders: 2</li>
                        <li>Part No: GC-284</li>
                        <li>Piston Displacement CFM: 6.7cfm</li>
                        </ul>
                        <p><strong>Product Description:</strong></p>
                        <p>The two stage compressor consists of two or more cylinders. The atmospheric air enters into the low pressure (LP) cylinder through an inlet filter & valve which passes to the high pressure (HP) cylinder through the inter-cooler for a final pressure.</p>
                        <p>The highly efficient inter-cooler provides maximum heat dissipation between stages resulting in more air per horse power and less trouble from carbonation.</p>
                        <p>Two Stage Air Compressors are useful in textile, plastic industries, paper industries, spray painting, blowing, cleaning, chemical plants, pneumatics, ceramics, automobiles, foundries, pharmaceuticals, service stations, etc.</p>
                        <p><strong>Features & Benefits:</strong></p>
                        <ul>
                        <li>Consists of two cylinders</li>
                        <li>Available in various models</li>
                        </ul>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },
        "digital-wheel-balancer": {
            images: [
                "/images_products/Digital_Wheel_Balancing_Machine.avif"
            ],
            content: `
                        <h2>Digital Wheel Balancing Machine</h2>
                        <p><b>₹ 95,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },

        // Tyre Changer
        "john-bean-t900": {
            images: [
                "/images_products/John_Bean_T900_Tyre_Changer2.jpg",
                "/images_products/John_Bean_T900_Tyre_Changer3.jpg",
                "/images_products/John_Bean_T900 _Tyre_Changer(4).jpg",
            ],
            content: `
                        <h2>John Bean T900 Tyre Changer</h2>
                        <p><b>₹ 1,20,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Minimum Order Quantity: 1 Piece</strong></p>
                        <p><strong>Product Brochure</strong></p>
                        <ul>
                        <li>Automation Grade: Semi-Automatic</li>
                        <li>Max. Rim Diameter: 22 no</li>
                        <li>Operating Pressure: 8bar</li>
                        <li>Model Name/Number: T900</li>
                        <li>Brand: John Bean</li>
                        <li>Motor Power: 0.75kW</li>
                        <li>Frequency: 50Hz</li>
                        <li>Voltage: 220V</li>
                        <li>Power: 1hp</li>
                        </ul>
                        <p><strong>Product Description:</strong></p>
                        <p>The John Bean T900 tyre changer is designed to meet the tyre changing needs of low-volume shops while providing the quality of service only John Bean can provide. This tyre changer is constructed with a rugged steel base, polymer valves, a standard lubricator, and can service a wide range of wheel and tyre assemblies.</p>
                        <p>Lower volume swing arm tyre changer</p>
                        <p>220V</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },
        "john-bean-t3000": {
            images: [
                "/images_products/John_Bean_T3000_Tyre_Changer.jpg"
            ],
            content: `
                    <h2>John Bean T3000 Tyre Changer</h2>
                    <p><b>₹ 3,25,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                    <p><strong>Minimum Order Quantity: 2 Piece</strong></p>
                    <p><strong>Product Brochure</strong></p>
                    <ul>
                    <li>Model Name/Number: T3000</li>
                    <li>Brand: John Bean</li>
                    <li>Tower Technology: Pneumatic Tilt Back</li>
                    <li>Power Supply (Amperage): 5Amp</li>
                    <li>Rim Diameter: Up to 22inch</li>
                    <li>Max. Torque: 1020Nm</li>
                    <li>Speed Control: Switch</li>
                    <li>Max Wheel Diameter: 1000mm</li>
                    <li>M/D Tool Technology: M/D Tool & Bead Lever</li>
                    <li>Dimensions (W x D x H): 1150x1030x1730mm</li>
                    <li>Capability: 70kg</li>
                    <li>Outside Clamping range: Up to 20inch</li>
                    <li>Max Wheel Width: 330mm</li>
                    <li>Clamping System: Turntable & Clamping Jaws</li>
                    <li>Breaking Force: 12kN</li>
                    <li>Rotation Speed: 8 RPM</li>
                    <li>Installed Motor Power: 0,75kW</li>
                    <li>Bead Breaking Range: 340mm</li>
                    <li>Compressed Air Supply: 12Bar</li>
                    <li>Net Weight: 180kg</li>
                    <li>Tool Vertical Positioning: Manual</li>
                    <li>Max Tyre Width: 13inch</li>
                    <li>Speed: 7 RPM</li>
                    </ul>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                    <li>Tire changer suitable to handle RFT Tires.</li>
                    <li>Tilt back post tire changer with pneumatically pedal controlled tilted post</li>
                    <li>Double-acting pneumatic bead breaker cylinder</li>
                    <li>Mounting head vertically and laterally adjustable in spaced-apart position relative to the rim.</li>
                    <li>Self centering four Jaws.</li>
                    <li>Maximum tyre width 13'.</li>
                    <li>Able to mount or demount tyre sizes up to 24'.</li>
                    </ul>
                    <p><strong>Application:</strong></p>
                    <p>The special design of the machine post guarantees minimum tension even when hard tyres are mounted or dismounted.</p>
                    <p>The self-centring turntable always clamps the rims correctly.</p>
                    <p>Servicing unit with oiler and water separator.</p>
                    <p>The oversize bead breaker blade handles rims most gently.</p>
                    <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                `
        },

        // ...Stanley Hand Tools...
        "stanley-multi-tool-kit": {
            images: [
                "/images_products/Stanley-Multi-Tool-Kit-(3).jpg",
                "/images_products/Stanley-Multi-Tool-Kit-(4).jpg",
                "/images_products/Stanley-Multi-Tool-Kit-(5).jpg",
                "/images_products/Stanley-Multi-Tool-Kit-(6).jpg",
            ],
            content: `
                        <h2>Stanley Multi Tool Kit</h2>
                        <p><b>₹ 11,788/</b> Kit <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Minimum Order Quantity: 1 Kit</strong></p>
                        <ul>
                        <li>Usage/Application: Mechanical</li>
                        <li>Material: Mild Steel</li>
                        <li>Warranty: 6 months</li>
                        <li>Packaging: Box</li>
                        <li>Brand: Stanley</li>
                        <li>Kit Contains: 110 Pieces</li>
                        </ul>
                        <p>Stanley 110 Pieces Multi-Tool Set, STMT81243 - by GerOil</p>
                        <p>STMT81243 is a premium quality Socket Sets from Stanley</p>
                        <p>Includes 110 pcs 1/4" & 1/2" & mm</p>
                        <p>Exceeds ASME Standards</p>
                        <p>Supplied by GerOil Oil and Gas Products, Preferred Partner of StanleyBlack & Decker</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },
        "stanley-mechanic-tool-kit": {
            images: [
                "/images_products/Stanley-Mechanic-Tool-Kit-(3).jpg",
                "/images_products/Stanley-Mechanic-Tool-Kit-(4).jpg",
                "/images_products/Stanley-Mechanic-Tool-Kit-(5).jpg",
                "/images_products/Stanley-Mechanic-Tool-Kit-(6).jpg",
            ],
            content:  `
                        <h2>Stanley Mechanic Tool Kit</h2>
                        <p><b>₹ 23,157/</b> Kit <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Minimum Order Quantity: 2 Kit</strong></p>
                        <ul>
                        <li>Warranty: 1 Year</li>
                        <li>Tool Type: Mechanical Tool</li>
                        <li>Usage/Application: Garage</li>
                        <li>Material: SS</li>
                        <li>Brand: Stanley</li>
                        <li>Kit Contains: 86 Pieces</li>
                        </ul>
                        <p>86PC 1/4 & 1/2 SQ.DR. SOCKET SET-6PT MET</p>
                        <p>86 pieces is made with double nickel chromium alloy coated reduces corrosion. Thin head allows accessibility to tight spaces. Locking mechanism retains sockets to increase safety while working.</p>
                        <p><strong>Features & Benefits:</strong></p>
                        <ul>
                        <li>86PC 1/4" and 1/2" Drive 6 Point Metric Socket Set</li>
                        <li>Loosening and tightening of Nuts, Bolts and Screw</li>
                        <li>Length [mm]: 406.4</li>
                        <li>Height [mm]: 304.8</li>
                        <li>Width [mm]: 76.2</li>
                        <li>Volume:</li>
                        <li>Weight [kg]: 363.982</li>
                        <li>Piece Count:</li>
                        <li>Sets Breakup:</li>
                        <ul>
                            <li>14Pc 1/4 Drive 6 Point Metric Sockets: 3.5, 4, 4.5, 5, 5.5, 6, 7, 8, 9, 10, 11, 12, 13, 14mm</li>
                            <li>8Pc 1/4 Drive Deep 6 Point Metric Sockets: 6, 7, 8, 9, 10, 11, 12, 13mm</li>
                            <li>2Pc 1/4 & 1/2 Drive Pear Head Ratchet With Comfort Grip</li>
                            <li>2Pc 1/4 Drive Extension Bar: 2, 4</li>
                            <li>1Pc 1/4 Drive Sliding T-Bar: 4</li>
                            <li>1Pc 1/4 Drive Bit Spinner</li>
                            <li>1Pc 1/4 Drive Universal Joint</li>
                            <li>1Pc 3/8 Drive Female & 1/2 Drive Male: 3-Way Adapter</li>
                            <li>14Pc 1/2 Drive 6 Point Metric Sockets: 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 30, 32mm</li>
                            <li>4Pc 1/2 Drive Deep 6 Point Metric Sockets: 14, 16, 17, 19mm</li>
                            <li>2Pc 1/2 Drive Extension Bar: 5, 10</li>
                        </ul>
                        </ul>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },


        // Scissor Lift
        "john-bean-gold-2-wheel-alignment-machine": {
            images: [
                "/images_products/John-Bean-GOLD-2-Wheel-Alignment-Machine.jpg"
            ],
            content: `
                        <h2>John Bean GOLD 2 Wheel Alignment Machine</h2>
                        <p><b>₹ 11,50,500/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Minimum Order Quantity: 2 Piece</strong></p>
                        <p><strong>Product Brochure</strong></p>
                        <ul>
                        <li>Automation Grade: Automatic</li>
                        <li>Brand: John Bean</li>
                        <li>Voltage: 230 V</li>
                        <li>Power: 1hp</li>
                        <li>Model Name/Number: V2280</li>
                        <li>Phase: Single Phase</li>
                        </ul>
                        <p>V2280: designed for the independent workshop to provide core alignment functions quickly and easily</p>
                        <p>Software designed together with technicians around the core functions: you never wait for the system</p>
                        <p>Intelligent & predictive alignment workflow for your selected vehicle without unnecessary steps</p>
                        <p>Compensate, Warn & Alert let’s you perform your work fast with professional results</p>
                        <p>Rolling Compensation time reduced 35% compared to previous models</p>
                        <p>Intelligent shorter procedure for caster swing: 40% faster than previous models</p>
                        <p>Automatic Tracking Camera Beam: you don’t have to spend time on adjusting the height of the camera beam</p>
                        <p>Cabinet position independent from camera beam</p>
                        <p>Cloud based printing option: retrieve and print your reports from any internet connected PC or mobile device</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },
        "car-washing-scissor-lift": {
            images: [
                "/images_products/Car-Washing-Scissor-Lift.jpg"
            ],
            content: `
                        <h2>Car Washing Scissor Lift</h2>
                        <p><b>₹ 1,05,000/</b> Set <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <ul>
                        <li>Elevating Time: 5 Feet</li>
                        <li>Max. Lifting Height: 5 Feet</li>
                        <li>I Deal In: New Only</li>
                        <li>Country of Origin: Made in India</li>
                        </ul>
                        <p>A car wash, or auto wash, is a facility used to clean the exterior, and in some cases the interior, of cars.</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },

        // Tyre Inflator
        "d10-accura-premium-electronic-tyre-inflator": {
        images: [
            "/images_products/D10_ACCURA_PREMIUM_ELCTRONIC_TYRE_INFLATOR.jpg"
        ],
        content: `
                    <h2>D10 ACCURA PREMIUM ELECTRONIC TYRE INFLATOR</h2>
                    <p><b>₹ 24,900/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                    <p><strong>Minimum Order Quantity: 01 Piece</strong></p>
                    <ul>
                    <li>Brand: PCL SUMO</li>
                    <li>Display Type: TOUCH</li>
                    <li>Model Name/Number: D10 ACCURA</li>
                    <li>Color: Grey</li>
                    <li>Usage/Application: TYRE INFLATOR</li>
                    <li>Payment Mode: Online Offline</li>
                    <li>Service Mode: Online Offline</li>
                    <li>I Deal In: New Product</li>
                    <li>Country of Origin: Made in India</li>
                    </ul>
                    <p>Touch screen and High pressure models available.</p>
                    <p>Dual screen</p>
                    <p>Consistent cost effective provision of high levels of safe air inflation services</p>
                    <p>Strong marketing potential with modern design, bespoke graphics and user friendly air provision</p>
                    <p>Plug and play - tyre inflator with 3 pre-selectable application modes</p>
                    <p>Low life time costs - long product life with robust design and proven electronics</p>
                    <p>Low and simple maintenance with excellent diagnostics</p>
                    <p>Customisation to meet individual needs and applications</p>
                    <p>Guaranteed accuracy with individual testing</p>
                    <p>Electronic pressure preset</p>
                    <p>Auto start inflation</p>
                    <p>Clear display for easy customer usage</p>
                    <p>Default to safe-setting</p>
                    <p>Robust, high reliability and modern design with die-cast aluminium housing</p>
                    <p>Ceramic sensor - accuracy to +/-0.5% of full scale reading</p>
                    <p>Attractive and durable membrane with customisable graphics</p>
                    <p>230v, 100/120v and 12v versions</p>
                    <p>Can inflate accurately with hoses up to 50m</p>
                    <p>Comprehensive diagnostics and error reporting</p>
                    <p><strong>For the Tyre User / Fleet Manager:</strong></p>
                    <ul>
                    <li>Reduced tyre wear extending tyre life</li>
                    <li>Increased fuel economy</li>
                    <li>Increased safety and reduced tyre-related incidents</li>
                    </ul>
                    <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                `
        },
        "tyre-inflator": {
            images: [
                "/images_products/Tyre_Inflator.webp"
            ],
            content: `
                        <h2>Tyre Inflator</h2>
                        <p><b>₹ 5,600/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },

        // .Nitrogen Generator...
        "pcl-sumo-nitrogen-inflator": {
            images: [
                "/images_products/PCL-Sumo-Nitrogen-Inflator2.jpg",
                "/images_products/PCL-Sumo-Nitrogen-Inflator3.jpg",
                "/images_products/PCL-Sumo-Nitrogen-Inflator (4).jpg",
            ],
            content: `
                    <h2>PCL Sumo Nitrogen Inflator</h2>
                    <p><b>₹ 1,05,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                    <p><strong>Product Brochure</strong></p>
                    <ul>
                    <li>Brand: PCL Sumo</li>
                    <li>Usage/Application: Tyre Shop</li>
                    <li>Display Type: Digital</li>
                    <li>Voltage: 220V</li>
                    <li>Model Name/Number: PCL N2 35K/60</li>
                    <li>Nitrogen Purity: 99.5%</li>
                    <li>Frequency: 50Hz</li>
                    <li>Phase: Single Phase</li>
                    </ul>
                    <p>Digital</p>
                    <p>Fast, 60 Ltr Inbuilt Tank</p>
                    <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                `
        },

        // Car Washer
        "schumak-touchless-automatic-car-washer": {
        images: [
            "/images_products/Schumak-Touchless-Automatic-Car-Washer-(3).jpg",
            "/images_products/Schumak-Touchless-Automatic-Car-Washer-(4).jpg",
            "/images_products/Schumak-Touchless-Automatic-Car-Washer-(5).jpg",
            "/images_products/Schumak-Touchless-Automatic-Car-Washer-6.jpg",
        ],
        content: `
                    <h2>Schumak Touchless Automatic Car Washer</h2>
                    <p><b>₹ 11,80,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                    <p><strong>Watch Video</strong></p>
                    <ul>
                    <li>Brand: Schumak</li>
                    <li>Automation Grade: Semi-Automatic</li>
                    <li>Cleaning Type: Touchless</li>
                    <li>Body Material: Cast Iron</li>
                    <li>Voltage: 220V</li>
                    <li>Phase: Single Phase</li>
                    <li>Overall Dimension (LxWxH): 5500 x 3950 x 3080mm</li>
                    <li>Operating System (Water) Pressure: 24bar</li>
                    <li>Water Consumption Per Car: 125L</li>
                    <li>Machine Type: Overhead Carriage Dual Swing Arm</li>
                    <li>Maximum Washable Dimension Of Car (LxWxH): 4750 x 1900 x 1900mm</li>
                    <li>Total Connected Load: 9hp</li>
                    <li>Cycle Time Per Car: 3.5min</li>
                    <li>Shampoo Consumption: 7ml/Car</li>
                    <li>Required Space (LxWxH): 6700x4250x3700mm</li>
                    </ul>
                    <p>Schumak touchless car wash system is an advanced version of our Automatic Car Wash segment. It is made to raise the standard of car washing with its features like heavy duty stainless steel 304 grade body, automatic high pressure uniform water spray, automatic car length sensing, automatic indigenous foam spray and automatic high pressure underbody wash. This is a sturdy & effective machine which achieves significant savings for the customer when compared to other washing systems like brush car wash and manual car wash system.</p>
                    <p><strong>Applications:</strong></p>
                    <ul>
                    <li>Top body wash and underbody wash for cars and SUVs.</li>
                    <li>Better wash quality.</li>
                    <li>Since the car length is sensed automatically, water consumption is less.</li>
                    <li>Washing done by this machine reduces Time, Man Power and Cost.</li>
                    <li>Increased Productivity (3.5 minute operation time)</li>
                    <li>Digital counter counts the number of cars washed per day.</li>
                    </ul>
                    <p><strong>Benefits & Features:</strong></p>
                    <ul>
                    <li>Stainless Steel 304 grade body for long life and to prevent rusting.</li>
                    <li>Ultrasonic sensors are provided to sense the car length automatically.</li>
                    <li>Control panel has automatic as well as manual mode.</li>
                    <li>Increased Productivity (3.5 minute operation time)</li>
                    <li>Reduced water consumption (125 liters per car)</li>
                    <li>Reduced labor costs (Only one operator needed)</li>
                    <li>Top body wash and underbody wash for cars and SUVs.</li>
                    <li>Digital counter counts the number of cars washed per day.</li>
                    </ul>
                    <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                `
        },

        // Tyre Changer
        "tyre-changer-mtc-100": {
        images: [
            "/images_products/Tyre-Changer-MTC-100.jpg"
        ],
        content: `
                    <h2>Tyre Changer MTC 100</h2>
                    <p><b>₹ 95,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                    <ul>
                    <li>Automation Grade: Semi-Automatic</li>
                    <li>Operating Pressure: 8-10bar</li>
                    <li>Model Name/Number: MTC 100</li>
                    <li>Country of Origin: Made in India</li>
                    </ul>
                    <p>A tire (North American English) or tyre (Commonwealth English) is a ring-shaped component that surrounds a wheel's rim to transfer a vehicle's load from the axle through the wheel to the ground and to provide traction on the surface over which the wheel travels.</p>
                    <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                `
        },

        // Car Scanner
        "car-scanner-launch-x-431-pro": {
            images: [
                "/images_products/Car-Scanner-Launch-X-431-Pro.jpg"
            ],
            content: `
                        <h2>Car Scanner Launch X 431 Pro</h2>
                        <p><b>₹ 1,10,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <ul>
                        <li>Operating System: Android</li>
                        <li>Warranty: Two Year</li>
                        <li>Display Type: 10" Display</li>
                        <li>Wi-Fi: Compatible</li>
                        <li>Wireless: Yes</li>
                        <li>Camera: Available</li>
                        <li>Country of Origin: Made in India</li>
                        </ul>
                        <p>Full vehicle system coverage for over 110 brands in the world, which is continually updated.</p>
                        <p>Automatically identify VIN upon connection to the vehicle for intelligent diagnosis.</p>
                        <p>Remote diagnosis allowing you to work on a vehicle for intelligent diagnosis.</p>
                        <p>Read all DTC types for full system, view, graph and record data PIDs, support bi-directional controls, actuation test and all other diagnostic functions.</p>
                        <p>Compatible with immobilizer and Wi-Fi printer module.</p>
                        <p>Integrated database with comprehensive vehicle service and repair information.</p>
                        <p>Diagnostic records and reports can be stored in the cloud without any concern of data missing.</p>
                        <p>One-Click Upgrade and silent install for software.</p>
                        <p>PUSH PUSH connector with practical design for easy storage.</p>
                        <p>DBSCar IV VCI with stable bluetooth connectivity.</p>
                        <p>TYPE C Interface.</p>
                        <p><strong>Additional Information:</strong></p>
                        <p>Delivery Time: One Week Max</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },

        // Lathe Machine
        "automatic-brake-drum-lathe": {
        images: [
            "/images_products/Automatic-Brake-Drum-Lathe-(1).jpg",
            "/images_products/Automatic-Brake-Drum-Lathe-2.jpg",
            "/images_products/Automatic-Brake-Drum-Lathe-3.jpg",
        ],
        content: `
                    <h2>Automatic Brake Drum Lathe</h2>
                    <p><b>₹ 2,90,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                    <p><strong>Minimum Order Quantity: 01 Piece</strong></p>
                    <p><strong>Product Brochure</strong></p>
                    <ul>
                    <li>Brake Disc Processing Diameter: 500 mm</li>
                    <li>Brake Drum Processing Diameter: up to 500mm</li>
                    <li>Machine Condition: New</li>
                    <li>Machine Weight: 118 kg</li>
                    </ul>
                    <p>• 2-in-1 On-Car and Off Car Brake Lathe</p>
                    <p>• Accurately resurface automotive & light truck rotors</p>
                    <p>• Fast, one-cut brake service</p>
                    <p>• Long blade life cycle</p>
                    <p>• Affordable alternative</p>
                    <p><strong>Additional Information:</strong></p>
                    <p>Delivery Time: One week</p>
                    <p>Packaging Details: Packing size total 0.33 CBM in two cartons</p>
                    <p>Plywood carton 86*48*45cm = 0.18m³</p>
                    <p>Paper carton 91*51*31cm = 0.144m³</p>
                    <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                `
        },

        // Alignment Lift
        "john-bean-3500s-two-post-service-lift": {
        images: [
            "/images_products/John-Bean-3500S-Two-Post-Service-Lift.jpg"
        ],
        content: `
                    <h2>John Bean 3500S Two Post Service Lift</h2>
                    <p><b>₹ 1,65,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                    <p><strong>Minimum Order Quantity: 2 Piece</strong></p>
                    <p><strong>Product Brochure</strong></p>
                    <ul>
                    <li>Brand: John Bean</li>
                    <li>Motor: 1 x 3 kW</li>
                    <li>Lifting Weight: 4000kg</li>
                    <li>Maximum pad height from floor: 140mm</li>
                    <li>Lowering Times: 50s</li>
                    <li>Lifting height: 1965mm</li>
                    <li>Long arm extraction: 1527mm</li>
                    <li>Distance between columns: 2921mm</li>
                    <li>Minimum ceiling height: 3920mm</li>
                    <li>Lifting Times: 60s</li>
                    <li>Short arm extraction: 1065mm</li>
                    <li>Minimum concrete thickness: 300mm</li>
                    <li>Model: S 3500</li>
                    <li>Drive-through width: 2380mm</li>
                    </ul>
                    <p><strong>Product Description:</strong></p>
                    <p>Hydraulic two-post lift for garage and tyre shop designed to lift cars, SUV and transporters with standard roof up to 3500 kg</p>
                    <p>Electro-hydraulic drive with automatic synchronisation via wire ropes</p>
                    <p>Exclusive Versymmetric® technology, providing the versatility to lift both symmetrically and asymmetrically within the same service bay</p>
                    <p>Large swing range with 3-stage front and 3-stage rear arms</p>
                    <p>Standard version for conventional vehicles</p>
                    <p>Control console with push-buttons in ergonomic position on the primary column</p>
                    <p>Key-locked main switch</p>
                    <p>Second control console on secondary column available as an optional accessory</p>
                    <p>Powerful hydraulic power pack mounted high on the column</p>
                    <p>Comfort lowering</p>
                    <p>Electronic safety lock mechanism</p>
                    <p>Optimum door clearance</p>
                    <p>CE stop technology instead of mechanical foot guards</p>
                    <p>Overhead crossbeam with shut-off bar</p>
                    <p>Flexible installation with two width options</p>
                    <p>Vast range of accessories to accommodate a wide range of vehicles</p>
                    <p>Front and rear 3 stage arms always allow a perfect access to the pick up points of the vehicle.</p>
                    <p>Very rugged design with integrated grease fitting and optimum door clearance when the car is placed on the lift. (Picture shows lift in wide installation)</p>
                    <p>Vehicle is lowered by simply pushing the lowering button. No need to activate the UP button to release the arms from the lock position.</p>
                    <p>Positioned in an ergonomic place on the primary column with clear indications of each push button.</p>
                    <p>Electric safety lock mechanism active during the complete lifting process is automatically released when lowering the lift thanks to the “Comfort Lowering” feature.</p>
                    <p>It combines the advantages of an asymmetric and a symmetric lift and improves the ergonomics when placing the arms to lift the car.</p>
                    <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                `
        },

        // Pneumatic Gun    
        "10mm-stanley-vsr-drill": {
        images: [
            "/images_products/10mm-Stanley-VSR-Drill_(1).jpg",
            "/images_products/10mm-Stanley-VSR-Drill_(2).jpg",
            "/images_products/10mm-Stanley-VSR-Drill_(3).jpg",
            "/images_products/10mm-Stanley-VSR-Drill_(4).jpg",
            "/images_products/10mm-Stanley-VSR-Drill_(5).jpg",
        ],
        content: `
                    <h2>10mm Stanley VSR Drill</h2>
                    <p><b>₹ 10,500/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                    <p><strong>Minimum Order Quantity: 2 Piece</strong></p>
                    <ul>
                    <li>Air Consumption: 8 - 9 (cfm)</li>
                    <li>Body Material: Composite Body</li>
                    <li>Color: Yellow</li>
                    <li>Air Pressure: 70 - 100 psi</li>
                    <li>Brand: Stanley</li>
                    <li>Model Name/Number: STMT74840</li>
                    <li>Cup Capacity: NR</li>
                    <li>Air Inlet Size: 1/2 inch</li>
                    </ul>
                    <p><strong>Product Description:</strong></p>
                    <p>Pneumatic tool is air compressed tool used by industries for nailing and stapling guns, grinders, drills, jack hammer, chipping hammer, sanders and wrenches.</p>
                    <p><strong>Features & Benefits:</strong></p>
                    <ul>
                    <li>Compact Aluminum Housing</li>
                    <li>Progressive Trigger Fine Speed Control</li>
                    <li>Speed Control Disc Switch</li>
                    <li>3 Positions, One Hand Operation</li>
                    </ul>
                    <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                `
        },

        // Jack Stand
        "auto-tek-jack-stand-by-blue-point": {
            images: [
                "/images_products/AUTO-TEK-JACK-STAND-BY-BLUE-POINT.jpg"
            ],
            content: `
                        <h2>AUTO TEK JACK STAND BY BLUE POINT</h2>
                        <p><b>₹ 2,300/</b> pair <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Minimum Order Quantity: 1 pair</strong></p>
                        <ul>
                        <li>Capacity: 3 Ton</li>
                        <li>Paint Coated: BLUE</li>
                        <li>Polished: YES</li>
                        <li>Country of Origin: Made in India</li>
                        </ul>
                        <p><strong>Product Description:</strong></p>
                        <p>Autotech is the disruptive technology that has grown out of the automotive sector. For over two decades, major progress has been made in fuel economy, ride quality and safety.</p>
                        <p><strong>Additional Information:</strong></p>
                        <p>Delivery Time: 2 Days</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },

        // AC Recycling Machine
        "cinquecento12-ac-recovery-recycling-and-ac-gas-charging": {
        images: [
            "/images_products/Cinquecento12-AC-Recovery-Recycling-and-AC-GAS-Charging-3.jpg",
            "/images_products/Cinquecento12-AC-Recovery-Recycling-and-AC-GAS-Charging-(4).jpg",
            "/images_products/Cinquecento12-AC-Recovery-Recycling-and-AC-GAS-Charging-5.jpg",
        ],
        content:  `
                    <h2>Cinquecento12- AC Recovery, Recycling and AC GAS Charging</h2>
                    <p><b>₹ 2,10,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                    <p><strong>Product Brochure</strong></p>
                    <ul>
                    <li>Usage/Application: AC Recovery, Recycling and AC GAS Charging</li>
                    <li>Model Name/Number: Cinquecento12</li>
                    <li>Automation Grade: Automatic</li>
                    <li>Type of refrigerant: HFO1234yf or R134a</li>
                    <li>Voltage: 220-240V 50/60 Hz</li>
                    <li>Vacuum pump: 51 l/min, vacuum level 0,2 mbar</li>
                    <li>Sealed compressor: 1/3 HP</li>
                    <li>Recovery speed: 300 g/min in liquid phase</li>
                    <li>Scale resolution: 10 gr</li>
                    <li>Oil scale resolution: 5 gr</li>
                    <li>Working temperature range: 11/49 °C</li>
                    <li>Filter system: 1 filter for humidity</li>
                    <li>Refrigerant tank: 12 liters refillable</li>
                    </ul>
                    <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                `
        },

        // Vacuum Cleaner
        "vacuum-cleaner": {
            images: [
                "/images_products/Vacuum-Cleaner.jpg"
            ],
            content: `
                        <h2>Vacuum Cleaner</h2>
                        <p><b>₹ 19,500/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                        <p><strong>Minimum Order Quantity: 01 Piece</strong></p>
                        <ul>
                        <li>30L HD stainless steel tank.</li>
                        <li>Powerful 1300 watts motor.</li>
                        <li>Wet and dry function.</li>
                        <li>Pipe/ EVA hose/ – 3 Mtr , Cord/Wire – 9 Mtr.</li>
                        <li>PET Washable Cartridge Filter.</li>
                        <li>Big fiber Pre-filter.</li>
                        <li>Combo Floor Nozzle.</li>
                        <li>Collection Bag.</li>
                        <li>2 rear big wheels.</li>
                        <li>2 Steel Wands.</li>
                        <li>1 Steel Elbow w/ Air Flow Adjuster.</li>
                        <li>Round Brush with Horse Hair.</li>
                        <li>Crevice Tool.</li>
                        <li>Large Drain.</li>
                        <li>Polyurethane Adaptor.</li>
                        </ul>
                        <p><strong>Additional Information:</strong></p>
                        <p>Delivery Time: one week</p>
                        <p>Packaging Details: One Pcs per Pack</p>
                        <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                    `
        },
         "hand-tool-kits": {
            images: [
                 "/images_products/Hand_Tool_Kits.jpg"
             ],
             content:  `<h2>Hand Tool Kits</h2>
                        <p><b>Hand Tool Kits</b></p>
                        `
        },
        // Tool Storage
        "stanley-6-drawer-roller-cabinet": {
        images: [
            "/images_products/Stanley-6-Drawer-Roller-Cabinet-(6).jpg",
            "/images_products/Stanley-6-Drawer-Roller-Cabinet-(7).jpg",
            "/images_products/Stanley-6-Drawer-Roller-Cabinet-(8).jpg",
            "/images_products/Stanley-6-Drawer-Roller-Cabinet-(9).jpg",
            "/images_products/Stanley-6-Drawer-Roller-Cabinet-(10).jpg",
            "/images_products/Stanley-6-Drawer-Roller-Cabinet-(11).jpg",
            "/images_products/Stanley-6-Drawer-Roller-Cabinet-(12).jpg",
        ],
        content: `
                    <h2>Stanley 6 Drawer Roller Cabinet</h2>
                    <p><b>₹ 23,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                    <p><strong>Minimum Order Quantity: 1 Piece</strong></p>
                    <ul>
                    <li>Brand: Stanley</li>
                    <li>Material: Mild Steel</li>
                    <li>Model Name/Number: STST98182-1</li>
                    <li>Size: 696 x 460 x 859mm</li>
                    <li>Number Of Drawers: 6</li>
                    <li>Features: Rust Proof</li>
                    <li>Warranty: 1 Year</li>
                    <li>Shape: Rectangular</li>
                    </ul>
                    <p>MILD STEEL HIGH QUALITY PRODUCT</p>
                    <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                `
        },

        // Hydraulic Jack
        "hydraulic-floor-trolley-jack": {
        images: [
            "/images_products/Hydraulic-Floor-Trolley-Jack.jpg"
        ],
        content:  `
                    <h2>Hydraulic Floor Trolley Jack</h2>
                    <p><b>₹ 12,500/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                    <p><strong>Minimum Order Quantity: 1 Piece</strong></p>
                    <p><strong>Product Brochure</strong></p>
                    <ul>
                    <li>Usage/Application: Automobile Industry</li>
                    <li>Material: Mild Steel</li>
                    <li>Color: Blue</li>
                    <li>Quantity Per Pack: One</li>
                    <li>Rising Height Mm: 469 MM</li>
                    </ul>
                    <p><strong>ART NO.</strong></p>
                    <ul>
                    <li>CAPACITY: 3 Ton</li>
                    <li>MIN. HEIGHT: 130 MM</li>
                    <li>MAX. HEIGHT: 462 MM</li>
                    <li>SADDLE SIZE: 119 MM</li>
                    <li>FRAME LENGTH: 617 MM</li>
                    <li>HANDLE LENGTH: 1,243 MM</li>
                    </ul>
                    <p>3 Ton capacity.</p>
                    <p>Soft rollers for smoother and silent operation.</p>
                    <p>Smooth lift of the vehicle</p>
                    <p><strong>Additional Information:</strong></p>
                    <p>Delivery Time: As per location</p>
                    <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                `
        },

        // Mig Welding Machine
        "mig-welding-machine": {
        images: [
            "/images_products/MIG_Welding_Machine.webp"
        ],
        content: `
                    <h2>MIG Welding Machine</h2>
                    <p><b>₹ 85,000/</b> Piece <a href="#" data-bs-toggle="modal" data-bs-target="#interestModal">Get Latest Price</a></p>
                    <button class="interest-button" data-bs-toggle="modal" data-bs-target="#interestModal">Yes, I am interested!</button>
                `
        },
        
        
    };

    return (  
        <div className="container product-page">
            <h1 className="text-center my-4">Our Products</h1>
            <div className="row">
                {Object.keys(products).map((key) => (
                    <div className="col-md-4" key={key}>
                        <div className="card mb-5 shadow-sm">
                            <div id={`carousel-${key}`} className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {products[key].images.map((image, index) => (
                                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                            <img src={image} className="d-block" alt={`Image of ${products[key].content.match(/<h2>(.*?)<\/h2>/)[1]}`} />
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${key}`} data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${key}`} data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title" dangerouslySetInnerHTML={{ __html: products[key].content.match(/<h2>(.*?)<\/h2>/)[1] }}></h5>
                                <p className="card-text" dangerouslySetInnerHTML={{ __html: products[key].content.match(/<p><b>(.*?)<\/b>/)[1] }}></p>

                                <div className="d-flex justify-content-between align-items-center w-100">
                                    {/* Read More Button */}
                                    <button className="btn btn-primary stylish-button" onClick={() => setSelectedProduct(products[key])} data-bs-toggle="modal" data-bs-target="#productModal">
                                        Read More
                                    </button>

                                    {/* WhatsApp Icon Only */}
                                    <a href="https://wa.me/+919794800900" className="whatsapp" target="_blank">
                                        <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
                                    </a>

                                    {/* Enquiry Button */}
                                    <button className="btn btn-secondary enquiry-button" data-bs-toggle="modal" data-bs-target="#interestModal">
                                        <FontAwesomeIcon icon={faEnvelope} size="sm" className="me-1" /> Enquiry
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Product Modal */}
            <div className="modal fade custom-modal" id="productModal" tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content modal-content-custom">
                        <div className="modal-header modal-header-custom">
                            <h5 className="modal-title" id="productModalLabel">Product Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex">
                            {selectedProduct && (
                                <>
                                    {/* Fixed Image Section */}
                                    <div className="image-container">
                                        <div id="modalCarousel" className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-inner">
                                                {selectedProduct.images.map((image, index) => (
                                                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                                        <img src={image} className="d-block w-100" alt={`Image of ${selectedProduct.content.match(/<h2>(.*?)<\/h2>/)[1]}`} />
                                                    </div>
                                                ))}
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#modalCarousel" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#modalCarousel" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Scrollable Content Section */}
                                    <div className="content-container" dangerouslySetInnerHTML={{ __html: selectedProduct.content }}></div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

           {/* Interest Modal */}
            <div className="modal fade" id="interestModal" tabIndex="-1" aria-labelledby="interestModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="interestModalLabel">Connect with Auto Tek</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="userName" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" id="userName" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                                    <input type="tel" className="form-control" id="mobileNumber" placeholder="Enter your mobile" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userCity" className="form-label">Your City</label>
                                    <input type="text" className="form-control" id="userCity" placeholder="Enter your city" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>  
        
    );  
};