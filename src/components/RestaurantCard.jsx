import { Fragment } from "react";

export default function RestaurantCard({ restaurant }) {

    return (
        <Fragment>

            <div className="restaurant-card">

                <div className="restaurant-card-container">
                    <h5>{restaurant.name}</h5>
                    <p>{restaurant.menuItems.length} pratos</p>
                </div>


                MAIS

            </div>


        </Fragment>
    )
}