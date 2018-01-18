import React , {Component} from "react";
import "./App.css";
import data from "./server/data";
import data1 from "./server/data1";
import th from "./server/th";
import th1 from "./server/th1"
import Table from "./components";

class App extends Component{

    state={
        data,
        data1,
        th,
        th1
    }
    
    _remove (id) {
        this.setState({
            data: this.state.data.filter((e)=> e.id !== id)
        })
    }
    _remove1  (id) {
        this.setState({
            data1: this.state.data1.filter((e)=> e.id !== id)
        })
    }

    _done  (id, item, quantity, toa, bib) {
        this.setState({
            data: this.state.data.filter((e)=> e.id !== id),
            data1: this.state.data1.concat({id, item, quantity,toa, bib})
        })
    }

    _undone  (id, item, quantity, toa, bib) {
        let updateData = [{id, item, quantity,toa, bib}];
        this.setState({
            data: updateData.concat(this.state.data),
            data1: this.state.data1.filter((e)=> e.id !== id)
        })
    }

    _addItem = (item, quantity, bib) => {
        const id = new Date();
        const toa = `${new Date().getMonth()+1}-${new Date().getDate()}-${new Date().getFullYear()}`
        let updateData = [];
        updateData.unshift({id, item, quantity, toa, bib})
        this.setState({
            data: updateData.concat(this.state.data),
        })
    }

    itemsWish = (item,i)=>{
        const time = Date.parse(item.bib)-Date.parse(new Date())
        const timeYouHave =  time > 0?Math.floor(time/(1000*60*60*24))+" Days":"Expired";
        return(
        <tr key={i}>
            <td><i onClick={()=>this._done(item.id, item.item, item.quantity, item.toa, item.bib)} className="fa fa-check-square-o" aria-hidden="true"></i></td>
            <td>{item.item}</td><td>{item.quantity}</td><td className="z">{item.toa}</td><td className="z">{item.bib}</td><td>{timeYouHave}</td>
            <td><i onClick={()=>this._remove(item.id)} className="fa fa-trash-o" aria-hidden="true"></i></td>
        </tr>
        )
    }

    itemsDone = (item,i)=>{
        const time = `${new Date().getHours()}:${new Date().getMinutes() > 9? new Date().getMinutes() : '0' + new Date().getMinutes()}  ${new Date().getMonth()+1}-${new Date().getDate()}-${new Date().getFullYear()}`;
        return(
        <tr key={i}>
            <td><i onClick={()=>this._undone(item.id, item.item, item.quantity, item.toa, item.bib)} className="fa fa-repeat" aria-hidden="true"></i></td>
            <td>{item.item}</td><td>{item.quantity}</td><td>{time}</td>
            <td><i onClick={()=>this._remove1(item.id)} className="fa fa-trash-o" aria-hidden="true"></i></td>
        </tr>
        )
    }

    render(){
        return(
            <div className="App">
                <div className="App-title">Shopping List</div>
                <Table class="wish" table="Wish List" items={this.itemsWish} data={this.state.data} addItem={this._addItem} th={this.state.th}/>
                <Table class="done" table="Done List" items={this.itemsDone} data={this.state.data1} th={this.state.th1}/>
            </div>
        )
    }
}

export default App;