/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import { updateEntry } from "../../store/actions/entryActions";
import { deleteEntry } from "../../store/actions/entryActions";
import { useHistory } from "react-router-dom";
import moment from "moment";

const EntrySummary = (props) => {
  const title = props.entry.title;
  const content = props.entry.content;
  const createdAt = props.entry.createdAt;
  const history = useHistory();

  // Handle Clicks
  const handleEditClick = () => {
    history.push(`/diary/${props.diaryId}/${props.entry.id}/edit`);
  };

  const handleDelete = () => {
    // Logic
    props.deleteEntry(props.entry);
  };

  const handleViewClick = () => {
    history.push(`/diary/${props.diaryId}/${props.entry.id}`);
  };

  let editButton = props.isAuthenticated ? (
    <a onClick={handleEditClick} title="edit" className="secondary-content">
      <i style={{ color: "#424242" }} className="material-icons edit-icon">
        create
      </i>
    </a>
  ) : null;

  let deleteButton = props.isAuthenticated ? (
    <a
      onClick={handleDelete}
      title="delete"
      style={{ margin: "0 1rem" }}
      className="secondary-content"
    >
      <i style={{ color: "#424242" }} className="material-icons edit-icon">
        delete
      </i>
    </a>
  ) : null;

  return (
    <div className="card hoverable z-depth-2 entry-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title">
          {title}

          {deleteButton}
          {editButton}
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

        <p className="truncate">{content}</p>

        <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
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
    deleteEntry: (entry) => dispatch(deleteEntry(entry)),
  };
};

export default connect(null, mapDispatchToProps)(EntrySummary);
