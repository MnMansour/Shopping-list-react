import React , {Component} from "react";
import "../App.css";
import Form from "./form"

class Table extends Component{

    state= {
        displayF:{display:"none"},
        displayT:{display:"table"},
        displayI:{display:""},
        iconClass:"fa fa-chevron-circle-up"
    }

    expand = () => {
        this.state.displayT.display==="table" ? this.setState({displayT:{display:"none"}}) : this.setState({displayT:{display:"table"}})
        this.state.iconClass==="fa fa-chevron-circle-up"?this.setState({iconClass:"fa fa-chevron-circle-down"}):this.setState({iconClass:"fa fa-chevron-circle-up"})
    }

    showForm = () =>{
        this.setState({displayF:{display:"block"}})
    }

    _addItemX = (id, quantity, bib) =>{
        this.props.addItem(id, quantity, bib);
        this.setState({
            displayF:{display:"none"}
        })            
    }
    
    componentWillMount(){
        if(!this.props.addItem){
            this.setState({
                displayI:{display:"none"},
                displayT:{display:"none"},
                iconClass:"fa fa-chevron-circle-down"
            })
        }
    }

    render(){
        const th = this.props.th.map((item,i)=> {
            return( 
                <th key={i}>{item}</th>
            )
        })

        const items = this.props.data.map(this.props.items)
        return(
        <div className="wish">
            <div className="sub-title"> {this.props.table} 
                <span>
                    <i style={this.state.displayI} onClick={this.showForm} className="fa fa-plus-circle" aria-hidden="true"></i>
                    <i onClick={this.expand} className={this.state.iconClass} aria-hidden="true"></i>
                </span>
            </div>
            <Form addItemX={this._addItemX} display={this.state.displayF}/>
            <table style={this.state.displayT}>
                <thead>
                    <tr>{th}</tr>
                </thead>
                <tbody id="tbody">
                    {items}
                </tbody>
            </table>
        </div>
        )
    }  
}

export default Table;