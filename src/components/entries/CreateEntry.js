import React, { useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createEntry } from "../../store/actions/entryActions";

// SignIn Class Component
const CreateEntry = (props) => {
  const history = useHistory();
  const diaryId = props.match.params.id;

  // State
  const [state, setState] = useState({
    title: "",
    content: "",
    diaryId: diaryId,
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
    props.createEntry(state);
    // Show alert
    Swal.fire({
      icon: "success",
      title: "Entry Created!",
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
        <h5 className="grey-text text-darken-3">Create new entry</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input required type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Entry Content</label>
          <textarea
            id="content"
            onChange={handleChange}
            className="materialize-textarea"
          ></textarea>
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

// Map Dispatch to props
const mapDispatchToProps = (dispatch) => {
  // Attach these to props
  return {
    // Take entry and pass to createEntry action creator
    createEntry: (entry) => dispatch(createEntry(entry)),
  };
};

export default connect(null, mapDispatchToProps)(CreateEntry);
