import React, {useState} from 'react'
import {
    MapContainer,
    MapWrapper,
    MapGLWrapper
} from './MapElements'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
// import * as mockData from '../../Data/mockdata.json'

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 41.88012770332388, 
        longitude: -87.6365055792995,
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
                onMove={evt => setViewport(evt.viewport)}
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