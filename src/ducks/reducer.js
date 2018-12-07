const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    img:'',
    monthlyMortgage: '',
    desiredRent: ''
}

const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATE = 'UPDATE_STATE'
const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE'
const UPDATE_IMG = 'UPDATE_IMG'
const UPDATE_MONTHLY_MORTGAGE = 'UPDATE_MONTHLY_MORTGAGE'
const UPDATE_DESIRED_RENT = 'UPDATE_DESIRED_RENT'
const RESET_STATE = 'RESET_STATE'

export function updateName (name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZipcode(zipcode) {
    return {
        type: UPDATE_ZIPCODE,
        payload: zipcode
    }
}

export function updateImg(img) {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}

export function updateMonthlyMortgage(mortgage) {
    return {
        type: UPDATE_MONTHLY_MORTGAGE,
        payload: mortgage
    }
}

export function updateDesiredRent(rent) {
    return {
        type: UPDATE_DESIRED_RENT,
        payload: rent
    }
}

export function resetState() {
    return {
        type: RESET_STATE
    }
}

export default function reducer (state=initialState, action) {
    switch(action.type) {
        case UPDATE_NAME:
            return {...state, name: action.payload}

        case UPDATE_ADDRESS:
            return {...state, address: action.payload}

        case UPDATE_CITY:
            return {...state, city: action.payload}

        case UPDATE_STATE:
            return {...state, state: action.payload}

        case UPDATE_ZIPCODE:
            return {...state, zipcode: action.payload}

        case UPDATE_IMG:
            return {...state, img: action.payload}

        case UPDATE_MONTHLY_MORTGAGE:
            return {...state, monthlyMortgage: action.payload}

        case UPDATE_DESIRED_RENT:
            return {...state, desiredRent: action.payload}

        case RESET_STATE:
            return {...state, name: '', address: '', city: '', state: '', zipcode: '', img: '', monthlyMortgage: '', desiredRent: ''}

        default:
            return state;
    }
}