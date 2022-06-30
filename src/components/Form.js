export default function Form() {
  return (
    <form>
      <p className="note-input__title__char-limit ">Sisa karakter: 50</p>
      <input className="note-input__title" placeholder="buat judul...." />
      <textarea
        className="note-input__body"
        placeholder="buat catatan...."
      ></textarea>
      <button type="submit">buat</button>
    </form>
  );
}
