import React, { useState, useEffect } from "react";
import EntrySummary from "./EntrySummary";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { Redirect } from "react-router-dom";

const EntriesList = ({ id, entries, diaryName, showButton }) => {
  // handle loading state
  const [isLoading, setIsLoading] = useState(true);
  let button = showButton ? (
    <Link
      title="create new entry"
      className="btn-floating btn-large  waves-effect hoverable waves-light green"
      to={`/diary/${id}/create`}
    >
      <i className="material-icons">add</i>
    </Link>
  ) : null;

  useEffect(() => {
    // If entries are there make loader false
    if (entries.length) {
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
    // Redirect
    if (entries.length < 1) return <Redirect to="/" />;
    return (
      <div className="project-list section">
        <h4 className="card-title" style={{ color: "#424242" }}>
          {diaryName}
        </h4>
        <div className="divider"></div>

        {entries &&
          entries.map((entry) => (
            <EntrySummary
              diaryId={id}
              key={entry.id}
              isAuthenticated={showButton}
              entry={entry}
            />
          ))}
        <div className="fixed-action-btn">{button}</div>
      </div>
    );
  }
};

export default EntriesList;
