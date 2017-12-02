import React, { Component } from 'react';
import './App.css';
import Commentcounters from './Commentcounters'


class Commentcount extends Component {

  
pdelt(index){
  if(this.props.onTj){
      this.props.onTj(index)
  }
}
  render() {
    return (
      <div className="App" style={{minHeight:'400px',position:'relative',height:"auto"}}>
        {this.props.list.map((list,i)=> <Commentcounters list={list} key={i} index={i} onDelt={this.pdelt.bind(this)}/>)}
      </div>
    );
  }
}

export default Commentcount;
