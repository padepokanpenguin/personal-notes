import React from "react";
import Header from "./components/Header";
import NoteBodyContainer from "./components/NoteBodyContainer";
import { getInitialData, showFormattedDate } from "./utils";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: getInitialData(),
      inputTitle: "",
      inputBody: "",
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <NoteBodyContainer
          data={this.state.notes}
          formatDate={showFormattedDate}
          setInputTitle={this.setState.inputTitle}
          inputTitle={this.state.inputTitle}
          setInputBody={this.setState.inputBody}
          inputBody={this.state.inputBody}
          setNotes={this.setState.notes}
          notes={this.state.notes}
        />
      </React.Fragment>
    );
  }
}
