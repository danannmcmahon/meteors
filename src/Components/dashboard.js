import Info from './info';
import List from './list';
import Map from './map';
import Search from './search';
import React, { Component } from 'react';


export class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            meteorJSON:this.props.mj,
            meteorID:this.props.mi,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClickItem = this.handleClickItem.bind(this);

    }


    handleClick(iso,isa){
        this.setState({meteorJSON:iso});
        //States stored in App.js to allow continuity if routing occurs
        this.props.clickj(iso);
        this.props.setPar(isa);
    }

    handleClickItem(iso){
        this.setState({meteorID:iso});
        //States stored in App.js to allow continuity if routing occurs
        this.props.clicki(iso);
    }


    render(){
        return(
        <React.Fragment>
            <div className='dashboard'>
            <div id='grid-1'>
                <Search sp={this.props.sp} click={this.handleClick}/>
            </div>
            <div id='grid-2'>
                <List json={this.state.meteorJSON} click={this.handleClickItem} metID={this.state.meteorID}/>
            </div>
            <div id='grid-3'>
                <Map met={this.state.meteorID} />
            </div>    
            <div id='grid-4'>
                <Info met={this.state.meteorID}/>
            </div>       
            </div>

        </React.Fragment>
        )
    }

}