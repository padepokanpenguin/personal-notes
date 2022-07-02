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
  }

  onInputTitleHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        tile: event.target.value,
        // maxLength: prevState - 1,
      };
    });
    console.log(this.state.title);
  }

  onInputBodyHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
    console.log(this.state.body);
  }

  // onDecrementMaxLengthHandler() {
  //   this.setState((prevState) => {
  //     return {
  //       maxLength: prevState - 1,
  //     };
  //   });
  // }

  render() {
    return (
      <form>
        <p className="note-input__title__char-limit ">
          Sisa karakter {this.state.maxLength}
        </p>
        <input
          className="note-input__title"
          placeholder="buat judul...."
          // maxLength={this.state.maxLength}
          value={this.state.title}
          onChange={this.onInputTitleHandler}
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
