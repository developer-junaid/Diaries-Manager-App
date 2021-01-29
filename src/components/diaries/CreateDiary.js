import React, { useState } from "react";
import { createDiary } from "../../store/actions/diaryActions";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { Redirect, useHistory } from "react-router-dom";

// SignIn Class Component
const CreateDiary = (props) => {
  const history = useHistory();

  // State
  const [state, setState] = useState({
    title: "",
    type: "public",
    entryIds: [],
  });

  // Redirect
  if (!props.auth.uid) return <Redirect to="/signin" />;

  // Functions
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create diary
    props.createDiary(state);
    // Show alert
    Swal.fire({
      icon: "success",
      title: "Diary Created!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      // Redirect to dashboard
      history.push("/");
    });
  };

  // Render
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create new diary</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input required type="text" id="title" onChange={handleChange} />
        </div>
        Type:
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              id="type"
              required
              defaultChecked
              value="public"
              onChange={handleChange}
            />
            <span>Public</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              id="type"
              required
              type="radio"
              value="private"
              onChange={handleChange}
            />
            <span>Private</span>
          </label>
        </p>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

// Map state
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

// Map Dispatch to props
const mapDispatchToProps = (dispatch) => {
  // Attach these to props
  return {
    // Take diary and pass to createDiary action creator
    createDiary: (diary) => dispatch(createDiary(diary)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDiary);
