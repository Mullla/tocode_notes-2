import { createStore } from 'vuex';
import notes from '@/seeders/notes';
import { getLocalNotes, setLocalNotes } from '@/utils/localStorageHandler';

export const store = createStore({
  state: {
    notes: getLocalNotes() || notes,
  },

  getters: {
    getNotes: state => state.notes,
  },

  actions: {},

  mutations: {
    REMOVE_NOTE: (state, noteIdx) => {
      console.log(`note ${noteIdx} has been removed`);
      state.notes.splice(noteIdx, 1);
      setLocalNotes(state.notes);
    },
    ADD_NOTE: (state, note) => {
      state.notes.push(note);
      setLocalNotes(state.notes);
    },
  },
});
