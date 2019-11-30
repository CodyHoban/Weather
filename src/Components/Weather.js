import React, {Component} from 'react';
import {connect} from 'react-redux';
import Api from '../Services/Api';


const ObjectComponent = React.Component

class Weather extends ObjectComponent {
    constructor(props){
        super(props)
    }

    handleChange = (event) => {
       this.props.dispatch({
           type: "LOCATION",
           payload: event.target.value,
        });
    } 

    handleSubmit = () => {
        Api.get().then((response) => {
            this.props.dispatch({
                type: "DARK_SKY_INFO",
                payload: response,
            });
        });
        

    }


    render () {
        console.log(this.props)
        return (
            
            <div>
                {console.log(this.props)}
                <h2>Where would you like to know the weather?</h2>
                <input 
                    value={this.props.input}
                    onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Submit</button>
                <h3>{this.props.outSide ? this.props.outSide.timezone: null}</h3>



            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        input: state.input,
        outSide: state.outSide,
    }
};




export default connect(mapStateToProps)(Weather);

            