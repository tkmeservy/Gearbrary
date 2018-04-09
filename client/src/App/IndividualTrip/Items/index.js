import React, { Component } from 'react';
import {connect} from "react-redux";
import {deleteItem} from "../../../redux/item"
import {addToArray} from "../../../redux/trip"

class Items extends Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props._id
        }
        this.handleClick=this.handleClick.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
    }
    componentDidMount(){

    }
    handleDelete = (e)=>{
        this.props.deleteItem(this.props.item._id)

    }
    handleClick = (e)=>{
        this.props.addToArray(this.props.tri.tripId, this.props.item._id)
    }
    

    render() {
        

        return (
            
            <div className="itemArray">
                
                <h3 className="item1">{this.props.item.name}</h3>
                <h3 className="item2">{this.props.item.brand}</h3>
                <h3 className="item3">{this.props.item.weight}</h3>
                <h3 className="item4">{this.props.item.description}</h3>
                <div className= "item5">
                <button onClick={this.handleClick}>Add to pack list</button>
                
                </div>
                
            </div>
        )
    }
}
export default connect(null, {deleteItem, addToArray})(Items)