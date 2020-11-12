import React from 'react';
import { Rocket, fetchRockets, deleteRocket } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../reducers';

interface AppProps {
  rockets: Rocket[];
  fetchRockets: Function;
  deleteRocket: typeof deleteRocket;
}

const App = (props: AppProps): JSX.Element => {
  const dispatch = useDispatch();

  const rockets = useSelector((state: StoreState) => state.rockets);

  const renderList = (): JSX.Element[] => {
    return rockets.map((rocket: Rocket) => (
      <li
        onClick={() => dispatch(deleteRocket(rocket.id))}
        key={rocket.id}
        style={{ listStyle: 'none', fontSize: 25 }}
      >
        {rocket.name}
      </li>
    ));
  };

  return (
    <h1>
      <button onClick={() => dispatch(fetchRockets())}>Fetch</button>
      <ul>{renderList()}</ul>
    </h1>
  );
};

export default App;
