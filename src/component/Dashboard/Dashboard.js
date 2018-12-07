import React, { Component } from 'react';
import House from './../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './../../App.css';

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        this.getHouses()
    }

    getHouses = () => {
        axios.get('/api/houses').then(resp => {
            console.log(resp.data)
            this.setState({
                houses: resp.data
            })
        })
    }

    deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`)
    }

    render() {
        let mappedHouses = this.state.houses.map(house => {
            return (
                <House  key={house.id}
                        name={house.name}
                        address={house.address}
                        city={house.city}
                        state={house.state}
                        zipcode={house.zipcode}
                        id={house.id}
                        img={house.image}
                        mortgage={house.monthly_mortgage}
                        rent={house.desired_rent}
                        deleteFn={this.deleteHouse}
                />
            )
        })
        return(
            <div className='dashboard'>
                Dashboard
                <Link to='/wizard/step1' ><button>Add New Property</button></Link>
                {mappedHouses}
            </div>
        )
    }
}

export default Dashboard