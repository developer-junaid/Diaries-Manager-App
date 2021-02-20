import React from "react";
import DiarySummary from "./DiarySummary";
import { Link } from "react-router-dom";
import { setShowOtherDiaries } from "./../../store/actions/dataActions";
import { connect } from "react-redux";
const DiariesList = ({ diaries, authorId, data, setShowOtherDiaries }) => {
  console.log("showOtherDiaries", data.showOtherDiaries);
  // Checkbox
  let checkbox;
  data.showOtherDiaries
    ? (checkbox = (
        <input
          id="switch"
          type="checkbox"
          onChange={(e) => {
            setShowOtherDiaries(!data.showOtherDiaries);
          }}
        />
      ))
    : (checkbox = (
        <input
          id="switch"
          type="checkbox"
          onChange={(e) => {
            setShowOtherDiaries(!data.showOtherDiaries);
          }}
          defaultChecked
        />
      ));

  return (
    <div className="project-list section">
      <h4
        className="card-title"
        style={{ color: "#424242", textShadow: "2px 2px 2px #776a6a" }}
      >
        Diaries
        <span class="switch secondary-content">
          <label htmlFor="switch">
            <span
              style={{
                fontSize: "1.3rem",
                color: "brown",
                textShadow: "1px 1px 1px gray",
              }}
            >
              My Diaries Only
            </span>
            {checkbox}
            <span class="lever"></span>
          </label>
        </span>
      </h4>

      <div className="divider"></div>

      {diaries &&
        diaries.map((diary) => {
          // Show Private diaries to that user only
          if (diary.type === "private") {
            if (diary.authorId === authorId) {
              return (
                <DiarySummary
                  key={diary.id}
                  diary={diary}
                  authorId={authorId}
                  canEdit={true}
                />
              );
            }
          } else if (diary.type === "public") {
            // If user is authenticated, He can edit
            if (diary.authorId === authorId) {
              return (
                <DiarySummary key={diary.id} diary={diary} canEdit={true} />
              );
            } else {
              if (data.showOtherDiaries) {
                return (
                  <DiarySummary key={diary.id} diary={diary} canEdit={false} />
                );
              }
            }
          }
        })}
      <div className="fixed-action-btn">
        <Link
          title="create new diary"
          className="btn-floating btn-large  waves-effect hoverable waves-light green"
          to="/create"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

// Map State to props
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

// Map Dispatch to props
const mapDispatchToProps = (dispatch) => {
  // Attach these to props
  return {
    setShowOtherDiaries: (value) => dispatch(setShowOtherDiaries(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiariesList);
