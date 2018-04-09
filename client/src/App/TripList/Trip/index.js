import React, { Component } from 'react';
import {connect} from "react-redux";
import {deleteTrip} from "../../../redux/trip"
import TripForm from "../../../shared/TripForm"
import {Link} from "react-router-dom"

class Trip extends Component {
    constructor(props){
        super(props)
        this.state={
            isEditing: false
        }
    }
    handleDelete = (e)=>{
        this.props.deleteTrip(this.props._id)

    }
    toggleEdit=()=>{
        this.setState={
            isEditing: !this.state.isEditing
        }
    }
    handleClick=()=>{


    }

    render() {
        console.log(this.props)
        if (this.state.isEditing){
            return (
                <TripForm></TripForm>
            )
        }
        return (

            <div className="tripArray">
                <div className="trip1">
                <button onClick={this.handleDelete}>delete</button>
               <button onClick={this.toggleEdit}>edit</button>
                <h3 className="tripInline">{this.props.destination}</h3>
                
                </div>
                
                <h3 className="trip2">{this.props.days} days.</h3>
                <h3 className="trip3">This is a {this.props.tripType} trip. </h3>
               <div className="trip4">
               
               <div>
               <Link className = "linkTripList" to ={`/${this.props._id}`}>View Trip and Create Pack List</Link>

               </div>
               

               </div>
                
                
            </div>
        )
    }
}
export default connect (null, {deleteTrip})(Trip)
