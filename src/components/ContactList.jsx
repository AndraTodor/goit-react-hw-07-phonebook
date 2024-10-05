import React, { useEffect } from 'react';
import ContactListItem from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  // Accesăm datele necesare din Redux state
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  // Obținem lista de contacte la încărcarea componentului
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Filtrăm contactele în funcție de valoarea din filtru
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  // Afișăm un mesaj de încărcare sau eroare dacă este cazul
  if (isLoading) return <p>Loading contacts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="flex flex-col gap-4">
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
