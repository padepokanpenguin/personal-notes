export default function NoteItem({
  id,
  title,
  createdAt,
  body,
  archived,
  onDeleteHandler,
  onArchiveHandler,
}) {
  const button = archived ? "Pindahkan" : "Arsipkan";
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{createdAt}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDeleteHandler(id)}
        >
          Delete
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => onArchiveHandler(id)}
        >
          {button}
        </button>
      </div>
    </div>
  );
}
