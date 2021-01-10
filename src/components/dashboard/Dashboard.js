import React, { Component } from "react";
import DiariesList from "./../diaries/DiariesList";

// Dashboard
class Dashboard extends Component {
  render() {
    // Return Dashboard
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <DiariesList />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
