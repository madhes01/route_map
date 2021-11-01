import { useState } from 'react';
import './App.css';
import BasicSelect from './BasicSelect';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as routes from './route';
import mapStyles from './mapStyles';

function Map() {
  const [selectedRoute, setSelectedRoute] = useState(null);
  return ( 
    <GoogleMap
      defaultZoom = {10}
      defaultCenter = {{ lat: 45.4211, lng: -75.6903 }}
      defaultOptions = {{styles: mapStyles}}
    >
      {routes.ROUTE_NUMBERS_FILTER_OPTIONS.map(route => (
        <Marker 
          key={route.route_id} 
          position = {{
            lat: route.route_graph.geo_location.latitude,
            lng: route.route_graph.geo_location.longitude
          }}
          onClick={() => {
          setSelectedRoute(route);
        }} 
        icon={{
          url: './image.png',
          scaledSize: new window.google.maps.Size(20, 20)
        }}
        />
      ))}
        {selectedRoute && (
          <InfoWindow 
          position = {{
            lat: selectedRoute.route_graph.geo_location.latitude,
            lng: selectedRoute.route_graph.geo_location.longitude
          }}
           onCloseClick={() => {
             setSelectedRoute(null);
           }}>
            <div> {selectedRoute.school_id} </div>
          </InfoWindow>
        )}
    </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div className="App">
      <div>
        <h3 className='admin'>Admin Dashboard</h3>
        <hr />
        <BasicSelect />
        <div style={{width: '100vw', height: '100vh'}}>
        <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
