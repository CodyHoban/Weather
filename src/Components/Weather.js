import React, {Component} from 'react';
import {connect} from 'react-redux';


const ObjectComponent = React.Component

class Weather extends ObjectComponent {
    constructor(props){
        super(props)
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        console.log(event.target.value)
       this.props.dispatch({type: "LOCATION",
                            payload: event.target.value});
    } 



    render () {
        return (
            
            <div>
                {console.log(this.props)}
                <h2>Where would you like to know the weather?</h2>
                <input 
                    value={this.props.input}
                    onChange={this.handleChange} />



            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {input: state.input}
};




export default connect(mapStateToProps)(Weather);

            