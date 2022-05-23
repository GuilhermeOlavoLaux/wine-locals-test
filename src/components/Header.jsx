import { Fragment } from "react";
import CompanyLogo from '../assets/images/CompanyLogo.png'

export default function Header() {

    return (
        <Fragment>
            <div className="logo-container">
                <img src={CompanyLogo} alt="share eat" />
            </div>
        </Fragment>
    )
}