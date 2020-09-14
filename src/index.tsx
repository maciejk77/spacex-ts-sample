import React from 'react';
import ReactDOM from 'react-dom';

const App = (): JSX.Element => {
  return <h1>Webpack React TS Starter </h1>;
};

const root = document.getElementById('app-root');

ReactDOM.render(<App />, root);

export default App;
