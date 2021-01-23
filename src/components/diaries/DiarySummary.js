/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { updateDiary } from "../../store/actions/diaryActions";

const DiarySummary = ({ diary, updateDiary }) => {
  // variables
  const title = diary.title;
  const type = diary.type;
  const totalEntries = diary.entries.length;

  // Handle Click
  const handleClick = () => {
    Swal.fire({
      title: "Diary Title",
      input: "text",
      inputValue: diary.title,
      showCancelButton: true,
      allowOutsideClick: false,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        // If cancelled
        Swal.fire({
          title: "Cancelled",
          confirmButtonColor: "red",
        });
      } else if (result.value) {
        // Update the value - Dispatch updateTitle - new value = result.value
        // Update diary
        updateDiary({ ...diary, title: result.value });

        // Alert success
        Swal.fire({
          title: "Success!",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="card hoverable z-depth-2 diary-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title">
          <a
            onClick={handleClick}
            title="edit"
            style={{ color: "#4aa69b" }}
            className="primary-content"
          >
            <i className="material-icons">create</i>
          </a>
          &nbsp;{title}
          <a
            title={type === "private" ? "private" : "public"}
            href="#!"
            className="secondary-content"
          >
            <i className="material-icons">
              {type === "private" ? "lock_outline" : "lock_open"}
            </i>
          </a>
        </div>

        <span
          className="new badge"
          data-badge-caption={
            totalEntries > 1 ? "saved entries" : "saved entry"
          }
        >
          {totalEntries}
        </span>

        <p>Posted by Author Name</p>

        <p className="grey-text">23 September, 2am</p>
        <div className="center-align">
          <Link
            to={"/diary/" + diary.id}
            className="btn btn-small waves-effect center-align waves-light"
            style={{ marginTop: "0.8rem", width: "100%" }}
          >
            View Entries
            <i className="material-icons right">send</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Map Dispatch to props
const mapDispatchToProps = (dispatch) => {
  // Attach these to props
  return {
    // Take diary and pass to updateDiary action creator
    updateDiary: (diary) => dispatch(updateDiary(diary)),
  };
};

export default connect(null, mapDispatchToProps)(DiarySummary);
