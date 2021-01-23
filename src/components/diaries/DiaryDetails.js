import React from "react";
import EntriesList from "./../entries/EntriesList";
import { connect } from "react-redux";

//Project Details
const DiaryDetails = (props) => {
  const id = props.match.params.id; // Get diary ID
  const { diaries } = props;
  let entries = [];
  let diaryName = "";

  diaries.map((diary) => {
    // Store this diarie's entries
    if (id === diary.id) {
      entries = diary.entries;
      diaryName = diary.title;
    }
  });

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <EntriesList id={id} entries={entries} diaryName={diaryName} />
        </div>
      </div>
    </div>
  );
};

// Map State to props
const mapStateToProps = (state) => {
  return {
    diaries: state.diary.diaries,
  };
};

export default connect(mapStateToProps)(DiaryDetails);
