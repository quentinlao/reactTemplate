import ReactDOM from 'react-dom';

import { HelloWorldPage } from './pages/HelloWorldPage';
const App = (): JSX.Element => {
    return <HelloWorldPage />;
};

ReactDOM.render(<App />, document.getElementById('app'));
