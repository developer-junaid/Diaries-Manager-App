import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { BeatLoader } from "react-spinners";
import moment from "moment";

function EntryDetails(props) {
  // handle loading state
  const [isLoading, setIsLoading] = useState(true);
  const { entries } = props;
  let entryTitle = "";
  let entryContent = "";
  let entryCreatedAt;

  // Split url to get id's (2 = diaryId) (3=entryId)
  const urlArray = props.match.url.split("/");
  const diaryId = urlArray[2];
  const entryId = urlArray[3];

  entries &&
    entries.map((entry) => {
      if (entry.id === entryId) {
        entryTitle = entry.title;
        entryContent = entry.content;
        entryCreatedAt = entry.createdAt;
      }
    });

  useEffect(() => {
    // If entries are there make loader false
    if (entries) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [entries]);

  if (isLoading) {
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
  } else {
    return (
      <div className="container section entry-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{entryTitle}</span>
            <pre style={{ width: "100%", overflow: "auto" }}>
              {entryContent}
            </pre>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>{moment(entryCreatedAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  }
}

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
)(EntryDetails);
