import React, { useEffect, useState } from "react";
import EntriesList from "./../entries/EntriesList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { getFirebase } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

//Project Details
const DiaryDetails = (props) => {
  const id = props.match.params.id; // Get diary ID
  const { entries, auth } = props;
  let authorId = auth.uid;
  let entriesToShow = [];
  let [diaryName, setDiaryName] = useState("");
  let [showButton, setShowButton] = useState(false);
  // Get DiaryName from firebase
  const db = getFirebase().firestore();

  useEffect(() => {
    // Get DiaryName
    db.collection("diaries")
      .doc(id)
      .get()
      .then((snapshot) => {
        setDiaryName(snapshot.data().title);
        if (snapshot.data().authorId === authorId) {
          setShowButton(true);
        }
      })
      .catch((err) => {
        console.log("NO DATA FOUND");
      });
  }, []);

  entries &&
    entries.map((entry) => {
      if (id === entry.diaryId) {
        entriesToShow.push(entry);
      }
    });

  // console.log("diary", diaryAuthorId);
  // console.log("author", authorId);

  // Redirect
  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <EntriesList
            id={id}
            entries={entriesToShow}
            diaryName={diaryName}
            showButton={showButton}
          />
        </div>
      </div>
    </div>
  );
};

// Map State to props
const mapStateToProps = (state) => {
  return {
    entries: state.firestore.ordered.entries,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "entries" }, // Collection entries
  ])
)(DiaryDetails);
