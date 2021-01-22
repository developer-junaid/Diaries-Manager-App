import React from "react";
import DiarySummary from "./DiarySummary";
import { Link } from "react-router-dom";

const DiariesList = ({ diaries }) => {
  console.log(diaries);

  return (
    <div className="project-list section">
      <h4 className="card-title" style={{ color: "#424242" }}>
        Diaries
      </h4>
      <div className="divider"></div>
      <DiarySummary />
      <DiarySummary />
      <DiarySummary />
      <div className="fixed-action-btn">
        <Link
          title="create new diary"
          className="btn-floating btn-large  waves-effect hoverable waves-light green"
          to="/create"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default DiariesList;
