import List from './list';
import Search from './search';
import React, { Component } from 'react';
import Nav from './view-navigation';

export class SearchView extends Component {

    constructor(props){
        super(props);

        this.state = {
            meteorJSON:this.props.json,
            meteorID:this.props.metID,
            year:''
        };



        this.handleClick = this.handleClick.bind(this);
        this.handleClickItem = this.handleClickItem.bind(this);

    }


    handleClick(iso,isa){
        this.setState({meteorJSON:iso});
        this.props.clickj(iso);
        this.props.setPar(isa);
    }

    handleClickItem(iso){
        this.setState({meteorID:iso});
        this.props.clicki(iso);
    }


    render(){
        return(
        <React.Fragment>
            <div className="searchGrid">
            <Nav link='/meteors/detail' text='Meteor Information >' />
            <div id='sgrid-1'>
                <Search click={this.handleClick} sp={this.props.sp}/>
            </div>
            <div id='sgrid-2'>
                <List json={this.state.meteorJSON} click={this.handleClickItem} metID={this.state.meteorID}/>
            </div>            
            </div>
        </React.Fragment>
        )
    }

}
