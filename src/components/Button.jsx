import React from "react";

function Button() {
  const taskRef = React.useRef(null);

  return (
    <div className={`addButton`} ref={taskRef}>
      <button>Add</button>
      <div />
      <br />
      <div className={`deleteButton`}>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Button;
