import React from "react";

function DeleteButton() {
  const taskRef = React.useRef(null);

  return (
    <div className={`deleteButton`} ref={taskRef}>
      <button>Delete</button>
    </div>
  );
}

export default DeleteButton;
