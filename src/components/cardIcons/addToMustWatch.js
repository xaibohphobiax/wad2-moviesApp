import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleMustWatch = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie);
  };
  return (
    <PlaylistAddIcon onClick={handleMustWatch}/>
  );
};

export default AddToMustWatchIcon;