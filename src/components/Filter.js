import React from "react";

function Filter() {
  return (
    <div className="filter__container">
      <h2>Filters</h2>
      <h3>ORDER STATUS</h3>
      <input type="checkbox" />
      <label> On the way</label>
      <br />
      <input type="checkbox" />
      <label> Delivered</label>
      <br />
      <input type="checkbox" />
      <label> Cancelled</label>
      <br />
      <input type="checkbox" />
      <label> Returned</label>
      <br />
      <h3>ORDER TIME</h3>
      <input type="checkbox" />
      <label> Last 30 days</label>
      <br />
      <input type="checkbox" />
      <label> 2020</label>
      <br />
      <input type="checkbox" />
      <label> 2019</label>
      <br />
      <input type="checkbox" />
      <label> Other</label>
      <br />
    </div>
  );
}

export default Filter;
