import { Fragment } from "react";

export default function MenuCard({ menuItem }) {

  

    return (
        <Fragment>

            <div className="menu-card-container">

                <div className="title">
                    <h5>{menuItem.name}</h5>

                    <p>R$ {menuItem.price}</p>
                </div>

                <p>{menuItem.description}</p>




            </div>



        </Fragment>
    )

}