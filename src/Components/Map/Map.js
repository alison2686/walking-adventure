import React, {useState} from 'react'
import {
    MapContainer,
    MapWrapper,
    MapGLWrapper
} from './MapElements'
import ReactMapGL, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as mockData from '../../Data/skateboard-parks.json'

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 37.79107022782, 
        longitude: -122.43782361688397,
        zoom: 13,
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
                {/* {mockData.features.map(park => (
                    <Marker>
                        <div>Park</div>
                    </Marker>
                ))} */}
            </ReactMapGL>
        </MapGLWrapper>
        </MapWrapper>
    </MapContainer>
  )
}

export default Map