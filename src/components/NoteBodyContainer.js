import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import SectionTitle from "./SectionTitle";

export default function NoteBodyContainer({ data, formatDate }) {
  const archived = data.forEach((note) => {
    return note;
  });
  console.log(archived);

  return (
    <div className="note-app__body">
      <NoteInput />
      <SectionTitle>Catatan Aktif</SectionTitle>
      <NotesList data={data} formatDate={formatDate} />
      <SectionTitle>Arsip</SectionTitle>
      <p className="notes-list__empty-message">Tidak ada catatan</p>
    </div>
  );
}
