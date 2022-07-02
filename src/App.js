import React from "react";
import Header from "./components/Header";
import NoteBodyContainer from "./components/NoteBodyContainer";
import { getInitialData, showFormattedDate } from "./utils";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: getInitialData(),
    };

    this.addNotesHandler = this.addNotesHandler.bind(this);
  }

  addNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <NoteBodyContainer
          data={this.state.notes}
          formatDate={showFormattedDate}
          addNotes={this.addNotesHandler}
        />
      </React.Fragment>
    );
  }
}
