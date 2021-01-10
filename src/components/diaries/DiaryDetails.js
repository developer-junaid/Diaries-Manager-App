import React from "react";

//Project Details
const DiaryDetails = (props) => {
  const id = props.match.params.id; // Get diary ID

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Title - {id}</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            molestias odio soluta laboriosam. Sunt pariatur, laborum harum est
            facilis obcaecati, expedita asperiores nihil soluta deserunt
            explicabo quisquam inventore cumque iusto.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Author Name</div>
          <div>23 September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default DiaryDetails;
