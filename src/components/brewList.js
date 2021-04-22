import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store'


const BrewList = (props) => {

    useEffect(() => {
        props.fetchData();
    }, []);


    // mapping and pulling multiple items from an object
    // using a search bar to rerender using new city name
    // places closest to location
    return (
        <>
        <div className="brew-wrapper">
            {props.breweries.map(brewery => (
                <h3 key={brewery.id}>{brewery.name}</h3>
                // <p key={brewery.date}>{brewery.street}</p>
            ))}
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        breweries: state.breweries
    };
};

export default connect(mapStateToProps, { fetchData })(BrewList);