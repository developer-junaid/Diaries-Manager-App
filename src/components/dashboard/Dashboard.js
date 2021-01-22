import React, { Component } from "react";
import DiariesList from "./../diaries/DiariesList";
import { connect } from "react-redux";

// Dashboard
class Dashboard extends Component {
  render() {
    const { diaries } = this.props;
    // Return Dashboard
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <DiariesList diaries={diaries} />
          </div>
        </div>
      </div>
    );
  }
}

// Map State to props
const mapStateToProps = (state) => {
  return {
    diaries: state.diary.diaries,
  };
};

export default connect(mapStateToProps)(Dashboard);
