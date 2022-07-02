import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import SectionTitle from "./SectionTitle";

export default function NoteBodyContainer({ data, formatDate, addNotes }) {
  const archived = data.filter((note) => note.archived === true);
  const notArchived = data.filter((note) => note.archived === false);
  return (
    <div className="note-app__body">
      <NoteInput addNotes={addNotes} />

      <SectionTitle>Catatan Aktif</SectionTitle>
      {notArchived.length !== 0 ? (
        <NotesList data={notArchived} formatDate={formatDate} />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
      <SectionTitle>Arsip</SectionTitle>
      {archived.length !== 0 ? (
        <NotesList data={archived} formatDate={formatDate} />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
}
