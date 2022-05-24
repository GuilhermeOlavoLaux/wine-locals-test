import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';

export default function RestaurantCard({ restaurant }) {
    const navigate = useNavigate();
    return (
        <Fragment>

            <div className="restaurant-card">

                <div className="restaurant-card-container" onClick={() => navigate('/restaurant-menu')}>
                    <h5>{restaurant.name}</h5>
                    <p>{restaurant.menuItems.length} pratos</p>
                </div>


                <button onClick={() => navigate('/new-dish')}>Mais</button>

            </div>


        </Fragment>
    )
}