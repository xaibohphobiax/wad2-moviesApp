import React from "react";

const MovieReview =  ({ credits }) => {
    
  return (
    <>
      <p>Played By: {credits.name} </p>
      <p>{credits.character} </p>
      <p>{credits.known_for_apartment} </p>
    </>
  );
};
export default MovieReview