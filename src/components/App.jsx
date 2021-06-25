import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
// import notes from "../notes.js";
import CreateArea from "./CreateArea.jsx";

/*
function createNotes(noteEntry){
    return <Note
    key={noteEntry.key} */
   /*from Note.jsx*/ /* tiTle={noteEntry.title} */ /*from notes.js*/
  /*  conTent={noteEntry.content}
    />

} */

// function App(){
//     return (<div>
//         <Header />
//         {notes.map(noteEntry => (
//     <Note
//     key={noteEntry.key}
//    /*from Note.jsx*/ tiTle={noteEntry.title} /*from notes.js*/
//     conTent={noteEntry.content}
//     />
//
// ))}
//         <Footer />
//     </div>
//     );
// }

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNotes => {
          return  [...prevNotes, newNote];
        });
    }

    function deleteNote (id){
        setNotes(prevNotes => {
           return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea
            onAdd = {addNote}
             />
            { notes.map((noteItem, index) => {
                return (
                    <Note
                    key={index}
                    id={index}
                    title= {noteItem.title}
                    content= {noteItem.content}
                    onDelete= {deleteNote}
                />
                );
             }) }
            <Footer />
        </div>
    );

}

export default App;