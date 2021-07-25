import React from "react";
import StarRatingComponent from 'react-star-rating-component';


const Filter = (props) => {
  return (
    <div>
      <div className="searchMovie">
        <input
          onChange={props.handleSearch}
          type="text"
          placeholder="Hook a movie ..."
        />
      </div>
      <div className="movieRate">
        <StarRatingComponent
          name="rate"
          onStarClick={props.handleRate}
          emptyStarColor="#e6d1aa"
          starColor="darkgoldenrod"
        />
      </div>
    </div>
  );
};

export default Filter;
