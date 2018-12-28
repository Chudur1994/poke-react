import React from "react";

const PaginationButton = props => {
  let cn = "";
  if (props.page === "...") {
    cn = `disabled ${cn}`;
  } else if (props.page === props.currentPage) {
    cn = `active ${cn}`;
  }
  return (
    <button
      disabled={props.page === "..." ? true : false}
      className={cn}
      onClick={() => props.handleClick(props.page)}
    >
      {props.page}
    </button>
  );
};

export default PaginationButton;
