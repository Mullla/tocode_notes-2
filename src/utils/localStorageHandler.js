export const getLocalNotes = () => {
  return JSON.parse(localStorage.getItem('notes'));
};

export const setLocalNotes = updatedList => {
  localStorage.setItem('notes', JSON.stringify(updatedList));
};
