import React from "react";
import EntriesList from "./../entries/EntriesList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

//Project Details
const DiaryDetails = (props) => {
  const id = props.match.params.id; // Get diary ID
  const { entries } = props;
  let entriesToShow = [];

  entries &&
    entries.map((entry) => {
      if (id === entry.diaryId) {
        entriesToShow.push(entry);
      }
    });

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <EntriesList id={id} entries={entriesToShow} diaryName="DUMMY" />
        </div>
      </div>
    </div>
  );
};

// Map State to props
const mapStateToProps = (state) => {
  return {
    entries: state.firestore.ordered.entries,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "entries" }, // Collection entries
  ])
)(DiaryDetails);
