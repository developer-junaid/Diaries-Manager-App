import React from "react";
import EntrySummary from "./EntrySummary";
import { Link } from "react-router-dom";

const EntriesList = ({ id, entries }) => {
  return (
    <div className="project-list section">
      <h4 className="card-title" style={{ color: "#424242" }}>
        Entries
      </h4>
      <div className="divider"></div>

      {entries &&
        entries.map((entry) => <EntrySummary key={entry.id} entry={entry} />)}

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
