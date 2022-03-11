import React, { useState } from "react";

function CreateArea(props) {
   const [note, setNote] = useState({
      title: "",
   });

   function handleChange(event) {
      const { name, value } = event.target;

      setNote((prevNote) => {
         return {
            ...prevNote,
            [name]: value,
            content: "No content present yet.",
            completed: false,
         };
      });
   }

   function submitNote(event) {
      event.preventDefault();
      props.onAdd(note);
      setNote({
         title: "",
      });
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
            <button className="submit" onClick={submitNote}>
               Submit
            </button>
         </form>
      </div>
   );
}

export default CreateArea;
