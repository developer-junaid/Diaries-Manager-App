import React, { Component } from "react";
import DiariesList from "./../diaries/DiariesList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { BeatLoader } from "react-spinners";
import { Redirect } from "react-router-dom";

// Dashboard
class Dashboard extends Component {
  render() {
    const { diaries, auth } = this.props;
    console.log(auth);
    if (!auth.uid) return <Redirect to="/signin" />;

    // Return Dashboard
    if (diaries) {
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

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BeatLoader loading />
      </div>
    );
  }
}

// Map State to props
const mapStateToProps = (state) => {
  return {
    diaries: state.firestore.ordered.diaries,
    entries: state.firestore.ordered.entries,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "diaries" }, // Collection diaries
  ])
)(Dashboard);
