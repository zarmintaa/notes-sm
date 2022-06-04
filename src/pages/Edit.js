import { useState, useEffect } from "react";
import DataHelper from "../lib/DataHelper";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "../lib/Alert";
import Wrapper from "../components/layouts/Wrapper";
import BackButton from "../components/buttons/BackButton";
import CancelFormButton from "./../components/buttons/CancelFormButton";

const Edit = () => {
  const { noteId } = useParams();
  const detailNote = DataHelper.findNoteById(+noteId);
  const [title, setTitle] = useState(detailNote.title);
  const [body, setBody] = useState(detailNote.body);
  const [checkbox, setCheckbox] = useState(detailNote.archived);
  const [wordCount, setWordCount] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    DataHelper.updateDataFromLocalstorage(+noteId, title, body, checkbox);
    Alert.alertSuccess("Success", "Sukses mengubah catatan", () => {
      navigate("/");
    });
  };

  const clearSubmit = () => {
    setTitle("");
    setBody("");
    setCheckbox(false);
    setIsEdit(false);
    setWordCount(0);
  };

  const titleInputChangeHandler = (e) => {
    if (e.target.value.length === 51) {
      return;
    }
    setTitle(e.target.value);
    setWordCount(e.target.value.length);
  };

  useEffect(() => {
    if (wordCount !== 0 || body !== "" || title !== "") {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [wordCount, title, body]);

  return (
    <Wrapper>
      <form
        className="mt-5 lg:mt-10 p-5 rounded-lg border border-gray-300 mx-2.5"
        onSubmit={onSubmitHandler}
      >
        <div className="mb-6">
          <div className="flex justify-between">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Judul
            </label>
            <span className="text-sm">Sisa karakter : {50 - wordCount}</span>
          </div>
          <input
            type="text"
            id="title"
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ${
              title.length === 50
                ? "focus:ring-red-500 focus:border-red-500"
                : "focus:ring-yellow-500 focus:border-yellow-500"
            }`}
            placeholder="Judul..."
            value={title}
            onChange={titleInputChangeHandler}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Catatan
          </label>
          <textarea
            id="body"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500  "
            placeholder="Catatan..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              checked={checkbox}
              onChange={(e) => setCheckbox(e.target.checked)}
              value=""
              className="w-4 h-4 text-yellow-600 bg-gray-100 rounded border-gray-300 focus:ring-yellow-500 "
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              {checkbox ? "Arsipkan" : "Tidak diarsipkan"}
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-black bg-yellow-500 hover:bg-yellow-600 hover:text-white focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
        >
          Edit
        </button>
        {isEdit && <CancelFormButton clearSubmit={clearSubmit} />}
      </form>
      <BackButton />
    </Wrapper>
  );
};

export default Edit;
