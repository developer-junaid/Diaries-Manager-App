import React from "react";
import moment from "moment";
import { connect } from "react-redux";

const Notifications = ({ notifications, userProfile }) => {
  return (
    <div className="section">
      <h4
        className="card-title"
        style={{ color: "#424242", textShadow: "2px 2px 2px #776a6a" }}
      >
        Notifications
      </h4>
      <div className="divider"></div>
      <div className="card z-depth-0">
        <div className="card-content">
          <ul className="notifications">
            {notifications &&
              notifications.map((notification) => {
                const id = notification.id;
                let user = notification.user;
                const content = notification.content;
                const time = notification.time;

                if (
                  user === `${userProfile.firstName} ${userProfile.lastName}`
                ) {
                  user = "You";
                }

                // Return
                return (
                  <li key={id}>
                    <span className="pink-text">{user} </span>
                    <span>{content}</span>
                    <div className="grey-text note-date">
                      {moment(time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Map State to props
const mapStateToProps = (state) => {
  return {
    userProfile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Notifications);
