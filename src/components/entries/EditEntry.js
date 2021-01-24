import React, { useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { updateEntry } from "../../store/actions/entryActions";

// SignIn Class Component
const EditEntry = (props) => {
  const history = useHistory();

  // Split url to get id's (2 = diaryId) (3=entryId)
  const urlArray = props.match.url.split("/");
  const diaryId = urlArray[2];
  const entryId = urlArray[3];
  let entryTitle = "";
  let entryContent = "";

  // Filter diaries and entries
  props.diaries.map((diary) => {
    // Filter our diary
    if (diary.id === diaryId) {
      diary.entries.map((entry) => {
        if (entry.id === entryId) {
          entryTitle = entry.title;
          entryContent = entry.content;
        }
      });
    }
  });

  // State
  const [state, setState] = useState({
    title: entryTitle,
    content: entryContent,
  });

  // Functions
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create entry
    props.updateEntry(state);
    // Show alert
    Swal.fire({
      icon: "success",
      title: "Entry updated!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      // Redirect to dashboard
      history.push(`/diary/${diaryId}`);
    });
  };

  // Render
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Edit entry</h5>
        <div className="input-field">
          <label htmlFor="title"></label>
          <input
            required
            defaultValue={entryTitle}
            type="text"
            id="title"
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content"></label>
          <textarea
            id="content"
            onChange={handleChange}
            defaultValue={entryContent}
            className="materialize-textarea"
          ></textarea>
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Confirm</button>
        </div>
      </form>
    </div>
  );
};
// Map State to props
const mapStateToProps = (state) => {
  return {
    diaries: state.diary.diaries,
  };
};

// Map Dispatch to props
const mapDispatchToProps = (dispatch) => {
  // Attach these to props
  return {
    // Take entry and pass to updateEntry action creator
    updateEntry: (entry) => dispatch(updateEntry(entry)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEntry);
