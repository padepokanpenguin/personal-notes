import Form from "./Form";

export default function NoteApp() {
  return (
    <div className="note-app__body">
      <div className="note-input">
        <h2>Buat catatan</h2>
        <Form />
      </div>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        <div className="note-item">
          <div className="note-item__content">
            <h3 className="note-item__title">Babel</h3>
            <p className="note-item__date">Kamis, 22 April 2022</p>
            <p className="note-item__body">
              Babel merupakan tools open-source yang digunakan untuk mengubah
              sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh
              JavaScript engine versi lama. Babel sering dipakai ketika kita
              menggunakan sintaks terbaru termasuk sintaks JSX.
            </p>
          </div>
          <div className="note-item__action">
            <button className="note-item__delete-button">Delete</button>
            <button className="note-item__archive-button">Archive</button>
          </div>
        </div>
      </div>
      <h2>Arsip</h2>
      <p className="notes-list__empty-message">Tidak ada catatan</p>
    </div>
  );
}
