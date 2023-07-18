import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = e.target;

    const isContactExists = contacts.find(
      element => element.name.toLowerCase() === name.value.toLowerCase()
    );

    const resetForm = () => {
      document.getElementById('contactForm').reset();
    };

    if (isContactExists) {
      alert(`${name.value} is already in contacts!`);
      resetForm();
    } else {
      dispatch(
        addContact({ id: nanoid(), name: name.value, phone: phone.value })
      );

      resetForm();
    }
  };

  return (
    <form id="contactForm" className={css.contactsForm} onSubmit={handleSubmit}>
      <label className={css.contactData}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.inputData}
        />
      </label>
      <label className={css.contactData}>
        Number
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.inputData}
        />
      </label>
      <button type="submit" className={css.addBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
