import React, {Component} from 'react';

export default class FirstComponent extends Component{

    handleChange = (e) => {
        this.setState({
            textBoxValue: e.target.value
        });
    }

    constructor(props) {
        super(props);
        this.state = { 
            time: new Date().toLocaleTimeString(),
            textBoxSug: "Please type a number"
        };
    }

    tick() {
        this.setState(prevState => ({
          time: new Date().toLocaleTimeString()
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render(){
        const inputElem = ( <div>
            <input 
                type="text"
                placeholder={this.state.textBoxSug}
                onChange={this.handleChange}/>
        </div>);
        const textElem = (<div>{this.state.textBoxValue}</div>);

        const timeElem = (<div>
                            <h4>It is : </h4><i>{this.state.time}</i>
                        </div>);

        return (<div className="comptext">
                <h3>GO ROMAN</h3>
                {this.props.displaytext}
                {inputElem}
                {textElem}
                {timeElem}
            </div>
           
        );
    }
}