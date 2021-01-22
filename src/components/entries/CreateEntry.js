import React, { Component } from "react";

// SignIn Class Component
class CreateEntry extends Component {
  // State
  state = {
    title: "",
    content: "",
  };

  // Functions
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Sign User In
    console.log(this.state);
  };

  // Render
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new entry</h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              required
              type="text"
              id="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Entry Content</label>
            <textarea
              id="content"
              onChange={this.handleChange}
              className="materialize-textarea"
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateEntry;
