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
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <NoteBodyContainer
          data={this.state.notes}
          formatDate={showFormattedDate}
        />
      </React.Fragment>
    );
  }
}
