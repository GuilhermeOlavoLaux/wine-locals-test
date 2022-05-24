import { Fragment } from "react";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
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

                <Header />


                {/* <img src={GreyBackground} alt="grey background" className="grey-background" />export default (first) => {second} */}

                <div className="locals">

                    <h1>Lugares</h1>

                    <p>{mockData.length} lugares cadastrados</p>

                </div>

                {renderRestaurantsCards()}
            </div>
        </Fragment>
    )
}