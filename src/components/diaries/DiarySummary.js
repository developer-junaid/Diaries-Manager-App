import React from "react";

const DiarySummary = () => {
  return (
    <div className="card hoverable z-depth-2 project-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title">
          Title
          <a href="#!" class="secondary-content">
            <i class="material-icons">lock</i>
          </a>
        </div>

        <span class="new badge" data-badge-caption="saved entries">
          3
        </span>

        <p>Posted by Author Name</p>
        <p className="grey-text">23 September, 2am</p>
      </div>
    </div>
  );
};

export default DiarySummary;
