import React, { useState, useEffect } from "react";
import EntrySummary from "./EntrySummary";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const EntriesList = ({ id, entries, diaryName }) => {
  // handle loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If entries are there make loader false
    if (entries.length) {
      setIsLoading(false);
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
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <BeatLoader loading />
      </div>
    );
  } else {
    return (
      <div className="project-list section">
        <h4 className="card-title" style={{ color: "#424242" }}>
          {diaryName}
        </h4>
        <div className="divider"></div>

        {entries &&
          entries.map((entry) => (
            <EntrySummary diaryId={id} key={entry.id} entry={entry} />
          ))}

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
  }
};

export default EntriesList;
