import React from "react";
import Layout from "../components/Layout/Layout.js";
import "../styles/Dashboard.css";// Corrected import path

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="stats">
          <div className="card">
            <h2>Total Jobs</h2>
            <p>25</p>
          </div>
          <div className="card">
            <h2>Applications</h2>
            <p>120</p>
          </div>
          <div className="card">
            <h2>Hires</h2>
            <p>10</p>
          </div>
        </div>
        <button className="btn-post-job">Post a New Job</button>
      </div>
    </Layout>
  );
};

export default Dashboard;
