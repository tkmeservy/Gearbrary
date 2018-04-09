import React, { Component } from 'react';
import {connect} from "react-redux";
import {deleteItem} from "../../../redux/item"

class Item extends Component {

    handleDelete = (e)=>{
        this.props.deleteItem(this.props._id)

    }
    render() {
        console.log(this.props)
        return (
            <div className="itemArray">
                <h3 className="item1">{this.props.name}</h3>
                <h3 className="item2">{this.props.brand}</h3>
                <h3 className="item3">{this.props.weight}</h3>
                <h3 className="item4">{this.props.description}</h3>
                <div className= "item5">
                <button onClick={this.handleDelete}>delete</button>
                <button>edit</button>
                </div>
                
            </div>
        )
    }
}
export default connect(null, {deleteItem})(Item)