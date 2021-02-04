import React, { useState } from "react";
import { updateDiary } from "../../store/actions/diaryActions";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

// EditDiary  Component
const EditDiary = (props) => {
  const history = useHistory();
  const urlArray = props.match.url.split("/");
  const diaryId = urlArray[2];
  let diaryTitle = "";
  let diaryType = "";

  // Map
  props.diaries.map((diary) => {
    if (diary.id === diaryId) {
      diaryTitle = diary.title;
      diaryType = diary.type;
    }
  });

  // State
  const [state, setState] = useState({
    diaryId: diaryId,
    title: diaryTitle,
    type: diaryType,
    entryIds: [],
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
    // Create diary
    props.updateDiary(state);
    // Show alert
    Swal.fire({
      icon: "success",
      title: "Diary Updated!",
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
        <h5 className="grey-text text-darken-3">Edit Diary</h5>
        <div className="input-field">
          <label htmlFor="title"></label>
          <input
            required
            defaultValue={diaryTitle}
            type="text"
            id="title"
            onChange={handleChange}
          />
        </div>
        Type:
        {diaryType === "public" ? (
          <>
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
          </>
        ) : (
          <>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  id="type"
                  required
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
                  defaultChecked
                  onChange={handleChange}
                />
                <span>Private</span>
              </label>
            </p>
          </>
        )}
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
    diaries: state.firestore.ordered.diaries,
  };
};

// Map Dispatch to props
const mapDispatchToProps = (dispatch) => {
  // Attach these to props
  return {
    // Take entry and pass to updateEntry action creator
    updateDiary: (diary) => dispatch(updateDiary(diary)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: "dairies" }, // Collection diaries
  ])
)(EditDiary);
