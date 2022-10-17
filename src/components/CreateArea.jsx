import React, { useState } from "react";

function CreateArea(props) {
  const [titleText, setTitle] = useState("");
  const [areaText, setArea] = useState("");

  function handleTitle(event) {
    const newText = event.target.value;
    setTitle(newText);
  }

  function handleArea(event) {
    const newText = event.target.value;
    setArea(newText);
  }

  function handleButton(event) {
    // setItems((prevItems) => {
    //   return [...prevItems, titleText, areaText];
    // });
    event.preventDefault();
    setTitle("");
    setArea("");
    return props.onAdd(titleText, areaText);
    // console.log(items);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitle}
          name="title"
          placeholder="Title"
          value={titleText}
        />
        <textarea
          onChange={handleArea}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={areaText}
        />
        <button onClick={handleButton}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
