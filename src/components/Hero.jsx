import React from "react";

function Hero() {
  return (
    <div className="d-flex hero" style={{ marginBottom: "5rem" }}>
      <div className="d-flex align-items-center col-3">
        <div className="d-flex-col">
          <h6 style={{ fontWeight: "bold" }}>{"Home > Shop"}</h6>
          <h1 style={{ fontWeight: "bold" }}>Shop</h1>
        </div>
      </div>
      <div className="col-9" style={{ backgroundColor: "#e2e2ea" }}></div>
    </div>
  );
}

export default Hero;
