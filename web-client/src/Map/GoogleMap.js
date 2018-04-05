import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline
} from 'react-google-maps';

const API_KEY = 'AIzaSyBxJpgpIlkzv6WgyOwTnUGAnwcRC_-MTaw';

const GoogleMapContainer = (props) => {
  const { coordinates, onMarkerClick } = props;
  const markers = coordinates.map(item => (
    <Marker
      position={{ lat: item.lat, lng: item.lng }}
      onClick={onMarkerClick}
    />
  ));

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 53.891609, lng: 27.559757 }}
    >
      {markers}
      <Polyline
        path={coordinates}
        geodesic={true}
        options={{
          strokeColor: '#00a1e1',
          strokeOpacity: 1.0,
          strokeWeight: 4,
        }}
      />
    </GoogleMap>
  )
};

export default compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(GoogleMapContainer);