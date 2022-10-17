import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    // const item = { title: input1, textArea: input2 };
    console.log(item);

    setItems((prevItems) => {
      return [...prevItems, item];
    });
    // setItems(item);
    console.log(items);
  }

  function deleteButton(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((todoItem, index) => (
        <Note
          key={index}
          id={index}
          title={todoItem.title}
          content={todoItem.content}
          onDel={deleteButton}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
