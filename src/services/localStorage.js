const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {}
};

const loadState = state => {
  try {
    const deserializedState = localStorage.getItem(state);
    if (deserializedState === null) {
      return "undefined";
    }
    return JSON.parse(deserializedState);
  } catch (error) {
    return "undefined";
  }
};

export { saveState, loadState };
