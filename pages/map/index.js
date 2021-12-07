import React from "react";
import StyledMap from "./index.css"

class Map extends React.Component {
    state = {
        defaultCenter:{
            lat: 25.7617,
            lng: -80.1918,
        },
        markers: [
            {
                lat: 25.794400,
                lng: -80.197874,
            }
        ]
    };

    componentDidMount() {
        document.body.classList.add("is-map");
        this.handleAttachGoogleMap();
    }

    componentWillUnmount() {
        document.body.classList.remove("is-map")
    }

    handleAttachGoogleMap = () => {
        const { defaultCenter } = this.state;
        this.map = new google.maps.Map(document.getElementById("google-map"), {
            center: defaultCenter,
            zoom: 10,
        });

        setTimeout(() => {
            this.handleDrawMarkers();
        }, 2000);
    };

    handleDrawMarkers = () => {
        const { markers } = this.state;
        markers.forEach((marker) => {
            new google.maps.Marker({
                postition: marker,
                map: this.map,
            });
        });
    };

    render() {
        return (
            <StyledMap>
                <div id="google-map" />
            </StyledMap>
        );
    }
}

Map.propTypes = {
    // prop: PropTypes.string.isRequired,
};

export default Map;

