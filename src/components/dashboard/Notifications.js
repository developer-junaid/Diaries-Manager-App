import React from "react";
import moment from "moment";

const Notifications = ({ notifications }) => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map((notification) => {
                const id = notification.id;
                const user = notification.user;
                const content = notification.content;
                const time = notification.time;

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

export default Notifications;
