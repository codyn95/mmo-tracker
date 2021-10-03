import { useEffect, useState } from 'react';
import './App.css';
import * as axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  const requestData = () => {
    axios({
      method: 'get',
      url: 'https://api.npoint.io/49a151af5f05dde2a437',
      responseType: 'stream',
    }).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    requestData();
  }, []);

  const refreshOnClick = () => {
    requestData();
  };

  return (
    <div className='App'>
      <h2>Welcome to Majora's Mask Tracker 8=======D</h2>
      {data !== null ? (
        <body>
          {data.map((value, index) => {
            return (
              <div>
                <p>Section: {value.name}</p>
                <p>List of Locations</p>
                {value.locations.map((location) => {
                  return (
                    <div className='location'>
                      <div
                        className={location.inLogic ? 'inLogic' : 'notInLogic'}
                      >
                        <p
                          className={location.checked ? 'checked' : 'unchecked'}
                        >
                          name: {location.name}
                        </p>
                        <p>item: {location.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <button onClick={refreshOnClick}>Click to get tracker data</button>
        </body>
      ) : null}
    </div>
  );
};

export default App;
