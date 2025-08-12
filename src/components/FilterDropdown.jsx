import React, { useState, useEffect } from "react";

const FilterDropdown = ({ onSort, resetTrigger }) => {
  const [sortValue, setSortValue] = useState("");

  useEffect(() => {
    setSortValue("");
  }, [resetTrigger]);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortValue(value);
    onSort(value);
  };

  return (
    <div className="filter__container">
      <select id="sort__filter" value={sortValue} onChange={handleSortChange}>
        <option value="">Sort by...</option>
        <option value="highest">Highest Rated</option>
        <option value="lowest">Lowest Rated</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
