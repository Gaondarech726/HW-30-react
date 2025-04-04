import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from './redux/selectors';
import { deleteContact, toggleFavourites } from './redux/store';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => {
    if (statusFilter === 'favourites') return contact.favourites;
    return true;
  });

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.text}
          <button onClick={() => dispatch(toggleFavourites(contact.id))}>
            {contact.favourites ? '⭐' : '☆'}
          </button>
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
