import { contactsOperations } from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

export default function Addcontact() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const target = e.target.elements;

    const formDatas = {
      name: target.name.value,
      number: target.number.value,
    };
    // console.log(formDatas);
    dispatch(contactsOperations.addContact(formDatas));
    // dispatch(addContact(formDatas));

    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  return (
    <div>
      {' '}
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit">Add contact</button>
      </form>
    </div>
  );
}