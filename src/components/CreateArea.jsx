import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: ""
    });
    event.preventDefault();
  }
  
  return (
    <div>
      <form>
        <input
          className="task"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Enter the task here"
        />
        <button className="submit" onClick={submitNote}>Submit</button>
      </form>
      
    </div>
  );
}

export default CreateArea;
