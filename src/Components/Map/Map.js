import React, {useState} from 'react'
import {
    MapContainer,
    MapWrapper,
    MapGLWrapper
} from './MapElements'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = () => {
    const [viewport, setViewPort] = useState({
        latitude: 37.79126167889807,
        longitude:  -122.43793471153593,
        zoom: 10,
        width: '100vw',
        height: '100vh'
    })
    
  return (
    <MapContainer>
        <MapWrapper>
            <h3>Map Component Here</h3>
        <MapGLWrapper>
            <ReactMapGL 
                {...viewport} 
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={setViewPort}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                 Markers here
            </ReactMapGL>
        </MapGLWrapper>
        </MapWrapper>
    </MapContainer>
  )
}

export default Map