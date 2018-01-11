import React , {Component} from "react";
import "../App.css";

class Done extends Component{

    state={
        displayT:{display:"none"},
        iconClass:"fa fa-chevron-circle-down"
    }

    Expand = () => {
        this.state.displayT.display==="table" ? this.setState({displayT:{display:"none"}}) : this.setState({displayT:{display:"table"}})
        this.state. iconClass==="fa fa-chevron-circle-up"?this.setState({iconClass:"fa fa-chevron-circle-down"}):this.setState({iconClass:"fa fa-chevron-circle-up"})
    }

    render(){
        const items = this.props.data.map((item,i)=>{
            const time = `${new Date().getHours()}:${new Date().getMinutes() > 9? new Date().getMinutes() : '0' + new Date().getMinutes()}  ${new Date().getMonth()+1}-${new Date().getDate()}-${new Date().getFullYear()}`;
            return(
            <tr key={i}>
                <td><i  onClick={()=>this.props.undone(item.id, item.item, item.quantity, item.toa, item.bib)} className="fa fa-repeat" aria-hidden="true"></i></td>
                <td>{item.item}</td><td>{item.quantity}</td><td>{time}</td>
                <td><i onClick={()=>this.props.remove(item.id)} className="fa fa-trash-o" aria-hidden="true"></i></td>
            </tr>
            )
        })
        return(
            <div className="done">
                <div className="sub-title"> Done List 
                    <span>
                        <i onClick={()=>this.Expand()} id="expand1" className={this.state.iconClass} aria-hidden="true"></i>
                    </span>
                </div>
                <table style={this.state.displayT}>
                    <thead>
                        <tr><th></th><th>Item Neme</th><th>Q</th><th>Time Of Purchase</th></tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Done;