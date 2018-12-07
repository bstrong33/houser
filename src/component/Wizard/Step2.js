import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImg } from './../../ducks/reducer';

class Step2 extends Component {
    
    render() {
        const { updateImg } = this.props
        return(
            <div>
                Wizard
                Image URL:
                <input value={this.props.img}onChange={(e) => {updateImg(e.target.value)}}></input>
                <Link to='/wizard/step1'><button>Previous Step</button></Link>
                <Link to='/wizard/step3'><button>Next Step</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {...state}
}

export default connect(mapStateToProps, {updateImg})(Step2);