import React, { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Products from "../components/Products";
import SidePanel from "../components/SidePanel";
import { BASE_URL } from "../config/main-config";
import Recommended from "../components/Recommended";

function Shop() {
  // Default parameters
  const [searchParams, setSearchParams] = useState({
    keyword: "",
    price: "1000",
    color: "",
    category: null,
    sort: "asc",
  });
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Recommended Items
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    // Get data before hand as the api has limited number of parameters
    const getData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setSelected(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    // Get recommended items on page load
    const getRecommended = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products?limit=8`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setRecommended(actualData);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
    getRecommended();
  }, []);

  // Array of filtered items
  const [selected, setSelected] = useState([]);

  const sort = () => {
    let _data = [];
    let matching_category = [];
    let matching_keyword = [];

    // Check if a cetegory is selected
    if (searchParams.category) {
      matching_category = data.filter(
        (item) => item.category === searchParams.category
      );
    }
    // Copy data if none
    else if (!searchParams.category) {
      matching_category = data;
    }
    // Check if data is already filtered then filter using keyword/search term
    if (matching_category.length > 0) {
      matching_keyword = matching_category.filter((item) =>
        item.title.toLowerCase().includes(searchParams.keyword)
      );
    }
    // Use uncategorized data if there is no category selected
    else {
      matching_keyword = matching_category.filter((item) =>
        item.title.toLowerCase().includes(searchParams.keyword)
      );
    }

    // Check if data has been filtered using keyword
    if (matching_keyword.length > 0) {
      _data = matching_keyword.filter(
        (item) => item.price <= parseFloat(searchParams.price)
      );
    }
    // else if (matching_category.length > 0) {
    //   console.log(matching_category);
    //   _data = matching_category.filter(
    //     (item) => item.price <= parseFloat(searchParams.price)
    //   );
    // }
    // else {
    //   _data = data.filter(
    //     (item) => item.price <= parseFloat(searchParams.price)
    //   );
    // }

    // Sort by price according to default or user's parameters
    if (searchParams.sort === "asc") {
      _data.sort((a, b) => a.price - b.price);
    } else {
      _data.sort((a, b) => b.price - a.price);
    }

    // Set final list of products for display
    setSelected(_data);
  };

  // Filter data when search parameters change
  useEffect(() => {
    sort();
  }, [searchParams]);

  return (
    <div className="container">
      <Hero />
      <div className="d-flex" style={{ marginBottom: "10rem" }}>
        <SidePanel
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
        <Products
          setSearchParams={setSearchParams}
          searchParams={searchParams}
          data={selected}
          isLoading={isLoading}
          error={error}
        />
      </div>
      <Recommended recommended={recommended} />
    </div>
  );
}

export default Shop;
