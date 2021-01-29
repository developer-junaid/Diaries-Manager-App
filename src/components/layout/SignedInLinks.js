/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "./../../store/actions/authActions";
import { connect } from "react-redux";

// Navbar
const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <a onClick={() => props.signOut()}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

// Map Dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
