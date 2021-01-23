import React from "react";

const EntrySummary = ({ entry }) => {
  const title = entry.title;
  const content = entry.content;

  return (
    <div className="card hoverable z-depth-2 entry-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title">
          {title}
          <a href="#!" title="edit" className="secondary-content">
            <i
              style={{ color: "#424242" }}
              className="material-icons edit-icon"
            >
              create
            </i>
          </a>
          <a
            href="#!"
            style={{ margin: "0 1rem" }}
            title="view"
            className="secondary-content"
          >
            <i
              style={{ color: "#424242" }}
              className="material-icons edit-icon"
            >
              visibility
            </i>
          </a>
        </div>

        <p>{content}</p>

        <p className="grey-text">23 September, 2am</p>
      </div>
    </div>
  );
};

export default EntrySummary;
