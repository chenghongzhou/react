import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Commentcount from './Commentcount'
import Commentcounters from './Commentcounters'
import registerServiceWorker from './registerServiceWorker';

class Index extends Component{

constructor(){
	super();
	this.state={

		list:[{name:"吴雨泽",conent:"年少衬轻狂，谈笑倚同窗",timer:+new Date()}],
		

	}
}
componentWillMount(){
	let list=localStorage.getItem("list");
	if(list){
		list=JSON.parse(list);
		this.setState(list)
		this.state.list=list
	}
	console.log(JSON.parse(localStorage.getItem("list")),789)
}
apps(listnr){
	console.log(listnr)
	this.state.list.push(listnr)
	console.log(this.state.list,1)
	localStorage.setItem("list",JSON.stringify(this.state.list))

	this.setState({
		list:this.state.list,
	})
}
tjdelt(index){
   this.state.list.splice(index,1)
   this.setState({
   	list:this.state.list
   })
   localStorage.setItem("list",JSON.stringify(this.state.list))
}
	render(){
		return (
			<div>
				<App onSubmit={this.apps.bind(this)}/>
				<Commentcount list={this.state.list} onTj={this.tjdelt.bind(this)}/>
			</div>
			)
	}
}
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
