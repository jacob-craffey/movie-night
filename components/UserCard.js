import React from "react";
import { removeMovie, selectItems } from "../slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";

function UserCard({ name }) {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  console.log(items);

  const onRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  }

  return (
    <div className="card flex flex-col">
      <h1>{name}</h1>
      {items.map(({ title, id }) => (
        <button type="button" className="button" onClick={() => onRemoveMovie(id)}>
          {title}
        </button>
      ))}
    </div>
  );
}

export default UserCard;
