import React from 'react';
import Iframe from 'react-iframe';
import '../App.css';
import './Component.css';

// let mapapiKey;

// if (process.env.NODE_ENV !== 'build') {
//   mapapiKey = process.env.REACT_APP_MAP_API_KEY;
// } else {
//   mapapiKey = process.env.MAP_API_KEY;
// }

function Map() {
  return (
    <div>
      <Iframe
        width='100%'
        height='100%'
        frameborder='0'
        src='https://studio.here.com/viewer/?project_id=a546131c-800d-4d07-9c83-66f103eb1d62'
      ></Iframe>
    </div>
  );
}

export default Map;
