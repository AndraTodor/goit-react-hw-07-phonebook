import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Reducer pentru gestiunea contactelor
    filter: (state = '', action) => {
      if (action.type === 'contacts/setFilter') {
        return action.payload;
      }
      return state;
    },
  },
});

export { store };
