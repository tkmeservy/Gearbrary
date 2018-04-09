import React, { Component } from 'react';
import { connect } from "react-redux";
import Items from "./Items";
import IndInventory from "./IndInventory"

class IndividualTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trip: {},
            toggle: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        let { trip } = this.props;
        let { tripId } = this.props.match.params;
        if (!trip.loading) {
            this.setState({
                trip: trip.data.filter((indTrip) => {
                    return indTrip._id === tripId
                })[0],
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            trip: nextProps.trip.data.filter((indTrip) => {
                return indTrip._id === this.props.match.params.tripId
            })[0],
        })
        //if trips is done loading set state to the single trip matching params.tripid
    }
    handleClick() {
        if (this.state.toggle) {
            this.setState({
                toggle: false
            })
        } else {
            this.setState({
                toggle: true
            })
        }
    }


    render() {

        // console.log(this.props.item.data)
        let packlist = []
        let displayPacklist = []
        let weight = 0

        console.log(packlist)
        // console.log(this.props.trip.data[0])
        const tri = { tripId: this.props.match.params.tripId }
        const copyTri = Object.assign({}, tri)
        let { data } = this.props.item

        let totalWeight = weights => {
            return weights.reduce((total, curr) => {
                return total + curr.weight;
            }, 0)
        }
        // let itemData = data.filter((item, i)=>{
        //     return this.state.trip.items.includes(item._id)
        // })

        const itemArray = data.map((item, i) => {
            return <Items key={i} itemsData={this.props.item.data} trip={this.props.trip.data} tri={copyTri} item={item}></Items>
        })
        return (
            this.props.trip.loading ?
                <div>loading...</div> :
                <div className="individualTrip">
                    <div className="indTripTitle">
                        <h1 className="indTripName">{this.state.trip.destination} Trip</h1>
                        <div className="indTripContent">
                            <h2>This is a {this.state.trip.tripType} trip</h2>
                            <h2>{this.state.trip.days} Days</h2>

                            <h2>Total Weight={totalWeight(data.filter((item, i) => {
                                return this.state.trip.items.includes(item._id)
                            }))} Pounds</h2>


                        </div>

                    </div>
                    <div className="packListWrapper">
                        <div className="pack">
                            <h3 className="packListTitle">Pack List</h3>
                            {data.filter((item, i) => {
                                return this.state.trip.items.includes(item._id)
                            }).map((item, i) => {
                                return <IndInventory key={i} {...item}></IndInventory>
                            })}


                        </div>



                    </div>



                    <div>



                    <button onClick={this.handleClick}>View And Select Gear To Pack</button>

                    </div>

                    {this.state.toggle ? <div className="itemsArray">{itemArray}
                        

                       
                        </div> : <div></div>}
                    
                    
                   

                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        item: state.item,
        trip: state.trip
    }
}
export default connect(mapStateToProps, {})(IndividualTrip)
