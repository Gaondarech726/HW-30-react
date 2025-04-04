import AddContact from './AddContact';
import ContactsList from './ContactsList';
import Filter from './Filter';

const App = () => {
  return (
    <div>
      <h1>Контакти</h1>
      <Filter />
      <AddContact />
      <ContactsList />
    </div>
  );
};

export default App;
