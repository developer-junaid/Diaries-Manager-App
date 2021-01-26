import React from "react";
import { connect } from "react-redux";

function EntryDetails(props) {
  let entryTitle = "";
  let entryContent = "";
  let diaryName = "";
  // Split url to get id's (2 = diaryId) (3=entryId)
  const urlArray = props.match.url.split("/");
  const diaryId = urlArray[2];
  const entryId = urlArray[3];

  // Filter diaries and entries
  props.diaries.map((diary) => {
    // Filter our diary
    if (diary.id === diaryId) {
      diaryName = diary.title;
      diary.entries.map((entry) => {
        if (entry.id === entryId) {
          entryTitle = entry.title;
          entryContent = entry.content;
        }
      });
    }
  });

  return (
    <div className="container section entry-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{entryTitle}</span>
          <p>{entryContent}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Diary: {diaryName}</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
}

// Map State to props
const mapStateToProps = (state) => {
  return {
    diaries: state.diary.diaries,
  };
};

export default connect(mapStateToProps)(EntryDetails);
