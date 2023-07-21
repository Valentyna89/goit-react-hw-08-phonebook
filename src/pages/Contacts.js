import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import Form from 'components/Forma/Form';
import Filter from '../components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export default function Tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Phonebook</title>
      <div>
        <Form />
        <title>Contacts</title>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
