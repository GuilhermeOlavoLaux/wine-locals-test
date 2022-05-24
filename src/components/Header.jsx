import { Fragment } from "react";
import CompanyLogo from '../assets/images/CompanyLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Header({ backButtonFlag }) {

    return (
        <Fragment>
            <div className="header-container">

                <div className="arrow-container" style={{ display: backButtonFlag ? 'initial' : 'none' }}>
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        size='md'
                        color="#fff"

                    ></FontAwesomeIcon>
                </div>

                <img src={CompanyLogo} alt="share eat" />
            </div>
        </Fragment>
    )
}