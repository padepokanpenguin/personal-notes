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
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchNote = this.onSearchNote.bind(this);
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

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    console.log(notes);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const findNote = this.state.notes.find((note) => note.id === id);
    console.log((findNote.archived = !findNote.archived));
    console.log(this.state.notes.map(note => note.archived));
  }

  onSearchNote(title) {
    const filteredNotes = this.state.notes.filter((note) => {
      if (title === "") {
        return note;
      } else {
        return note.title.toLocaleLowerCase().includes(title);
      }
    });

    if (title.length > 0) {
      this.setState({ notes: filteredNotes });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header searchNote={this.onSearchNote} />
        <NoteBodyContainer
          data={this.state.notes}
          formatDate={showFormattedDate}
          addNotes={this.addNotesHandler}
          onArchiveHandler={this.onArchiveHandler}
          onDeleteHandler={this.onDeleteHandler}
        />
      </React.Fragment>
    );
  }
}
