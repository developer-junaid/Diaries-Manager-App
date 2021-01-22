import React, { Component } from "react";
import { createDiary } from "../../store/actions/diaryActions";
import { connect } from "react-redux";

// SignIn Class Component
class CreateDiary extends Component {
  // State
  state = {
    title: "",
    entries: [],
    type: "public",
  };

  // Functions
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Create diary
    this.props.createDiary(this.state);
  };

  // Render
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new diary</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              required
              type="text"
              id="title"
              onChange={this.handleChange}
            />
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
  }
}

// Map Dispatch to props
const mapDispatchToProps = (dispatch) => {
  // Attach these to props
  return {
    // Take diary and pass to createDiary action creator
    createDiary: (diary) => dispatch(createDiary(diary)),
  };
};

export default connect(null, mapDispatchToProps)(CreateDiary);
