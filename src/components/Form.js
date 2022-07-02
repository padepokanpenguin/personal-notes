import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      maxLength: 50,
    };
    this.onInputTitleHandler = this.onInputTitleHandler.bind(this);
    this.onInputBodyHandler = this.onInputBodyHandler.bind(this);
    this.onSubmitNote = this.onSubmitNote.bind(this);
  }

  onInputTitleHandler(event) {
    if (this.state.title.length <= this.state.maxLength) {
      this.setState((prevState) => {
        return {
          ...prevState,
          title: event.target.value,
          // maxLength: prevState.maxLength - 1,
        };
      });
    }
  }

  onInputBodyHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitNote(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitNote}>
        <p className="note-input__title__char-limit ">
          Sisa karakter {this.state.maxLength}
        </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="buat judul..."
          value={this.state.title}
          onChange={this.onInputTitleHandler}
          maxLength={this.state.maxLength}
        />
        <textarea
          className="note-input__body"
          placeholder="buat catatan...."
          value={this.state.body}
          onChange={this.onInputBodyHandler}
        ></textarea>
        <button type="submit">buat</button>
      </form>
    );
  }
}
