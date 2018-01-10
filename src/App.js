import React , {Component} from "react";
import "./App.css";
import {data} from "./data";
import Wish from "./wish";
import Done from "./done";

class App extends Component{

    state={
        data:data,
        data1: []
    }
    
    _remove = (id) =>{
        this.setState({
            data: this.state.data.filter((e)=> e.id !== id)
        })
    }
    _remove1 = (id) =>{
        this.setState({
            data1: this.state.data1.filter((e)=> e.id !== id)
        })
    }

    _done = (id, item, quantity, toa, bib) =>{
        let updateData1 = this.state.data1
        
        updateData1.unshift({id, item, quantity,toa, bib})
        this.setState({
            data: this.state.data.filter((e)=> e.id !== id),
            data1: updateData1
        })
    }

    _undone = (id, item, quantity, toa, bib) =>{
        let updateData = this.state.data
        
        updateData.unshift({id, item, quantity, toa, bib})
        this.setState({
            data: updateData,
            data1: this.state.data1.filter((e)=> e.id !== id)
        })
    }

    _addItem = (item, quantity, bib) => {
        const id = new Date();
        const toa = `${new Date().getMonth()+1}-${new Date().getDate()}-${new Date().getFullYear()}`
        let updateData = this.state.data;
        updateData.unshift({id, item, quantity, toa, bib})
        this.setState({
            data: updateData,
        })
        
    }

    render(){
                return(
            <div className="App">
                <div className="App-title">Shopping List</div>
                <Wish remove={this._remove} done={this._done} data={this.state.data} addItem={this._addItem} />
                <Done remove={this._remove1} undone={this._undone} data={this.state.data1}/>
            </div>
        )
    }
}

export default App;