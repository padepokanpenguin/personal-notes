import Form from "./Form";
import SectionTitle from "./SectionTitle";

export default function NoteInput({ addNotes }) {
  return (
    <div className="note-input">
      <SectionTitle>Buat catatan</SectionTitle>
      <Form addNotes={addNotes} />
    </div>
  );
}
