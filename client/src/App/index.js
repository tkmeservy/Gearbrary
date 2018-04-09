import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux"
import TripForm from "../shared/TripForm"
import ItemForm from "../shared/ItemForm"
import TripList from "./TripList"
import ItemList from "./ItemList"
import NavBar from "./NavBar"
import Home from "./Home"
import IndividualTrip from "./IndividualTrip"
import "./app.css"
import { getItems } from "../redux/item"
import { getTrips } from "../redux/trip"



class App extends Component {
    componentDidMount() {
        this.props.getItems();
        this.props.getTrips();
    }
    render() {
        return (
            <div >
                <NavBar></NavBar>
                <div className="outside">
                    <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/triplist" component={TripList}></Route>
                        <Route path="/itemlist" component={ItemList}></Route>

                        <Route path="/:tripId" component={IndividualTrip}></Route>


                    </Switch>


                        
                    </div>
                   


                </div>




                {/* <ItemList></ItemList>

               <TripList></TripList> */}
            </div>
        )
    }

}

export default withRouter(connect(state => state, { getTrips, getItems })(App));