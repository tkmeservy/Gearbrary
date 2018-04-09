import React, {Component} from 'react'


class IndInventory extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }


        this.handleDelete=this.handleDelete.bind(this)
    }

    handleDelete=(e)=>{
        
    }


   
    render(){
        console.log(this.props)
        return (
            <div className="packList">
             <h3 className="packListItem1">{this.props.brand}</h3>
                <h3 className="packListItem2">{this.props.name}</h3>
                <h3 className="packListItem3">{this.props.description}</h3>
                
                
            </div>
        )



        
    }
    
}

export default IndInventory
