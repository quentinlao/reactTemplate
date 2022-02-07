import ReactDOM from 'react-dom';
import React from 'react';
import { forceRenderStyles } from 'typestyle';

import { HelloWorldPage } from './pages/HelloWorldPage';
const App = (): JSX.Element => {
    return <HelloWorldPage />;
};

ReactDOM.render(<App />, document.getElementById('app'));
forceRenderStyles();
