import React from "react";

function RecommendedItem({ item }) {
  return (
    <div className="mx-2 mb-4" style={{ cursor: "pointer" }}>
      <div
        className="shadow-sm"
        style={{
          position: "relative",
          height: "18rem",
          overflow: "hidden",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            height: "20rem",
            width: "18rem",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
      <div className="d-flex-col mt-4">
        <h5 className="text-center mb-2" style={{ fontWeight: "bold" }}>
          {item?.title}
        </h5>
        <p className="text-center mb-4 price-text">${item?.price}</p>
      </div>
    </div>
  );
}

export default RecommendedItem;
