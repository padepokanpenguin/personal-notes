export default function NoteItem({ title, createdAt, body, archived }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{createdAt}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button">Delete</button>
        {archived ? (
          <button className="note-item__archive-button">Pindahkan</button>
        ) : (
          <button className="note-item__archive-button">Arsipkan</button>
        )}
      </div>
    </div>
  );
}
