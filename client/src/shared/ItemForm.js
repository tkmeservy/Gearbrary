import React, { Component } from "react";
import { connect } from "react-redux";
import {addItem} from "../redux/item"


class ItemForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            inputs: {
                name: "",
                brand:"",
                weight:"",
                description:"",
            }
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e){
        let{name, value}=e.target;
        this.setState((prevState)=>{
            return{
                inputs:{
                    ...prevState.inputs,
                    [name]:value
                }
            }
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addItem(this.state.inputs)
        
    }
    


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="name"placeholder="Item Name"/>
                    <input onChange={this.handleChange} type="text" name="brand"placeholder="Brand"/>
                    <input onChange={this.handleChange} type="number"  name="weight"placeholder="Weight"/>
                    <input onChange={this.handleChange} type="text"  name="description"placeholder="Description"/>
                    <button >submit</button>
                </form>
            </div>

        )

    }
}

export default connect(state=> state, {addItem})(ItemForm)