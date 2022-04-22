import ReactDOM from 'react-dom';

import { Admin, ListGuesser, Resource } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

import { UserList } from './components/UserList/UserList';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
        <Resource name="users" list={UserList} />
    </Admin>
);
ReactDOM.render(<App />, document.getElementById('app'));
