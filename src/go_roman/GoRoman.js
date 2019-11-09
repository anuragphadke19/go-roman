import React, {Component} from 'react';
import Clock from './Clock';

const conversion = {
    "1": "I",
    "5": "V",
    "10": "X",
    "50": "L",
    "100": "C",
    "500": "D",
    "1000": "M"
}

export default class FirstComponent extends Component{
    
    showRoman = (input) => {
        let output
        if (input.in(1, 5, 10, 50, 100, 500, 1000)){
            // Pick from a name value pair
            output = '';
        } else if(true) {
            // TODO divide input by 1000
            // Thousands
            // 3455/1000 q 3 r 455 
            
            // 3/4 q 0 - MMM
            // Five hundreds
            // 455/500 q 0 - skip
            // Hundreds
            // 455/100 q 4 r 55 
            // 4/5 q 0 - skip
            // 4/4 q 1 r 0- MMMCD
            // Fiftys
            // 55/50 q 1 r 5
            // 5/5 q 1 r 0 - MMMCDV 

        }
    
        return output;
    }

    handleChange = (e) => {
        let text = e.target.value;
        let romanText = this.showRoman(text);
        this.setState({
            textBoxValue: romanText
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