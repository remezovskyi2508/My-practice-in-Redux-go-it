import { useEffect, useState } from 'react';
import * as Yup from 'yup';
//Import css
import css from './App.module.css';
//import data
import contactsData from '../data/contactsData.json';
//import components
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';

function App() {
  //State for searchInput
  const [searchValue, setSearchValue] = useState('');
  //State for save contacts & Loads contacts from localStorage
  const [contacts, setContacts] = useState(() => {
    const loadContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(loadContacts) ?? contactsData;
    return parsedContacts;
  });

  //Save data in localStorage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //Filtr for input
  const filtredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
      contact.number.includes(searchValue.trim())
  );

  //Function to delete contact by button
  const onDeleteContact = contactID => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactID
    );
    setContacts(updatedContacts);
  };

  

  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm
        contactValue={contactValue}
        handleSubmit={handleSubmit}
        FeedbackSchema={FeedbackSchema}
      />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      {filtredContacts.length > 0 ? (
        <ContactList
          contactsData={filtredContacts}
          onDeleteContact={onDeleteContact}
        />
      ) : null}
    </div>
  );
}

export default App;
