import React, {Component} from 'react';

export default class FirstComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const element = (<div>No more text</div>)
        return (<div className="comptext">
            <h3>GO ROMAN</h3>
            {this.props.displaytext}
            {element}
        </div>)
    }
}