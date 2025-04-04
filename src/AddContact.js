import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './redux/store';

const AddContact = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim()) return;
    dispatch(addContact(name));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Введіть ім'я"
      />
      <button type="submit">Додати</button>
    </form>
  );
};

export default AddContact;
