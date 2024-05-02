import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistR } from './redux/strore.js';
import App from './components/App/App.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistR}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
