import React, { PropTypes, Component } from 'react';

import { greatPlaceStyle } from './my_great_place_styles.jsx';

export default class MyGreatPlace extends Component {

    static defaultProps = {};
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={greatPlaceStyle}>
                {this.props.text}
            </div>
        );
    }
}