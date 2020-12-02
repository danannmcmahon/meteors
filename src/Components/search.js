import { Box, Button, Flex, Text } from 'rebass';
import axios from 'axios';
import React from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export class Search extends React.Component {
_isMounted = false;

  constructor(props){
    super(props);

    this.state = {
        year:this.props.sp.year,
        mass:this.props.sp.mass,
        initial:false,
        meteorJSON: {},
        load:"0 0 16px rgba(255, 255, 255, 1)"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSlideYr = this.handleSlideYr.bind(this);
    this.handleSlideKg = this.handleSlideKg.bind(this);


}

componentDidMount(){
  this._isMounted = true;
  //Load default data when screen is loaded.
  if(this.state.initial === false){
    if(this._isMounted){
    this.setState({initial:true});
    this.handleSubmit();
    }
  }

}
  
componentWillUnmount() {
  this._isMounted = false;
}

  handleSubmit(event) {
    if(event !== undefined){
      event.preventDefault();
    }
    //Shadow animation
    this.setState({load:"0 0 16px rgba(255, 255, 255, 1)"});
    const baseURL = 'https://data.nasa.gov/resource/gh4g-9sfh.json';
    const apptoken = 'LrAgoJY5K35enN1LxGlh66Nid';
    const years = '?$where=year%20between%20%27'+this.state.year[0]+'-01-01T00:00:00.000%27%20and%20%27'+this.state.year[1]+'-01-01T00:00:00.000%27';
    const mass = 'and%20mass%20<=%20'+(this.state.mass[1]*1000)+'and%20mass%20>=%20'+(this.state.mass[0]*1000);
    const order = '&$order=mass%20DESC';
    //Build URL and retrieve data using axios, update states within this component and parent components
    const url = baseURL + years + mass + order;
    axios.get(url, {
      'X-app-token':apptoken,
      'limit':5000
    }).then(res => {
    const meteorJSON = res.data;
    this.setState({meteorJSON});
    this.props.click(meteorJSON,{year:this.state.year,mass:this.state.mass});
    this.setState({load:"0 0 16px rgba(255, 176, 30, 1)"});
    });
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleSlideKg(event){
      this.setState({mass:event});
  }

  handleSlideYr(event){
    this.setState({year:event});
}

      

  render(){
    return (
        <div>
        
      <Box sx={{
            px: 2,
            py:1,
            borderRadius: 5,
            boxShadow: this.state.load,
            backgroundColor: 'grey',
            color: 'black',
            height: '100%'
          }}>

          <Box id="searchForm" as='form' onSubmit={this.handleSubmit}>

          <div className="searchSlider">
            <Range min={1900} max={2020} defaultValue={[1900,2020]} step={1} value={this.state.year} onChange={this.handleSlideYr}
              handleStyle={[{
                color:"rgb(134, 164, 199)",
                borderColor:"rgb(134, 164, 199)",
                backgroundColor:"rgb(134, 164, 199)",
                cursor:'pointer'
              },{
                color:"rgb(134, 164, 199)",
                borderColor:"rgb(134, 164, 199)",
                backgroundColor:"rgb(134, 164, 199)",
                cursor:'pointer'
              }]}
              trackStyle={[{
                backgroundColor:"rgb(134, 164, 199)"
              }]}
              railStyle={{
                backgroundColor:"#414141"
              }}
              />
        <Flex>
          <Text className="tLft">{this.state.year[0]}</Text>
          <Text className="tRgt">{this.state.year[1]}</Text>
        </Flex>
        </div>
        <div className="searchSlider">
            <Range min={0} max={60000} defaultValue={[0,60000]} step={1} value={this.state.mass} onChange={this.handleSlideKg}
            handleStyle={[{
              color:"rgb(134, 164, 199)",
              borderColor:"rgb(134, 164, 199)",
              backgroundColor:"rgb(134, 164, 199)",
              cursor:'pointer'
            },{
              color:"rgb(134, 164, 199)",
              borderColor:"rgb(134, 164, 199)",
              backgroundColor:"rgb(134, 164, 199)",
              cursor:'pointer'
            }]}
            trackStyle={[{
              backgroundColor:"rgb(134, 164, 199)"
            }]}
            railStyle={{
              backgroundColor:"#414141"
            }}/>

          <Flex>
            <Text className="tLft">{this.state.mass[0]}kg</Text>
            <Text className="tRgt">{this.state.mass[1]}kg</Text>
          </Flex>
            </div>

            <Button className="searchButton" type="submit" sx={{
                cursor:'pointer',
                color:'black',
                backgroundColor:'rgba(134, 164, 199,1)',
            }}>Find Meteors</Button>
            </Box>
           
          </Box>
          </div>
);
  }
    
  }
  export default Search;
