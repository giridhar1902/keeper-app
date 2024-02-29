import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />

      {notes.map(notee => (
        <Note key={notee.key} title={notee.title} content={notee.content} />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
