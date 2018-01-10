import React , {Component} from "react";
import "../App.css";
import Form from "./form"

class Wish extends Component{

    state= {
        item: "",
        quantity:"",
        bib:"",
        displayF:{display:"none"},
        displayT:{display:"table"},
        iconClass:"fa fa-chevron-circle-up"
    }

    Expand = () => {
        this.state.displayT.display==="table" ? this.setState({displayT:{display:"none"}}) : this.setState({displayT:{display:"table"}})
        this.state. iconClass==="fa fa-chevron-circle-up"?this.setState({iconClass:"fa fa-chevron-circle-down"}):this.setState({iconClass:"fa fa-chevron-circle-up"})
    }

    showForm = () =>{
        this.setState({displayF:{display:"block"}})
    }

    _addItemX = (id, quantity, bib) =>{
        this.props.addItem(id, quantity, bib);
        this.setState({
            item: '',
            quantity:'',
            bib:'',
            displayF:{display:"none"}
        })            
    }

    render(){

        const items = this.props.data.map((item,i)=>{
            const time = Date.parse(item.bib)-Date.parse(new Date())
            const timeYouHave =  time > 0?Math.floor(time/(1000*60*60*24))+" Days":"Expired";
            return(
            <tr key={i}>
                <td><i onClick={()=>this.props.done(item.id, item.item, item.quantity, item.toa, item.bib)} className="fa fa-check-square-o" aria-hidden="true"></i></td>
                <td>{item.item}</td><td>{item.quantity}</td><td className="z">{item.toa}</td><td className="z">{item.bib}</td><td>{timeYouHave}</td>
                <td><i onClick={()=>this.props.remove(item.id)} className="fa fa-trash-o" aria-hidden="true"></i></td>
            </tr>
            )
        })

        return(

            <div className="wish">
                <div className="sub-title"> Wish List 
                    <span>
                        <i onClick={()=>this.showForm()} id="addI" className="fa fa-plus-circle" aria-hidden="true"></i> 
                        <i onClick={()=>this.Expand()} id="expand" className={this.state.iconClass} aria-hidden="true"></i>
                    </span>
                </div>
                <Form addItemX={this._addItemX} display={this.state.displayF}/>
                <table style={this.state.displayT}>
                    <thead>
                        <tr><th></th><th>Item Neme</th><th>Q</th><th className="z">Time of add</th><th className="z">Buy it before</th><th>Time you have</th></tr>
                    </thead>
                    <tbody id="tbody">
                        {items}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Wish;