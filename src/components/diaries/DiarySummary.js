import React from "react";

const DiarySummary = ({ diary }) => {
  // variables
  const title = diary.title;
  const type = diary.type;

  return (
    <div className="card hoverable z-depth-2 diary-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title">
          {title}
          <a href="#!" className="secondary-content">
            <i className="material-icons">
              {type === "private" ? "lock_outline" : "lock_open"}
            </i>
          </a>
        </div>

        <span className="new badge" data-badge-caption="saved entries">
          3
        </span>

        <p>Posted by Author Name</p>
        <p className="grey-text">23 September, 2am</p>
      </div>
    </div>
  );
};

export default DiarySummary;
