import { Fragment, useState } from "react";
import Header from "./Header";


export default function NewDish() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const restaurant = {
        name: 'Silva Lanches',
        menuItems: [
            {
                name: 'Xis Bacon',
                description:
                    'Pão, alface, tomate, carne, bacon, milho, ervilha, maionese, catchup, mostarda',
                price: 20.5
            },
            {
                name: 'Xis Veg',
                description:
                    'Pão, alface, tomate, bide de grão-de-bico, milho, ervilha, maionese, catchup, mostarda',
                price: 22.5
            },
            {
                name: 'Bauru Picanha',
                description: 'Pão, alface, tomate, picanha, maionese',
                price: 25
            }
        ]
    }


    return (
        <Fragment>

            <div className="new-dish">

                <div className="new-dish-container">

                    <Header backButtonFlag={true}></Header>
                    <h1>{restaurant.name}</h1>

                    <p>Nome do prato</p>
                    <input type="text" value={name} />

                    <p>Valor</p>
                    <input type="text" value={price} />

                    <p>Descrição do prato</p>
                    <input type="text" value={description} />

                    <p>*A descrição deve conter até 200 caracteres.</p>

                </div>

            </div>
        </Fragment>
    )
}