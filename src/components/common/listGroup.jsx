import React from "react";

const ListGroup = (props) => {
  return (
    <ul className="list-group">
      {props.listItems.map((li) => (
        <li
          onClick={() => props.onItemSelect(li)}
          key={li._id}
          style={{ cursor: "pointer" }}
          className={
            li === props.selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {li.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
