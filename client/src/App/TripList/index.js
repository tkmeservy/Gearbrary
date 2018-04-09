import React, { Component } from 'react'
import { connect } from "react-redux"
import { getTrips } from "../../redux/trip"
import { Link } from "react-router-dom"
import Trip from "./Trip"
import TripForm from "../../shared/TripForm"
import { Modal } from "react-bootstrap"
import { modalToggle } from "../../redux/modal"



class TripList extends Component {
    constructor(props){
        super(props)
        
    }

    render() {
        //    console.log(this.props.trip.loading)
        let { data, loading } = this.props.trip
        const tripArray = data.map((trip, i) => {
            return <Trip key={i}{...trip}></Trip>
        })
       
        let {modalToggle } = this.props
        let {show}=this.props.modal
        return (

            <div className="wrapper1">
                <Modal className="backdrop-style" show={show} onHide={modalToggle}>
                    <div className="modal-style">
                        <Modal.Dialog >
                            <Modal.Header>
                                <Modal.Title> Create new Trip</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <TripForm></TripForm>
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={modalToggle}>close</button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>

                </Modal>
                
                <div className='trips' >
                    <h1  >Trip Selector</h1>
                    
                </div>
                



                <div className="con">

                    <div className="tripTitle">
                        <h1 className="tr1">Destination</h1>
                        <h1 className="tr2">Duration</h1>
                        <h1 className="tr3">Type of Trip</h1>



                    </div>
                    {tripArray}
                    <button onClick={modalToggle}>Add New Trip</button>
                </div>

            </div>
        )
    }
}

export default connect(state => state, { getTrips, modalToggle })(TripList)

