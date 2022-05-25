import { Fragment } from "react";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import GreyBackground from '../assets/images/GreyBackground.png'
const mockData = require('../fakeApi/api.json')

export default function Restaurants() {


    function renderRestaurantsCards() {
        const restaurantCards = mockData.map((restaurant) => {
            return (
                <RestaurantCard restaurant={restaurant} />
            )
        })
        return restaurantCards
    }
    return (
        <Fragment>

            <div className="restaurants">

                <img src={GreyBackground} alt="grey background" className="grey-background" />

                <div className="restaurants-container">


                <Header />



                <div className="locals">

                    <h1>Lugares</h1>

                    <p>{mockData.length} lugares cadastrados</p>

                </div>


                {renderRestaurantsCards()}
            </div>
                </div>
        </Fragment>
    )
}