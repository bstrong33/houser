import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateMonthlyMortgage, updateDesiredRent } from './../../ducks/reducer';

class Step3 extends Component {

    addHouse = (name, address, city, state, zipcode, img, monthlyMortgage, desiredRent) => {
        axios.post('/api/houses', {name, address, city, state, zipcode, img, monthlyMortgage, desiredRent})
    }

    render() {
        const { name, address, city, state, zipcode, img, monthlyMortgage, desiredRent, updateMonthlyMortgage, updateDesiredRent } = this.props
        return(
            <div>
                Monthly Mortgage Amount:
                <input value={monthlyMortgage} onChange={(e) => updateMonthlyMortgage(e.target.value)}></input>
                Desired Monthly Rent:
                <input value={desiredRent} onChange={(e) => {updateDesiredRent(e.target.value)}}
                ></input>
                <Link to='/wizard/step2'><button>Previous Step</button></Link>
                <Link to='/' >
                    <button onClick={() => this.addHouse(name, address, city, state, zipcode, img, monthlyMortgage, desiredRent)}>Complete</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {...state}
}

export default connect(mapStateToProps, { updateMonthlyMortgage, updateDesiredRent})(Step3);