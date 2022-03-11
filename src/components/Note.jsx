import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";

function Note(props) {
   const [buttonText, setButtonText] = useState("Complete");
   const { noteDate, completed } = props;

   function handleClick() {
      props.onDelete(props.id);
   }

   useEffect(() => {
      if (noteDate.completed) {
         setButtonText("Complete");
      } else {
         setButtonText("InComplete");
      }
   }, [noteDate]);

   return (
      <div className={noteDate.completed ? "border-complete note" : "note"}>
         {noteDate.completed && <TiTick className="tickmark" size={20} />}
         <h1>{noteDate.title}</h1>
         <hr className="line"></hr>
         <button
            className={
               noteDate.completed
                  ? "background-completed complete"
                  : "background-incompleted complete"
            }
            onClick={() => completed(noteDate.id)}
         >
            Mark as {buttonText}
         </button>
         <button className="delete" onClick={handleClick}>
            Delete
         </button>
      </div>
   );
}

export default Note;
