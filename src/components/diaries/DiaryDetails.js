import React, { useEffect, useState } from "react";
import EntriesList from "./../entries/EntriesList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { getFirebase } from "react-redux-firebase";

//Project Details
const DiaryDetails = (props) => {
  const id = props.match.params.id; // Get diary ID
  const { entries } = props;
  let entriesToShow = [];
  let [diaryName, setDiaryName] = useState("");

  // Get DiaryName from firebase
  const db = getFirebase().firestore();

  useEffect(() => {
    // Get DiaryName
    db.collection("diaries")
      .doc(id)
      .get()
      .then((snapshot) => {
        setDiaryName(snapshot.data().title);
      });
  }, []);

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
          <EntriesList id={id} entries={entriesToShow} diaryName={diaryName} />
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
