import ButtonStatus from "../buttons/ButtonStatus";
import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";
import DataHelper from "./../../lib/DataHelper";
const NoteItem = ({
  title,
  body,
  createdAt,
  archieved,
  actionDelete,
  actionStatus,
  noteId,
  onDelete,
}) => {
  return (
    <div
      className={` p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 h-fit grid gap-2`}
    >
      <div className="block">
        <h1 className="text-2xl font-semibold  text-gray-800">{title}</h1>
      </div>
      <span className="text-sm text-gray-500 ">
        {DataHelper.showFormattedDate(createdAt)}
      </span>
      <p className="font-normal text-base text-gray-500 ">{body}</p>
      <div className="flex gap-2 items-center">
        <DeleteButton actionDelete={actionDelete} noteId={noteId} />
        <ButtonStatus
          archieved={archieved}
          actionStatus={actionStatus}
          noteId={noteId}
        />
        <EditButton noteId={noteId} />
      </div>
    </div>
  );
};

export default NoteItem;
