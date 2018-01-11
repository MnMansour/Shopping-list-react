import React , {Component} from "react";
import "../App.css";

class Form extends Component{

    state={
        item:"",
        quantity:"",
        bib:""
    }

    addItem = () =>{
        this.props.addItemX(this.state.item, this.state.quantity, this.state.bib)
        this.setState({
            item:"",
            quantity:"",
            bib:""
        })
    }


    render(){

        return(
            <div style={this.props.display} className="add" id="add">
                <input type="text" placeholder="Item Name" 
                value={this.state.item} onChange={(e) =>this.setState({'item':e.target.value})}/>
                <input type="text" placeholder="Quantity" 
                value={this.state.quantity} onChange={(e) =>this.setState({'quantity':e.target.value})}/>
                <input type="text" placeholder="Buy it before" 
                value={this.state.bib} onChange={(e) =>this.setState({'bib':e.target.value})}/>
                <button onClick={()=>this.addItem()}  id="add">Add Item</button>
            </div>      
        )
    }
}

export default Form;