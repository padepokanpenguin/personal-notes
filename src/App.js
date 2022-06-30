import React from "react";
import Header from "./components/Header";
import NoteApp from "./components/NoteApp";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <NoteApp />
        
      </React.Fragment>
    );
  }
}
