import React from "react";
import DiarySummary from "./DiarySummary";
import { Link } from "react-router-dom";

const DiariesList = () => {
  return (
    <div className="project-list section">
      <DiarySummary />
      <DiarySummary />
      <DiarySummary />
      <div class="fixed-action-btn">
        <Link
          title="add diary"
          class="btn-floating btn-large waves-effect waves-light green"
          to="/create_diary"
        >
          <i class="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default DiariesList;
