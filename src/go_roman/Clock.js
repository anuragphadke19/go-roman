import React, {Component} from 'react';

export default class Clock extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            time: new Date().toLocaleTimeString(),
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
        return(
            <div>
                <h4>It is : </h4><i>{this.state.time}</i>
            </div>
        );
    }
}