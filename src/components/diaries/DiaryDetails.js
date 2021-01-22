import React from "react";
import EntriesList from "./../entries/EntriesList";

//Project Details
const DiaryDetails = (props) => {
  const id = props.match.params.id; // Get diary ID

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <EntriesList id={id} />
        </div>
      </div>
    </div>
  );
};

export default DiaryDetails;
