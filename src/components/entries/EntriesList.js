import React from "react";
import EntrySummary from "./EntrySummary";
import { Link } from "react-router-dom";

const EntriesList = ({ id }) => {
  return (
    <div className="project-list section">
      <h4>Entries</h4>
      <div className="divider"></div>
      <EntrySummary />
      <EntrySummary />
      <EntrySummary />
      <div className="fixed-action-btn">
        <Link
          title="create new entry"
          className="btn-floating btn-large  waves-effect hoverable waves-light green"
          to={`/diary/${id}/create`}
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default EntriesList;
