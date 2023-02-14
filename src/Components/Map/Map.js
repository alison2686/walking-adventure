import React, { useState, useEffect } from "react";
import Map, {
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import locationData from "../../Utils/mapdata.json";
import MapSearch from "../MapSearch/MapSearch";
import { IoMdPhotos } from "react-icons/io";
import "../../index.css";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";

const INITIAL_VIEW_STATE = {
  longitude: -122.43758758255566,
  latitude: 37.79120588317128,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

const data = [
  {
    sourcePosition: [-122.41858479929094, 37.76367466576563],
    targetPosition: [-122.40364923013956, 37.76068122656553],
  },
];

const Maps = () => {
  const layers = [new LineLayer({ id: "line-layer", data })];

  const [viewport, setViewport] = useState({
    latitude: 37.79120588317128,
    longitude: -122.43758758255566,
    zoom: 12,
    width: "100vw",
    height: "100vh",
  });

  const [selectedPt, setSelectedPt] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPt(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <div className="mapboxgl-map w-[100%] h-[80vh] bg-white border-solid border-2 md:h-[82vh] lg:w-[100%] ">
        <DeckGL
          initalViewState={INITIAL_VIEW_STATE}
          controller={true}
          layers={layers}
        ></DeckGL>
        <div className="w-[100%] h-[80vh] md:h-[82vh] lg:w-[100%] ">
          <Map
            {...viewport}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onMove={(e) => setViewport(e.viewport)}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            {/* when uing api change locationData to location */}
            {locationData.features.map((location) => (
              <Marker
                key={location.properties.id}
                latitude={location.geometry.coordinates[1]}
                longitude={location.geometry.coordinates[0]}
              >
                <button
                  className="bg-transparent border-none cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPt(location);
                    console.log(selectedPt);
                  }}
                >
                  <IoMdPhotos className="text-3xl text-white border-solid border-[#e0b94bfb] border-2 bg-[#e9ae0cfd] p-1 rounded-full shadow-lg" />
                </button>
              </Marker>
            ))}

            {/* {locationData.features.map((location) => console.log(location.geometry.coordinates[1]))} */}
            {/* location, index */}

            {selectedPt ? (
              <Popup
                latitude={selectedPt.geometry.coordinates[1]}
                longitude={selectedPt.geometry.coordinates[0]}
                closeButton={true}
                closeOnClick={false}
                closeOnMove={false}
                onClose={() => setSelectedPt(null)}
              >
                <div className="mapboxgl-popup-content flex items-center justify-start w-[40vh] h-[25vh] rounded-lg">
                  <div className="w-[100%] rounded-lg">
                    <img
                      className="p-2 w-[60%] h-[50%] rounded-md object-cover"
                      src={selectedPt.properties.image_1}
                      alt="icon"
                    />
                  </div>
                  <div className="w-[100%]">
                    <h2 className="font-poppins text-lg font-bold py-2">
                      {selectedPt.properties.name}
                    </h2>
                    <p className="font-poppins text-md">
                      {selectedPt.properties.description}
                    </p>
                  </div>
                </div>
              </Popup>
            ) : null}

            <NavigationControl position="bottom-right" />

            <GeolocateControl
              position="top-left"
              trackUserLocation
              onGeolocate={(e) => setViewport(e.viewport)}
            />

            <MapSearch />
          </Map>
        </div>
      </div>
    </div>
  );
};

export default Maps;
