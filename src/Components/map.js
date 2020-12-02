import { Box } from 'rebass'
import { Slider } from '@rebass/forms'
import { useState } from 'react'
import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule,
    ZoomableGroup,
    Sphere,
    Marker
  } from "react-simple-maps";
  import geoworld from '../world';
  import Image from '../space-bg4.jpg';
  import meteor from '../meteor.png';


const geoUrl = geoworld;


const Map = (props) => {
    const [position, setPosition] = useState({ coordinates: [0, 0],  zoom: 1});
    const [rotation, setRotation] = useState({ rotation: [0,0,0]});
    const [marker, setMarker] = useState({coordinates:[0,0]});
    const [pvmkr, setPvmkr] = useState([0]);
    const [xslide, setXslide] = useState(50);
    const [yslide, setYslide] = useState(50);
    const [cir, setCir] = useState("cirHide");
    const [mclss, setMapClass] = useState("mapGrid");
    const [cirdiff, setCirdiff] = useState(0);
    const [cirdiffPolar, setcirdiffPolar] = useState(0);
    const [bgP, setbgP] = useState([-250,-75,50,50]);
    const [maxZoom, setMaxZoom]= useState(1);
    const [maptext, setMaptext] = useState("");
    const [load, setLoad] = useState("0 0 16px rgba(255, 176, 30, 1)");


    //On render globe - set default value or position with respect to coordinates
    if((props.met.reclong === undefined || props.met.reclong === 0) && maptext === ""){
      if(props.met.recclass === undefined){
        setMaptext("Select a meteor to begin...");
      }else{
        setMaptext("Location Not Found");
      }
      setMapClass("mapGrid");
      handleSlide(xslide);
      setCir("cirHide");
    }else if(props.met.reclong !== undefined && props.met.reclat !== undefined && props.met.reclong !== pvmkr){
              
        setPvmkr(props.met.reclong);
        setMarker({coordinates:[props.met.reclong,props.met.reclat]});
        setMaxZoom(2.5);
        
        setPosition({coordinates:[props.met.reclong, props.met.reclat], zoom:2.5});
        setMapClass("mapGrid2");
        setbgP([-250,-75,50,50]);

        let y = 0;
        if(props.met.reclat > 30){
            y=-30;
        }else if(props.met.reclat < -30){
            y=30;
        }else{
            y = 0-props.met.reclat;
        }
        setRotation({rotation:[0-props.met.reclong,y,0]});
        setXslide((-props.met.reclong/3.6)+50);
        setYslide((-props.met.reclat/0.6)+50);
        
        setCirdiff(0);
        setCir("cirShow");
        setMaptext("");
        setLoad("0 0 16px rgba(255, 255, 255, 1)");
        setTimeout(() => setLoad("0 0 16px rgba(255, 176, 30, 1)"), 150);
    }

    

    //Default zoom and globe rotation
    function handleZoomStart(){
      setMaxZoom(1);
      handleSlide(xslide);
    }


      function handleSlideY(y){

        if(maptext === ""){
        //Centre globe via handleSlide function
        if(position.zoom === 2.5){
          handleSlide(xslide);
        }

        //Translate 1-100 value to [-30,30], store original value as ys
        const ys = y;
        if(y>=50){
            y = y-50;
            y = y*0.6;
        }else if(y<50){
            y = 50-y;
            y = y*0.6;
            y = y-(y*2);
        }



        //Set Map render and slider position values
        setRotation({rotation:[rotation.rotation[0],y,0]});
        setYslide(ys);

        
        //Determine multiplier depending on Northern/Southern hemisphere
        if(marker.coordinates[1]<=0){
          setcirdiffPolar((Math.asin(y/90))*(180/Math.PI)*-1);
        }else{
          setcirdiffPolar((Math.asin(y/90))*(180/Math.PI));
        }
        
       setCirdiff(rotation.rotation[0]+Number(marker.coordinates[0]));
         

       //Using cirdiff and cirdiff polar, determine whether the marker should be displayed. i.e. when marker mathematically out of view -> hide marker.
        if((cirdiff > (90-cirdiffPolar) || cirdiff < (-90+cirdiffPolar)) && (cirdiff < (270+cirdiffPolar) && cirdiff > (-270-cirdiffPolar))){// && marker.coordinates[1] < 55 && marker.coordinates[1] > -55)){
            setCir("cirHide");
        }else{
            setCir("cirShow");
        }

        //Background Image Rotation
        if(ys>bgP[3]){
            setbgP([bgP[0],bgP[1]+1,bgP[2],ys]);
        }else{
            setbgP([bgP[0],bgP[1]-1,bgP[2],ys]);
        }
      }
    }






    function handleSlide(x){

    //Don't run on initialization or if location of meteor not found.
    if(maptext === ""){

      //Translate 1-100 slider value to [-180,180] deg value.
      const xs = x;
      if(x>=50){
          x = x-50;
          x = x*3.6;
      }else if(x<50){
          x = 50-x;
          x = x*3.6;
          x = x-(x*2);
      }
      
  
      //Set values for map rendering and slider positioning.
      setRotation({rotation:[x,rotation.rotation[1],0]});
      setXslide(xs);
      setPosition({coordinates:[position.coordinates[0]+Math.sin(x), position.coordinates[1]-rotation.rotation[1]],zoom: 1});
    
  
  
      //Calculate difference in longitude between marker and view point, hide marker for given rotation angles.
      //Set cirDiffPolar - offset by *1 or *-1 depending if marker is located in northern or southern hemisphere.
      if(marker.coordinates[1]<=0){
        setcirdiffPolar((Math.asin(Number(rotation.rotation[1]/90)))*(180/Math.PI)*-1);
      }else{
        setcirdiffPolar((Math.asin(Number(rotation.rotation[1]/90)))*(180/Math.PI));
      }
  
      //Set cirdiff, difference between users view and marker location on x axis.
      setCirdiff(x+Number(marker.coordinates[0]));
  
      //Using cirdiff and cirdiff polar, determine whether the marker should be displayed. i.e. when marker mathematically out of view -> hide marker.
      if((cirdiff > (90-cirdiffPolar) || cirdiff < (-90+cirdiffPolar)) && (cirdiff < (270+cirdiffPolar) && cirdiff > (-270-cirdiffPolar))){ 
          setCir("cirHide");
      }else{
          setCir("cirShow");
      }
  
  
  
  
      //Background Image Rotation (placement) on X-axis, increment/decrement by 2 pixels on rotation
      if(xs>bgP[2]){
          setbgP([bgP[0]-2,bgP[1],xs,bgP[3]]);
      }else if(xs<bgP[2]){
          setbgP([bgP[0]+2,bgP[1],xs,bgP[3]]);
      }
      //Background image class setting.
      setMapClass("mapGrid");
    }
    }





  return (
    //Render Globe CSS Grid for positioning Box and Map
    <Box className={mclss} sx={{
        p: 2,
        borderRadius: 5,
        boxShadow: load,
        backgroundImage: 'url('+Image+')',
        backgroundSize: '200% 200%',
        backgroundPositionX: bgP[0]+'px',
        backgroundPositionY: bgP[1]+'px',
        color: 'black'
        
      }}>
        <div style={{
          float:'left',
          position:'absolute',
          top:'5vh',
          left:'1em',
          color:'white'
        }}>{maptext}</div>



          <Box id="hSliderBox">
            <Slider alt="Rotate the Earth"
            onChange={event => handleSlide(event.target.value)}
             id='percent'
            name='percent'
            color="rgb(134, 164, 199)"
            bg="rgb(134, 164, 199)"
            height="2"
            width="100%"
            value={xslide} />
           
            </Box>

            <Box></Box>

            <Box id="vSliderBox">
            <Slider alt="Rotate the Earth"
            onChange={event => handleSlideY(event.target.value)}
            id='percenty'
            name='percenty'
            color="rgb(134, 164, 199)"
            bg="rgb(134, 164, 199)"
            height="2"
            width="100%"
            value={yslide} />
           
            </Box>
          
    <ComposableMap id="map-grbox" projection="geoOrthographic" projectionConfig={{
        center: [0,0],
        rotate:rotation.rotation,
        scale: 200
      }}
      height={400}
      width={800}>
          <ZoomableGroup maxZoom={maxZoom} center={position.coordinates} zoom={position.zoom} onMoveStart={handleZoomStart}>
              <Sphere stroke="#00a3cc" fill="#44c2ff"/>
      <Graticule stroke="#66d9ff" step={[40,40]}/>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#4d9900"
              stroke="#353535"
            />
          ))
        }
      </Geographies>
      
      <Marker className={cir} coordinates={marker.coordinates}>
          
            <image x="-12" y="-12" href={meteor} height="25" width="25"></image>

      </Marker>
      </ZoomableGroup>
    </ComposableMap>
    </Box>
  );
};

export default Map;