import React, { Component } from 'react';
import './App.css';
class App extends Component {
	constructor(){
		super();
		this.state={
			list:{name:'',
			conent:'',timer:''}
		}
	}
	iname(e){
		this.setState({
			name:e.target.value
		})
		
	}
	iconent(e){
		this.setState({
			conent:e.target.value
		})
	}
	componentDidMount(){
		this.input.focus();
	}

	btns(){
	var rite=document.querySelector(".rite");
	var ritearea=document.querySelector(".ritearea");
	if(rite.value.length<1||ritearea.value.length<1){
		alert("请填写完整再提交")
		return false;
	}
	 if (this.props.onSubmit) {
	 	this.state.timer=+new Date();
      const { name, conent ,timer} = this.state
      this.props.onSubmit({name, conent,timer})
      console.log(this.props.list,"app")
    }
    this.setState({ list: ''})
    this.state.name=""
   	this.state.conent="" 
}
  render() {
    return (
      <div className="App">
      	<div className="nametitle">
      		<span>用户名：</span>
      		<input type="text" className="rite" value={this.state.name} onChange={this.iname.bind(this)} ref={(input)=>this.input=input}/>
      	</div>
      	<div className="nametitle">
      		<span>评论内容：</span>
      		<textarea className="ritearea" value={this.state.conent} onChange={this.iconent.bind(this)} />
      	</div>
      	<a href="javascript:;" className="sendbtn" onClick={this.btns.bind(this)}>发表</a>
      </div>
    );
  }
}

export default App;
