import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 44.774049,
            lng: 20.41433
        },
        zoom: 18
    };

    render() {
        return (
            <div style={{ height: "40vh", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyC17j5Pt-ViVaBvSqfO1hDp3RxYGZ_Dtrc" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={44.774049}
                        lng={20.41433}
                        text={"Evandjeoska Crkva Banovo brdo"}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
