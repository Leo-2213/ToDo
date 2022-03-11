import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import { Container } from "reactstrap";

function App() {
   const [notes, setNotes] = useState([]);

   useEffect(() => {
      axios
         .get("https://jsonplaceholder.typicode.com/todos")
         .then(function (response) {
            setNotes(response.data);
         });
   }, []);

   function addNote(newNote) {
      setNotes((prevNotes) => {
         return [...prevNotes, newNote];
      });
   }

   function deleteNote(id) {
      setNotes((prevNotes) => {
         return prevNotes.filter((noteItem, index) => {
            return index !== id;
         });
      });
   }

   function completed(id) {
      let tempNotes = notes.map((note) => {
         if (note.id === id) {
            return {
               ...note,
               completed: !note.completed,
            };
         } else {
            return {
               ...note,
            };
         }
      });

      setNotes(tempNotes);
   }

   return (
      <div style={{ backgroundColor: "rgb(17, 17, 17)", width: "100%" }}>
         <Container>
            <Header />
            <CreateArea onAdd={addNote} />
            <div className="my-notes">
               {notes.slice(notes.length-50).map((noteItem, index) => {
                  return (
                     <Note
                        key={index}
                        id={index}
                        completed={completed}
                        noteDate={noteItem}
                        onDelete={deleteNote}
                     />
                  );
               })}
            </div>
            <Footer />
         </Container>
      </div>
   );
}

export default App;
