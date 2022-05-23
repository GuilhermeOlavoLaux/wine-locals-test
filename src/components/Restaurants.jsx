import { Fragment } from "react";
import Header from "./Header";

export default function Restaurants() {


    return (
        <Fragment>

            <div className="restaurants">

                <Header />
                <div className="locals">

                    <h1>Lugares</h1>

                    <p>6 lugares cadastrados</p>

                </div>
            </div>
        </Fragment>
    )
}