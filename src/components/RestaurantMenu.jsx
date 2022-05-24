import { Fragment } from "react";
import Header from "./Header";
import MenuCard from "./MenuCard";

export default function RestaurantMenu() {

    const restaurant = {
        "name": "Silva Lanches",
        "menuItems": [
            {
                "name": "Xis Bacon",
                "description": "Pão, alface, tomate, carne, bacon, milho, ervilha, maionese, catchup, mostarda",
                "price": 20.5
            },
            {
                "name": "Xis Veg",
                "description": "Pão, alface, tomate, bide de grão-de-bico, milho, ervilha, maionese, catchup, mostarda",
                "price": 22.5
            },
            {
                "name": "Bauru Picanha",
                "description": "Pão, alface, tomate, picanha, maionese",
                "price": 25
            }
        ]
    }

    function renderMenuCards() {
        const menuCards = restaurant.menuItems.map((menuItem) => {
            return <MenuCard menuItem={menuItem} />
        })

        return menuCards
    }


    return (
        <Fragment>
            <div className="restaurant-menu">

                <Header backButtonFlag={true} />

                <h1>{restaurant.name}</h1>
                <p>{restaurant.menuItems.length} pratos</p>

                {renderMenuCards()}
            </div>
        </Fragment>
    )
}