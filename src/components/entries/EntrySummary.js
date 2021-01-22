import React from "react";

const EntrySummary = () => {
  return (
    <div className="card hoverable z-depth-2 entry-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title">
          Entry Title
          <a href="#!" title="edit" class="secondary-content">
            <i class="material-icons">create</i>
          </a>
          <a
            href="#!"
            style={{ margin: "0 1rem" }}
            title="view"
            class="secondary-content"
          >
            <i class="material-icons">visibility</i>
          </a>
        </div>

        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ipsa
          praesentium quis accusamus dignissimos voluptatum vel cumque
          reprehenderit fugiat odit dolorem maiores dolore ullam sunt doloremque
          aut veritatis, est sint.
        </p> */}
        <p class="truncate">
          This is a dummy content for entries, if this content is too long, it
          will be truncated, like this
        </p>

        <p className="grey-text">23 September, 2am</p>
      </div>
    </div>
  );
};

export default EntrySummary;
