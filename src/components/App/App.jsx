import ContactList from '../ContactList/ContactList';
import SearchBar from '../SearchBar/SearchBar';
import ContactForm from '../ContactForm/ContactForm';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<div>
			<h1>Phonebook</h1>
			<ContactForm />
			<SearchBar />
			<ContactList />

			<ToastContainer position='top-center' />
		</div>
	);
}

export default App;
