/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import { updateEntry } from "../../store/actions/entryActions";
import { useHistory } from "react-router-dom";

const EntrySummary = (props) => {
  const title = props.entry.title;
  const content = props.entry.content;
  const createdAt = props.entry.createdAt;
  const history = useHistory();

  // Handle Clicks
  const handleEditClick = () => {
    history.push(`/diary/${props.diaryId}/${props.entry.id}/edit`);
  };

  const handleViewClick = () => {
    history.push(`/diary/${props.diaryId}/${props.entry.id}`);
  };

  return (
    <div className="card hoverable z-depth-2 entry-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title">
          {title}
          <a
            onClick={handleEditClick}
            title="edit"
            className="secondary-content"
          >
            <i
              style={{ color: "#424242" }}
              className="material-icons edit-icon"
            >
              create
            </i>
          </a>
          <a
            onClick={handleViewClick}
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

        <p className="grey-text">{createdAt.seconds}</p>
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
