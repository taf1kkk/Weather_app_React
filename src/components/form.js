import React from "react";

class Form extends React.Component {
    render() {
        return ( 
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="cit" placeholder="Write your city"/>
                <button id="city"> Get the Weather </button>
            </form>
        )
    }
}

export default Form;