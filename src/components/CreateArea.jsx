import React, { useState } from "react";

function CreateArea(props) {
  // const [titleText, setTitle] = useState("");
  // const [areaText, setArea] = useState("");

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // function handleTitle(event) {
  //   const newText = event.target.value;
  //   setTitle(newText);
  // }

  // function handleArea(event) {
  //   const newText = event.target.value;
  //   setArea(newText);
  // }

  function handleButton(event) {
    // setItems((prevItems) => {
    //   return [...prevItems, titleText, areaText];
    // });

    // setTitle("");
    // setArea("");

    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();

    // console.log(items);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleButton}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
