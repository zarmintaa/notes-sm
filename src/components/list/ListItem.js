import NoteItem from "./NoteItem";
import NoteNotFound from "./../layouts/NoteNotFound";

const ListItem = ({ notes, onDeleteData, onArchiveData, onEdited }) => {
  const listNotes = {
    archived: [],
    unarchived: [],
  };

  notes.filter((item) => {
    if (item.archived) {
      listNotes.archived.push(item);
    } else {
      listNotes.unarchived.push(item);
    }
  });

  console.log(listNotes);

  return (
    <div className="grid lg:grid-cols-2 gap-4 mt-5 mx-2.5 lg:mx-0">
      <div className="grid gap-4 h-fit">
        <h1 className="font-medium text-xl">Tidak Diarsipkan</h1>
        {listNotes.unarchived.length === 0 && <NoteNotFound />}
        {listNotes.unarchived.map((item) => (
          <NoteItem
            key={item.id}
            title={item.title}
            body={item.body}
            createdAt={item.createdAt}
            archieved={item.archived}
            actionDelete={onDeleteData}
            actionStatus={onArchiveData}
            actionEdit={onEdited}
            noteId={item.id}
          />
        ))}
      </div>
      <div className="grid gap-4 h-fit">
        <h1 className="font-medium text-xl">Diarsipkan</h1>
        {listNotes.archived.length === 0 && <NoteNotFound />}
        {listNotes.archived.map((item) => (
          <NoteItem
            key={item.id}
            title={item.title}
            body={item.body}
            createdAt={item.createdAt}
            archieved={item.archived}
            actionDelete={onDeleteData}
            actionStatus={onArchiveData}
            actionEdit={onEdited}
            noteId={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ListItem;
