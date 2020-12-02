import { Box } from 'rebass';
import ListItem from './list-item';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Scrollbar from 'react-scrollbars-custom';

function List(props) {
  
  const p = props.json;
  const s = props.metID;
  const [load, setLoad] = useState("0 0 16px rgba(255, 176, 30, 1)");
  //Determine if the list has updated by checking the last item's id, using l
  const [l, setL] = useState("0");


  //If list has updated, shadow animation is invoked and l is set to last item's id
  if(p[0] !== undefined && l !== p[p.length-1].id){
    setL(p[p.length-1].id);
    setLoad("0 0 16px rgba(255, 255, 255, 1)");
    setTimeout(() => setLoad("0 0 16px rgba(255, 176, 30, 1)"), 150); 
  }

    return (
      <Box className="list"
            sx={{
                p: 2,
                borderRadius: 5,
                boxShadow: load,
                backgroundColor: 'grey',
                color: 'black',
                height: '100%',
                alignItems:"center"
              }}>
                
      <Scrollbar style={{ width: '100%', height: 340 }}>
              {p.map((m) => (
                  <Link to='detail' onClick={() => props.click(m)} key={m.id}>
                    <ListItem met={m} s={s}/>
                  </Link>
              ))}
      </Scrollbar>
      
    </Box>
  
      
    );
  }
  
  export default List;