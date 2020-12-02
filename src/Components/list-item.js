import { Box, Text } from 'rebass';

function ListItem(props) {

  const meteor = props.met;
  const s = props.s;
  let c = "list-item";

  //Convert from grams to nearest kilogram
  const masskg = (Math.round(meteor.mass/1000)*1000)/1000;


  //List item's class is set to selected if true
  if(s.id !== undefined){
      if(s.id === meteor.id){
        c = "selItem";
      }else{
          c = "list-item";
      }
  }


  return (
         
    <Box className={c} sx={{
        p: 2,
        borderRadius: 45,
        my:'0vh',
        mr:'0.2em',
        height: 'max-height:5vh'
      }}>
        <Text className="item-ii">{meteor.recclass}</Text>
        <Text className="item-i">{meteor.name}</Text>
        <Text className="item-iii">{masskg}kg</Text>
    </Box>
      
    );
  }
export default ListItem;