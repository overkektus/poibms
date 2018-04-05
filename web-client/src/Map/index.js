import React from 'react';
import GoogleMap from './GoogleMap';

export default class Map extends React.PureComponent {
    state = {
        isMarkerShown: false,
        coordinates: [
            { lat: 53.890478, lng: 27.553874 },
            { lat: 53.889378, lng: 27.564507 },
            { lat: 53.879378, lng: 27.564507 },
        ],
    }

    componentDidMount() {
        this.delayedShowMarker();
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true });
        }, 3000);
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false });
        this.delayedShowMarker();
    }

    render() {
        return (
            <GoogleMap
                coordinates={this.state.coordinates}
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
            />
        )
    }
};