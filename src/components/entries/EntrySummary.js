import React from "react";
import { connect } from "react-redux";
import { updateEntry } from "../../store/actions/entryActions";

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
// Map Dispatch to props
const mapDispatchToProps = (dispatch) => {
  // Attach these to props
  return {
    // Take diary and pass to updateDiary action creator
    updateEntry: (entry) => dispatch(updateEntry(entry)),
  };
};

export default connect(null, mapDispatchToProps)(EntrySummary);
