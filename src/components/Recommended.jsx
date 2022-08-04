import React from "react";

import RecommendedItem from "./RecommendedItem";

function Recommended({ recommended }) {
  return (
    <div className="mb-5">
      <h1>Recommended for you</h1>
      <div className="grid-recommended mt-4" style={{ display: "grid" }}>
        {recommended.map((item) => (
          <RecommendedItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Recommended;
