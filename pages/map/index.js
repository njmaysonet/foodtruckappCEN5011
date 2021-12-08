import React from "react";
import StyledMap from "./index.css"
import styles from "../../styles/utils.module.css"
import Link from "next/link"

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

class Map extends React.Component {
    state = {
        defaultCenter:{
            lat: 25.7617,
            lng: -80.1918,
        },
        markers: [{
            lat: 25.7402,
            lng: -80.3431,
        }]
    };

    componentDidMount() {
        // fetch('localhost:3000/api/maptrucks')
        // .then((response) => response.json())
        // .then( trucks => {
        //     this.setState({ markers: { lat: trucks.latitude, lng: trucks.longitude }})
        // })
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
                position: marker,
                map: this.map,
            });
        });
    };

    render() {
        return (
            <StyledMap>
                <div id="google-map" />
                <Link href="/auth/login" passHref>
                    <div className={styles.footer}>
                        <footer>
                            <button className={styles.button}>Main Menu</button>
                        </footer>
                    </div>
                </Link>
            </StyledMap>
        );
    }
}

Map.propTypes = {
    // prop: PropTypes.string.isRequired,
};

export default Map;

