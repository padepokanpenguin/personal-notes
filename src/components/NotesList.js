import NoteItem from "./NoteItem";

export default function NotesList({
  data,
  formatDate,
  onArchiveHandler,
  onDeleteHandler,
}) {
  return (
    <div className="notes-list">
      {data.map((note) => (
        <NoteItem
          {...note}
          key={note.id}
          createdAt={formatDate(note.createdAt)}
          onArchiveHandler={onArchiveHandler}
          onDeleteHandler={onDeleteHandler}
        />
      ))}
    </div>
  );
}
