import React,{Component} from 'react'

class AddTodo extends Component{

    state={
        content:''
    }

    handleCHange=(e)=>{
        this.setState({
            content:e.target.value
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    New Todo:
                </label>
                <input type="text" onChange={this.handleCHange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo