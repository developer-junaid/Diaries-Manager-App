import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { BeatLoader } from "react-spinners";

function EntryDetails(props) {
  // handle loading state
  const [isLoading, setIsLoading] = useState(true);
  const { entries } = props;
  let entryTitle = "";
  let entryContent = "";

  // Split url to get id's (2 = diaryId) (3=entryId)
  const urlArray = props.match.url.split("/");
  const diaryId = urlArray[2];
  const entryId = urlArray[3];

  entries &&
    entries.map((entry) => {
      if (entry.id === entryId) {
        entryTitle = entry.title;
        entryContent = entry.content;
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
            <p>{entryContent}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  }

  // Filter diaries and entries
  // props.diaries.map((diary) => {
  //   // Filter our diary
  //   if (diary.id === diaryId) {
  //     diaryName = diary.title;
  //     diary.entries.map((entry) => {
  //       if (entry.id === entryId) {
  //         entryTitle = entry.title;
  //         entryContent = entry.content;
  //       }
  //     });
  //   }
  // });
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

//  if (isLoading) {
//    return (
//      <div
//        style={{
//          width: "100%",
//          height: "100%",
//          minHeight: "90vh",
//          display: "flex",
//          justifyContent: "flex-end",
//          alignItems: "center",
//        }}
//      >
//        <BeatLoader loading />
//      </div>
//    );
//  } else {
//    return (
//      <div className="project-list section">
//        <h4 className="card-title" style={{ color: "#424242" }}>
//          {diaryName}
//        </h4>
//        <div className="divider"></div>

//        {entries &&
//          entries.map((entry) => (
//            <EntrySummary diaryId={id} key={entry.id} entry={entry} />
//          ))}

//        <div className="fixed-action-btn">
//          <Link
//            title="create new entry"
//            className="btn-floating btn-large  waves-effect hoverable waves-light green"
//            to={`/diary/${id}/create`}
//          >
//            <i className="material-icons">add</i>
//          </Link>
//        </div>
//      </div>
//    );
//  }
