import GoogleMapReact from 'google-map-react';

import './style.css';

const Map = () => {
  const coordinates = {
    // lat: 10.99835602,
    lat: 59.955413,
    // lng: 77.01502627
    lng: 30.337844
  };

  return (
    <div id="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBgvTU9m5EXS4e9hcJI1rMvuCIARjsfwzA' }}
        defaultCenter={ coordinates }
        center={ coordinates }
        defaultZoom={ 11 }
        margin={[ 50, 50, 50, 50 ]}
        options={ '' }
        onChange={ '' }
        onChildClick={ '' }
        yesIWantToUseGoogleMapApiInternals
      >
        <Marker lat={ 59.955413 } lng={ 30.337844 } />
      </GoogleMapReact>
    </div>
  );
};

const Marker = ({ lat, lng }) => {
  return (
    <div
      className="marker"
      lat={ lat }
      lng={ lng }>A</div>
  );
}

export default Map;
