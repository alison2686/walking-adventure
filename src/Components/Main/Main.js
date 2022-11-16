import React from 'react'
import Map from '../Map/Map'
import {
    MainContainer,
    MainWrapper,
    FindRouteContainer,
    MapWrapper
} from './MainElements'

const Main = () => {
  return (
    <MainContainer>
        <div>Navbar Here</div>
        <MainWrapper>
            <FindRouteContainer>
                <h3>Find a Route</h3>
            </FindRouteContainer>
        <MapWrapper>
            <Map />
        </MapWrapper>
        </MainWrapper>

    </MainContainer>
  )
}

export default Main