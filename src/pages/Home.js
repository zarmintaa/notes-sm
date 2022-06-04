import React, { useState, useEffect, useCallback } from "react";
import DataHelper from "./../lib/DataHelper";
import Alert from "./../lib/Alert";
import SearchInput from "./../components/form/SearchInput";
import Wrapper from "../components/layouts/Wrapper";
import ListItem from "./../components/list/ListItem";
const Home = () => {
  const [notes, setNotes] = useState([]);
  const showNotes = useCallback(() => {
    setNotes(DataHelper.getDataFromLocalstorage());
  }, []);

  const deleteNote = (id) => {
    Alert.optionAlert(
      "Apakah yakin ?",
      "Jika anda menghapus data ini, maka data tidak dapat dikembalikan",
      () => {
        DataHelper.unsetDataFromLocalstorage(id);
        Alert.alertSuccess("Success", "Data berhasil terhapus!", showNotes);
      },
      () => {
        Alert.alertSuccess("Success", "Data tidak dihapus!", showNotes);
      }
    );
  };

  const archievedNotes = (id) => {
    DataHelper.setArchieveData(id);
    showNotes();
  };

  const searchNotes = useCallback((e) => {
    const searchData = DataHelper.searchDataFromLocalstorage(e.target.value);
    setNotes(searchData);
  }, []);

  useEffect(() => {
    showNotes();
  }, [showNotes]);

  return (
    <Wrapper>
      <SearchInput onSearch={searchNotes} />
      <ListItem
        notes={notes}
        onArchiveData={archievedNotes}
        onDeleteData={deleteNote}
      />
    </Wrapper>
  );
};

export default Home;
