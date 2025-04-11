import React from "react";

function AddButton() {
  const taskRef = React.useRef(null);

  return (
    <div className={`addButton`} ref={taskRef}>
      <button>Add</button>
    </div>
  );
}

export default AddButton;
