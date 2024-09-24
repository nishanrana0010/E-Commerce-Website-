import React from "react";
import "../dashboard/dashboard.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-main">
        <div className="fashion-banner">
          <div className="text-content">
            <h2>Women's fashion</h2>
            <p>
              Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/womens" className="btn">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="side-banners">
          <div className="side-banner mens-fashion">
            <div className="button-content">
              <h3>Men's fashion</h3>
              <p>358 items</p>
              <Link to="/mens" className="btn">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="side-banner cosmetics">
            <div className="button-content">
              <h3>Kids fashion</h3>
              <p>159 items</p>
              <Link to="/kids" className="btn">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
