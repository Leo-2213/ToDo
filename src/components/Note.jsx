import React, {useState} from "react";

function Note(props) {
  const [col, setCol] = useState(false);
  const [buttonText, setButtonText] = useState("Complete");
  function handleClick() {
    props.onDelete(props.id);
  }
  function completed(){
    setCol(!col);
    if(col){
      setButtonText("Complete");
    }
    else{
      setButtonText("InComplete");
    }
  }
  return (
    

    <div className={col ? 'border-complete note' : 'note'}>
      <h1>{props.title}</h1>
      <hr className="line"></hr>
      <button className={col ? 'background-completed complete' : 'background-incompleted complete'}  onClick={completed}>Mark as {buttonText}</button>
      <button className="delete" onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
