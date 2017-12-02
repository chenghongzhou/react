import React, { Component } from 'react';
import './App.css';

class Commentcounters extends Component {


  constructor () {
    super()
    this.state = { timeString: '' }
  }

  componentWillMount () {
    this._updateTimeString()
    console.log(this.props.list,123)
  }

  _updateTimeString () {
    const list = this.props.list
    const duration = (+Date.now() - list.timer) / 1000
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }
  delt(index){
  	if(this.props.onDelt){
  		 this.props.onDelt(this.props.index)
  		 console.log(this.props.index,JSON.parse(localStorage.getItem("list")));
  	}
  }
  render() {
    return (
        <div className="commentlist" style={{position:'relative'}}>  
        	<a href="javascript:;" style={{position:'absolute',top:'0px',right:'20px',display:"block",color:"#ccc"}} onClick={this.delt.bind(this)} >x</a>
          <span className="clname">{this.props.list.name}：</span><span className="clcount">{this.props.list.conent}</span>
          <span style={{position:'absolute',bottom:'2px',right:'20px',fontSize:'10px',color:"#666"}}>{this.state.timeString}</span>
        </div>
    );
  }
}

export default Commentcounters;
