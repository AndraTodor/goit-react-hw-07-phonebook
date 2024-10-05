import React from 'react';

const ContactListItem = ({ name, number, onDelete }) => {
  return (
    <li className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <p className="text-lg font-medium text-gray-800">{name}</p>
        <p className="text-gray-600">{number}</p>
      </div>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
