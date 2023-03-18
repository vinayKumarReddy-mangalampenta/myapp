import React, { PropTypes, Component } from 'react';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_place.jsx';

function createMapOptions(maps) {
    return {
        zoomControlOptions: {
            position: maps.ControlPosition.RIGHT_CENTER,
            style: maps.ZoomControlStyle.SMALL
        },
        mapTypeControlOptions: {
            position: maps.ControlPosition.TOP_RIGHT
        },
        mapTypeControl: true
    };
}

export default class SimpleMapPage extends Component {
    static defaultProps = {
        center: [59.938043, 30.337157],
        zoom: 9,
        greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
    };


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GoogleMap
                // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
                center={this.props.center}
                zoom={this.props.zoom}
                options={createMapOptions}>
                <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} />

                <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} />
            </GoogleMap>
        );
    }
}