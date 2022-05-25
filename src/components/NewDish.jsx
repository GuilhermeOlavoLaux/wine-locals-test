import { Fragment, useState } from "react";
import Header from "./Header";


export default function NewDish() {
    const [name, setName] = useState("")
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
                    <input
                        type="text"
                        className="name-input"
                        value={name}
                        placeholder="Prato"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <p>Valor</p>

                    <label htmlFor="price-input" className="label-price-input" >
                        <p>R$</p>
                        <input
                            type="price-input"
                            id='price-input'
                            value={price}
                            className="price-input"
                            placeholder="0,00"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>



                    <p>Descrição do prato</p>

                    <textarea cols="30"
                        rows="10"
                        value={description}
                        placeholder="Insira uma descrição"
                        onChange={(e) => setDescription(e.target.value)}>
                    </textarea>

                    <p>*A descrição deve conter até 200 caracteres.</p>

                </div>

            </div>
        </Fragment>
    )
}