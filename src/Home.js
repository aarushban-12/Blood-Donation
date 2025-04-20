import React from "react";
import Navbar from "./Navbar";
import "./App.css";

export default function Home() {
    return (
        <div>
            <Navbar />
        
            <div className="homepage">
      {/* Hero Section */}
      <section className="homepage-hero text-center py-5 text-white" style={{ backgroundColor: '#c82333' }}>
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">Donate Blood, Save Lives</h1>
          <p className="lead mb-4">Every drop counts — be a hero today</p>
          <button className="btn btn-light btn-lg">Become a Donor</button>
        </div>
      </section>

      {/* Info Section */}
      <section className="container py-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow border-0" style={{ backgroundColor: '#ffe5e5' }}>
              <div className="card-body">
                <h2 className="card-title h4 text-danger">Why Donate?</h2>
                <p className="card-text">Blood donation can save up to three lives. It's quick, easy, and truly heroic.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow border-0" style={{ backgroundColor: '#fff3cd' }}>
              <div className="card-body">
                <h2 className="card-title h4 text-warning">Who Can Donate?</h2>
                <p className="card-text">Most healthy individuals 17+ years old and over 110 lbs can donate. Check eligibility today.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow border-0" style={{ backgroundColor: '#d4edda' }}>
              <div className="card-body">
                <h2 className="card-title h4 text-success">How It Works</h2>
                <p className="card-text">The donation process takes less than an hour. Our team ensures it's safe and comfortable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-5">
        <h2 className="text-center text-danger mb-4">Benefits of Donating Blood</h2>
        <div className="row text-center g-4">
          <div className="col-md-3">
            <div className="bg-white p-4 shadow rounded">
              <h5>Health Check-Up</h5>
              <p>Each donor receives a mini health check, helping identify any potential health concerns early.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white p-4 shadow rounded">
              <h5>Improved Heart Health</h5>
              <p>Regular donation may help reduce iron buildup, lowering the risk of heart conditions.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white p-4 shadow rounded">
              <h5>Burns Calories</h5>
              <p>Donating blood can burn up to 650 calories per donation — a great way to give and benefit your body.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white p-4 shadow rounded">
              <h5>Mental Satisfaction</h5>
              <p>There's a great emotional reward in knowing your donation could save lives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5" style={{ backgroundColor: '#f8d7da' }}>
        <h2 className="h3 mb-4 text-danger">Ready to make a difference?</h2>
        <button className="btn btn-danger btn-lg">Schedule Your Donation</button>
      </section>
    </div>
      </div>
    );
  }