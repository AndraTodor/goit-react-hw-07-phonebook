import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';

const Filter = () => {
  // Accesăm direct `filter` din `state`, fără a-l căuta în `contacts`
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">
        Find contacts by name
      </label>
      <input
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default Filter;
