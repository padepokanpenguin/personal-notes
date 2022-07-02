import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import SectionTitle from "./SectionTitle";

export default function NoteBodyContainer({
  data,
  formatDate,
  addNotes,
  onArchiveHandler,
  onDeleteHandler,
}) {
  return (
    <div className="note-app__body">
      <NoteInput addNotes={addNotes} />
      <SectionTitle>Catatan Aktif</SectionTitle>

      <NotesList
        onArchiveHandler={onArchiveHandler}
        onDeleteHandler={onDeleteHandler}
        data={data}
        formatDate={formatDate}
      />
      <SectionTitle>Arsip</SectionTitle>

      <p className="notes-list__empty-message">Tidak ada catatan</p>
    </div>
  );
}
