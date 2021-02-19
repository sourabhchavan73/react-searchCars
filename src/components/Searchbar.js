import React, { Component } from 'react'

 class Searchbar extends Component {
    state = {userInput: ''}

    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.userInput);
        this.props.onSubmit(this.state.userInput)
    }

    onInputChange = (e) => {
        this.setState({ userInput: e.target.value })
    }
    

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.userInput} 
                            onChange={this.onInputChange}  
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Searchbar
