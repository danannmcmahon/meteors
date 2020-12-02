import Info from './info';
import Map from './map';
import React, { Component } from 'react';
import Nav from './view-navigation';


export class DetailView extends Component {

    render(){
        return(
        <React.Fragment>
            

            <div className="detailGrid">
            <Nav link='/meteors/' text='< Meteor Selection' />
            <div id='dgrid-1'>
            <Map met={this.props.met} />
            </div>
            <div id='dgrid-2'>
            <Info met={this.props.met}/>
            </div>            
            </div>
            

        </React.Fragment>
        )
    }

}
