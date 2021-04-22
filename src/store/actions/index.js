import axios from 'axios'

export const FETCH_BREWERIES_SUCCESS = "FETCH_BREWERIES_SUCCESS"

export const fetchData = () => {
    return (dispatch) => {
        axios
        .get('https://api.openbrewerydb.org/breweries?by_city=fort_collins')
        .then(res => {
            dispatch({ type: FETCH_BREWERIES_SUCCESS, payload: res.data})
        })
        .catch(err => console.log(err))
    }
}