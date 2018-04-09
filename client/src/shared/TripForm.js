import React, { Component } from "react";
import { connect } from "react-redux";
import {addTrip} from "../redux/trip.js"


class TripForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                destination: '',
                days: "",
                tripType: ""

            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }

            }
        })
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.addTrip(this.state.inputs)

    }

    render() {
        let {name, destination, length}=this.state.inputs
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <input onChange={this.handleChange}type="text" name="destination" placeholder="Destination"/>
                   <input onChange={this.handleChange}type="text"name="days" placeholder="How many days?"/>
                   <input onChange={this.handleChange}type="text"name="tripType" placeholder="Type of Trip"/>
                    <button>submit</button>
               </form>
        </div>

        )

    }
}

export default connect(state=>state, {addTrip})(TripForm)