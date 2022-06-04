import data from "./../utils/data";
class DataHelper {
  static createData(title, body, archived) {
    return {
      id: Math.round(new Date().getTime() / 1000),
      title,
      body,
      archived,
      createdAt: +new Date(),
    };
  }

  static getDataFromLocalstorage() {
    if (typeof window !== "undefined") {
      const getData = localStorage.getItem("notes");
      if (getData) {
        return JSON.parse(getData);
      } else {
        localStorage.setItem("notes", JSON.stringify(data));
      }
    }
  }

  static setDataToLocalstorage(data) {
    localStorage.setItem("notes", JSON.stringify(data));
  }

  static addDataToLocalstorage(data) {
    const currentData = this.getDataFromLocalstorage();
    if (currentData) {
      const newData = [data, ...currentData];
      return this.setDataToLocalstorage(newData);
    }
  }

  static findIndexDataFromLocalstorage(id) {
    const currentData = this.getDataFromLocalstorage();
    if (currentData) {
      const findData = currentData.findIndex((note) => note.id === id);
      return findData;
    }
  }

  static setArchieveData(id) {
    const currentData = this.getDataFromLocalstorage();
    const findIndex = this.findIndexDataFromLocalstorage(id);
    if (currentData) {
      currentData[findIndex].archived = !currentData[findIndex].archived;
      return this.setDataToLocalstorage(currentData);
    }
  }

  static unsetDataFromLocalstorage(id) {
    const currentData = this.getDataFromLocalstorage();
    if (currentData) {
      const index = this.findIndexDataFromLocalstorage(id);
      currentData.splice(index, 1);
      return this.setDataToLocalstorage(currentData);
    }
  }

  static updateDataFromLocalstorage(id, title, body, archieved) {
    const currentData = this.getDataFromLocalstorage();
    const findIndex = this.findIndexDataFromLocalstorage(id);
    if (currentData) {
      currentData[findIndex].title = title;
      currentData[findIndex].body = body;
      currentData[findIndex].archived = archieved;
      currentData[findIndex].createdAt = +new Date();
      return this.setDataToLocalstorage(currentData);
    }
  }

  static searchDataFromLocalstorage(title) {
    const currentData = this.getDataFromLocalstorage();
    if (currentData) {
      const searchData = currentData.filter((data) =>
        data.title.trim().toLowerCase().includes(title.trim().toLowerCase())
      );
      return searchData;
    }
  }

  static findNoteById(id) {
    return this.getDataFromLocalstorage().find((note) => note.id === id);
  }

  static showFormattedDate(date) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  }
}

export default DataHelper;
