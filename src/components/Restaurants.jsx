import { Fragment } from "react";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import GreyBackground from "../assets/images/GreyBackground.png"

export default function Restaurants() {

    let mockData = [
        {
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
        },
        {
            "name": "Z café",
            "menuItems": [
                {
                    "name": "Café expresso",
                    "description": "50ml do mais puro café moído e passado na hora",
                    "price": 5.5
                },
                {
                    "name": "Café Ristretto",
                    "description": "30ml do melhor café aliado dos principais óleos essenciais",
                    "price": 7.5
                },
                {
                    "name": "Café Mochaccino",
                    "description": "70ml do melhor café expresso junto ao delicioso leite vaporizado e o melhor chocolate suíço",
                    "price": 10.5
                }
            ]
        },
        {
            "name": "Canal Café - PUCRS",
            "menuItems": [
                {
                    "name": "Café expresso",
                    "description": "50ml de puro café moído e passado na hora",
                    "price": 6.5
                },
                {
                    "name": "Suco Natural",
                    "description": "500ml de suco de frutas da estação",
                    "price": 12.5
                }
            ]
        },
        {
            "name": "Palatu's - PUCRS",
            "menuItems": [
                {
                    "name": "Buffet com grelhados",
                    "description": "30 variedades de saladas, pratos quentes e churrasco",
                    "price": 27.5
                },
                {
                    "name": "Suco Natural",
                    "description": "500ml de suco de frutas da estação",
                    "price": 4.5
                },
                {
                    "name": "Refrigerante Lata",
                    "description": "Pepsi, guaraná, sprite ou sukita",
                    "price": 4.5
                }
            ]
        }
    ]


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