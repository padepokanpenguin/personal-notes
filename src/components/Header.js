import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.onSearchNote = this.onSearchNote.bind(this);
  }

  onSearchNote(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        search: event.target.value,
      };
    });

    this.props.searchNote(this.state.search);
  }

  render() {
    return (
      <header className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input
            value={this.state.search}
            type="text"
            placeholder="Cari catatan..."
            onChange={this.onSearchNote}
          />
        </div>
      </header>
    );
  }
}
