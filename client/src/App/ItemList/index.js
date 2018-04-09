import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Item from "./Item"
import { getItems } from "../../redux/item"
import ItemForm from "../../shared/ItemForm"
import { Modal } from "react-bootstrap"
import { modalToggle } from "../../redux/modal"

export class ItemList extends Component {
    constructor(props){
        super(props)
    }
    // componentDidMount() {
    //     this.props.getItems()
    // }
    render() {
        let {modalToggle } = this.props
        let {show}=this.props.modal
        // console.log (this.props.item)
        let { data, loading } = this.props.item
        const itemArray = data.map((item, i) => {
            return <Item key={i}{...item}></Item>
        })
        return (
            <div className="wrapper1">
            <Modal className="backdrop-style" show={show} onHide={modalToggle}>
                    <div className="modal-style">
                        <Modal.Dialog >
                            <Modal.Header>
                                <Modal.Title> Add GEAR</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <ItemForm></ItemForm>
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={modalToggle}>close</button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>

                </Modal>

                <div className="trips"><h1>Gear List</h1></div>
                


                <div className="con">
                    <div className="itemTitle">
                        <h1 className="it1">Item Name</h1>
                        <h1 className="it2">Brand</h1>
                        <h1 className="it3">Weight</h1>
                        <h1 className="it4">Description</h1>
                    </div>
                    
                    

                    {itemArray}
                    <button onClick={modalToggle}>Add More Gear</button>
                </div>

            </div>
        )
    }
}
export default connect(state => state, { getItems, modalToggle})(ItemList)
