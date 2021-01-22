import React from "react";

function EntryDetails(props) {
  const id = props.match.params.id;

  return (
    <div className="container section entry-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Entry Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit illo aliquid quas, excepturi ut dicta quidem beatae
            explicabo libero veniam ad ipsa quis voluptate optio eligendi
            incidunt nam! Sed, consequatur!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Diary: Diary Name</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
}

export default EntryDetails;
