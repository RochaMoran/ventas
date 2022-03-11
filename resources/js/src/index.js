import ReactDOM from 'react-dom';
import Example from './app'
import UserContextProvider from './components/context/UserContext';

if (document.getElementById('root')) {
    ReactDOM.render(<UserContextProvider>
        <Example />
    </UserContextProvider>, document.getElementById('root'));
}
