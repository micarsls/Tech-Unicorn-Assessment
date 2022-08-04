import React from "react";

function ProductCard({ item }) {
  return (
    <div className="mx-2 mb-4 pb-4" style={{ cursor: "pointer" }}>
      <div
        className="shadow-sm"
        style={{
          position: "relative",
          height: "20rem",
          overflow: "hidden",
          backgroundColor: "white",
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
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            backgroundColor: "#fff",
            padding: "5px",
            borderRadius: "50%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#f86338"
            strokeWidth={2}
            style={{ width: "30px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
      <div className="d-flex-col mt-2 product-description">
        <p
          className="text-center mb-2 category-text"
          style={{
            textTransform: "capitalize",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          {item.category}
        </p>
        <p className="text-center mb-1" style={{ fontSize: "12px" }}>
          {item.title}
        </p>
        <h5
          className="text-center mb-1 price-text"
          style={{ fontWeight: "bold" }}
        >
          $ {item.price}
        </h5>
      </div>
    </div>
  );
}

export default ProductCard;
