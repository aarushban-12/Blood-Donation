import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function About() {
  return (
    <div>
        <Navbar/>
    
        <div className="about-us py-5" style={{ backgroundColor: '#fff0f0' }}>
      <div className="container">
        <h1 className="text-center text-danger mb-4">About Us</h1>
        <p className="lead text-center mb-5">
          We are a dedicated nonprofit organization focused on connecting blood donors with recipients in need. Founded on the belief that no one should suffer due to a shortage of blood, our platform is designed to raise awareness, simplify the donation process, and foster a culture of compassion and contribution.
        </p>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="p-4 bg-white shadow rounded">
              <h4 className="text-danger">Our Mission</h4>
              <p>
                To build a bridge between donors and those in critical need of blood. We aim to eliminate the fear and uncertainty around donating blood by providing education, support, and easy access to donation opportunities. Our mission is driven by empathy and the unwavering belief that a single act of kindness can save a life.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-white shadow rounded">
              <h4 className="text-danger">Our Vision</h4>
              <p>
                A world where every person understands the power of blood donation. We envision communities that are resilient and self-sustaining when it comes to emergency blood supply, and where donors are celebrated and supported. Through innovation, education, and outreach, we strive to make blood shortages a thing of the past.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 bg-white shadow rounded h-100">
              <h5 className="text-danger">Community Driven</h5>
              <p>
                We partner with schools, colleges, businesses, and local organizations to host blood drives and awareness events. Every community has the potential to become self-reliant in managing its blood needs.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white shadow rounded h-100">
              <h5 className="text-danger">Education & Awareness</h5>
              <p>
                Our educational campaigns demystify the donation process, address common fears, and highlight the science behind blood transfusion, making people more confident and willing to participate.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white shadow rounded h-100">
              <h5 className="text-danger">Technology First</h5>
              <p>
                Our online tools and mobile platforms make it simple to locate nearby donation centers, schedule appointments, and track your donation history, ensuring a seamless experience for all users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
