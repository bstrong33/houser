import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZipcode } from './../../ducks/reducer';

class Step1 extends Component {

    // handleInput = (e) => {
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    // }

    render() {
        const { updateName, updateAddress, updateCity, updateState, updateZipcode } = this.props
        // console.log(this.props)
        return(
            <div>
                Wizard
                Name:
                <input value={this.props.name} onChange={(e) => updateName(e.target.value)}></input>
                Address:
                <input value={this.props.address} onChange={(e) => updateAddress(e.target.value)}></input>
                City:
                <input value={this.props.city} onChange={(e) => updateCity(e.target.value)}></input>
                State:
                <input value={this.props.state} onChange={(e) => updateState(e.target.value)}></input>
                Zipcode:
                <input value={this.props.zipcode} onChange={(e) => updateZipcode(e.target.value)}
                ></input>
                <Link to='/wizard/step2'>
                    <button >
                    Next Step</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {...state}
}

export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZipcode })(Step1);