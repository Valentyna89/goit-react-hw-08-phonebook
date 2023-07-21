import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getVisibleContacts } from 'redux/contacts/selectors';
import 'boxicons';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const isContactExists = contacts.find(
      element => element.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExists) {
      alert(`${name} is already in contacts!`);
      setName('');
      setNumber('');
      return;
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));
      setName('');
      setNumber('');
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <form
        id="contactForm"
        className={css.contactsForm}
        onSubmit={handleSubmit}
      >
        <label className={css.contactData}>
          <input
            type="text"
            name="name"
            value={name}
            className={css.inputData}
            placeholder="Name"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.contactData}>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            className={css.inputData}
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.addBtn}>
          Add contact <box-icon type="solid" name="user-plus"></box-icon>
        </button>
      </form>
    </>
  );
};

export default Form;
