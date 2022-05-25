import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";


export default function NewDish() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const restaurant = location.state?.restaurant

    function verifyRestaurantState() {
        if (restaurant === undefined) {
            navigate('/')
        }
    }

    useEffect(() => {
        verifyRestaurantState()
    }, [])

    return (
        <Fragment>

            {
                restaurant &&


                <div className="new-dish">


                    <div className="new-dish-container">

                        <Header backButtonFlag={true}></Header>

                        <div className="new-dish-content">

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
                                maxLength='200'
                                placeholder="Insira uma descrição"
                                onChange={(e) => setDescription(e.target.value)}>
                            </textarea>

                            <p>*A descrição deve conter até 200 caracteres.</p>

                        </div>
                    </div>
                </div>


            }
        </Fragment>
    )
}