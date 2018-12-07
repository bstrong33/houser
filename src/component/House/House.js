import React from 'react';
import './../../App.css';

export default function House (props) {
    let { name, address, city, state, zipcode, id, img, mortgage, rent, deleteFn } = props
    return (
        <div key={id} className='eachHouse'>
            <div className='image'>
                <img src={img} alt='house'/>
            </div>
            <div className='houseInfo'>
                <p>Property Name: {name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zipcode: {zipcode}</p>
            </div>
            <div className='rent'>
                <p>Monthly Mortgage: {mortgage}</p>
                <p>Desired Rent: {rent}</p>
            </div>
            <div className='delete'>
                <button onClick={() => {deleteFn(id)}}>Delete</button>
            </div>
        </div>
    )
}