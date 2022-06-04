const NoteNotFound = () => {
  return (
    <div className="p-3 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 h-fit grid gap-2">
      <h6 className="text-2xl font-bold text-center text-gray-800 ">
        <span className="text-red-500">Oops!</span> Catatan kosong
      </h6>
    </div>
  );
};

export default NoteNotFound;
