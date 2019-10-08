import React, {Component} from 'react';
import './App.css';
import GoRoman from './go_roman/GoRoman'

export default class App extends Component{
  render(){
    return (
      <div className="App">
        <GoRoman />       
      </div>)
  }
}