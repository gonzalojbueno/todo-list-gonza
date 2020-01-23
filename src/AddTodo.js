import React , {Component} from 'react';

class AddTodo extends Component{

state = {

content: ''

}

handleChange = (e) =>{

		this.setState({

			content: e.target.value
		})

}

handleSubmit = (e) =>{

	e.preventDefault();
	this.props.addTodo(this.state);
	this.setState({
		content: ''
	})
}

	render(){
		return (

			<div id="formulario">				
				<form onSubmit = {this.handleSubmit}>
					<input id="input" type="text" placeholder="¿Qué tienes que hacer?" onChange={this.handleChange} value={this.state.content}/>
				</form>
			</div>
			)
	}
}

export default AddTodo