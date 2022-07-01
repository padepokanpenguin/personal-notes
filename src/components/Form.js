import { useState } from "react";

export default function Form({
  setInputTitle,
  inputTitle,
  setInputBody,
  inputBody,
  setNotes,
  notes,
}) {
  const [maxLength, setMaxLength] = useState(50);
  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
    setMaxLength((prevState) => prevState - 1);
  };

  const bodyChangeHandler = (event) => {
    setInputBody(event.target.value);
  };

  const submitNote = (event) => {
    event.preventDefault();
    setNotes([
      ...notes,
      {
        id: +new Date(),
        title: inputTitle,
        body: inputBody,
        createdAt: new Date(),
        archived: false,
      },
    ]);
    setInputTitle("");
    setInputBody("");
  };

  return (
    <form>
      <p className="note-input__title__char-limit ">
        Sisa karakter: {maxLength}
      </p>
      <input
        className="note-input__title"
        placeholder="buat judul...."
        maxLength={maxLength}
        value={inputTitle}
        onChange={titleChangeHandler}
      />
      <textarea
        className="note-input__body"
        placeholder="buat catatan...."
        value={inputBody}
        onChange={bodyChangeHandler}
      ></textarea>
      <button onClick={submitNote} type="submit">
        buat
      </button>
    </form>
  );
}
