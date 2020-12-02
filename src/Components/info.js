import { Box, Text } from 'rebass'
import classification from '../classification';
import { useState } from 'react';

function Info(props) {
    let clsi = "";
    let clso = "";
    let clst = "";
    const breakchars = ['0','1','2','3','4','5','6','7','8','9','-','~',' ','/','.',',','?'];
    const [load, setLoad] = useState("0 0 16px rgba(255, 176, 30, 1)");
    const [l, setL] = useState("0");

  if(props.met !== undefined && l !== props.met.id){
    setL(props.met.id);
    setLoad("0 0 16px rgba(255, 255, 255, 1)");
    setTimeout(() => setLoad("0 0 16px rgba(255, 176, 30, 1)"), 150); 
  }

    if(props.met.recclass !== undefined){
        clsi = props.met.recclass;
    if(clsi.indexOf('Iron')>-1){
        if(clsi.indexOf("?")>-1 || clsi.indexOf("ungrouped")>-1 || clsi.length===4){
            clso = "Iron";
        }else if(clsi.charAt("4")===","){
            for(var i=6;i<clsi.length;i++){
                clst += clsi.charAt(i);
            }
            checkBreaks(clst);
        }
    }else{
        checkBreaks(clsi);
    }
}



function checkBreaks(s){
        var chars = [];
        var clsi2 = "";
        for(var i=0;i<breakchars.length;i++){
            if(s.indexOf(breakchars[i])>-1){
                chars += breakchars[i];
            }
        }

        if(chars.length>0){

        for(var i=0;i<chars.length;i++){
            for(var j=0;j<s.length;j++){
                if(s.charAt(j) !== chars[i]){
                    clsi2 += s.charAt(j);
                }else{
                    j += 10;
                    s = clsi2;
                    clsi2 = "";
                }
                
            }
        }
    }
        clso = s;
}

let year = "";

if(props.met.year !== undefined){
    for(var i=0;i<4;i++){
        year += props.met.year.charAt(i);
    }
}

    return (
      
         
            <Box className="infoContainer" sx={{
        p: 2,
        borderRadius: 5,
        boxShadow: load,
        backgroundColor: 'grey',
        color: 'black',
        height:'100%',
        alignContent:'stretch'
        
      }}>
          <Text className="desc">Meteor:</Text>
          <Text as="h4">{props.met.name}</Text>
          <Text className="desc">Mass (g):</Text>
          <Text as="h4">{props.met.mass}</Text>
          <Text className="desc">{props.met.fall}:</Text>
          <Text as="h4">{year}</Text>
          <Text className="desc">Class:</Text>
          <Text as="h4">{props.met.recclass}</Text>
          <Text className="desc">Longitude:</Text>
          <Text as="h4">{props.met.reclong}</Text>
          <Text className="desc">Latitude:</Text>
          <Text as="h4">{props.met.reclat}</Text>
          <Text className="desc" id="ctit">Class Description:</Text>
          <Text as="h5" id="cdesc">{classification[clso]}</Text>
      
    </Box>
  
    );
  }
  
  export default Info;
