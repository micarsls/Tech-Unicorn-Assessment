import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

function Products({ data, isLoading, error, setSearchParams, searchParams }) {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const handleSearchChange = (e) => {
    setSearchParams({ ...searchParams, keyword: e.target.value });
  };

  const paginate = (array, page_size, page_number) => {
    return array.slice(
      page_number * page_size,
      page_number * page_size + page_size
    );
  };

  // Resets page to 1 to prevent showing empty pages
  useEffect(() => {
    setPage(0);
  }, [data]);

  return (
    <div className="d-flex-col" style={{ width: "80%" }}>
      <div className="d-flex mx-2">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search products"
            aria-label="Search products"
            aria-describedby="button-addon2"
            onChange={handleSearchChange}
            style={{ border: "2px solid #f86338", borderRight: "none" }}
          />
          <div
            className="btn"
            type="button"
            id="button-addon2"
            style={{
              border: "2px solid #f86338",
              borderLeft: "none",
              borderRight: "2px solid #f86338",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
              strokeWidth={2}
              style={{ width: "20px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mx-2 align-items-center">
        <div>
          Showing {data.length !== 0 ? `1-${data.length}` : "0"} Results
        </div>
        <div className="d-flex align-items-center">
          <select
            className="form-select"
            name="sort"
            defaultValue={searchParams.sort}
            onChange={(e) => {
              setSearchParams({ ...searchParams, sort: e.target.value });
            }}
          >
            <option value="asc">Ascending Order</option>
            <option value="desc">Descending Order</option>
          </select>
        </div>
      </div>
      {/* Shows the products */}
      <div className="grid-products-cols mt-4" style={{ display: "grid" }}>
        {paginate(data, itemsPerPage, page)?.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
      <nav className="d-flex justify-content-center custom-pagination">
        <div style={{ cursor: "pointer" }}>
          <div
            aria-label="Previous"
            style={{ color: page > 0 ? "#f86338" : "#92929d", border: "none" }}
            onClick={() => {
              setPage(0);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ width: "20px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </div>
        </div>
        <div style={{ cursor: "pointer" }}>
          <div
            aria-label="Previous"
            style={{ color: page > 0 ? "#f86338" : "#92929d", border: "none" }}
            onClick={() => {
              setPage(page > 0 ? page - 1 : 0);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ width: "20px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </div>
        {/* Create an array of page numbers based on number of items and items per page */}
        {Array.from(
          Array(
            parseInt(data.length > 0 ? data.length / itemsPerPage + 1 : 1)
          ).keys()
        ).map((page_item) => (
          <div
            key={page_item}
            style={{
              cursor: "pointer",
            }}
          >
            <div
              style={{
                backgroundColor:
                  parseInt(page) === parseInt(page_item) ? "#f86338" : "#fff",
                color:
                  parseInt(page) === parseInt(page_item) ? "#fff" : "#92929d",
                border: "none",
                borderRadius: "50%",
              }}
              onClick={() => {
                setPage(page_item);
              }}
            >
              {page_item + 1}
            </div>
          </div>
        ))}
        <div style={{ cursor: "pointer" }}>
          <div
            aria-label="Next"
            style={{
              color: page < parseInt(data.length / 6) ? "#f86338" : "#92929d",
              border: "none",
            }}
            onClick={() => {
              setPage(
                page < parseInt(data.length / 6)
                  ? page + 1
                  : parseInt(data.length / 6)
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ width: "20px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <div style={{ cursor: "pointer" }}>
          <div
            aria-label="Next"
            style={{
              color: page < parseInt(data.length / 6) ? "#f86338" : "#92929d",
              border: "none",
            }}
            onClick={() => {
              setPage(parseInt(data.length / 6));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ width: "20px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Products;
