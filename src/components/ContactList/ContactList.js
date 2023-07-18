import { useSelector, useDispatch } from 'react-redux';
import { removeContact, fetchContacts } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContacts = async contactId => {
    await dispatch(removeContact(contactId));
    dispatch(fetchContacts());
    alert('The contact has been deleted');
  };

  return (
    <ul className={css.contactsList}>
      {contacts &&
        contacts.length > 0 &&
        contacts.map(({ name, phone, id }) => (
          <li className={css.contactsItem} key={id}>
            <p className={css.contactName}>{name + ': ' + phone}</p>
            <button
              className={css.deleteBtn}
              type="button"
              onClick={() => onDeleteContacts(id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
