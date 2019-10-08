import React, {Component} from 'react';
import Clock from './Clock';

export default class FirstComponent extends Component{

    handleChange = (e) => {
        this.setState({
            textBoxValue: e.target.value
        });
    }

    constructor(props) {
        super(props);
        this.state = { 
            textBoxSug: "Please type a number"
        };
    }
    
    render(){
        const inputElem = ( <div>
            <input 
                type="text"
                placeholder={this.state.textBoxSug}
                onChange={this.handleChange}/>
        </div>);
        const textElem = (<div>{this.state.textBoxValue}</div>);

        

        return (<div className="comptext">
                <h3>GO ROMAN</h3>
                {this.props.displaytext}
                {inputElem}
                {textElem}
                <Clock/>
            </div>
           
        );
    }
}