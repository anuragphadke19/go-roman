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
        };
    }
    
    render(){
        const inputElem = ( <div>
            <input 
                type="text"
                placeholder="Please type a number"
                onChange={this.handleChange}/>
        </div>);
        const textElem = (<div>{this.state.textBoxValue}</div>);

        

        return (<div className="comptext">
                <h3>GO ROMAN</h3>
                {inputElem}
                {textElem}
                <Clock/>
            </div>
           
        );
    }
}