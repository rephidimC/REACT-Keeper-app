import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../Notes";

// function createCard(notes) {
//     return (
//         <Note key={notes.key} title={notes.title} content={notes.content} />
//     )
// }

// function App() {
//     return (
//         <div>
//             <Header />
//             {notes.map(createCard)}
//             <Footer />
//         </div>
//     );
// }

// the above is the complete code. But to use arrow functions, let's work on it.


function App() {
    return (
        <div>
            <Header />
            {notes.map(notes => (
        <Note key={notes.key} title={notes.title} content={notes.content} />
    ))}
            <Footer />
        </div>
    );
}




export default App;