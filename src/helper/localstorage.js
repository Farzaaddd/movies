export const loadState = () => {
  try {
    const serialState = localStorage.getItem("appState");
    if (serialState === null) {
      return {
        saveList: [],
        status: false,
      };
    }
    return JSON.parse(serialState);
  } catch (err) {
    return null;
  }
};

export const saveState = (state) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("appState", serialState);
  } catch (err) {
    console.log(err);
  }
};
