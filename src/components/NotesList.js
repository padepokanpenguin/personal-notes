import NoteItem from "./NoteItem";

export default function NotesList({ data, formatDate }) {
  return (
    <div className="notes-list">
      {data.map((note) => (
        <NoteItem
          {...note}
          key={note.id}
          createdAt={formatDate(note.createdAt)}
        />
      ))}
    </div>
  );
}
