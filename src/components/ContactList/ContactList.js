import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getVisibleContacts } from 'redux/contacts/selectors';
import 'boxicons';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.contactsList}>
      {contacts.map(({ name, number, id }) => (
        <li className={css.contactsItem} key={id}>
          <p className={css.contactName}>{name + ': ' + number}</p>
          <button
            className={css.deleteBtn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            <box-icon name="trash" animation="tada-hover"></box-icon>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
