import { Fragment } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header'
import MenuCard from './MenuCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
export default function RestaurantMenu() {

    const navigate = useNavigate();

    const location = useLocation();

    const restaurant = location.state.restaurant


    function renderMenuCards() {
        const menuCards = restaurant.menuItems.map((menuItem) => {
            return <MenuCard menuItem={menuItem} />
        })

        return menuCards
    }



    return (
        <Fragment>
            <div className='restaurant-menu'>
                <Header backButtonFlag={true} />

                <div className='restaurant-menu-container'>
                    <div className='restaurant-info'>
                        <h1>{restaurant.name}</h1>
                        <p>{restaurant.menuItems.length} pratos</p>
                    </div>

                    <div className="desktop-add-button">
                        <FontAwesomeIcon
                            icon={faPlusCircle}
                            size='lg'
                            color='#f3aa00'
                            onClick={() => navigate('/new-dish', { state: { restaurant: restaurant } })}
                        ></FontAwesomeIcon>
                    </div>

                </div>

                {renderMenuCards()}
            </div>
        </Fragment>
    )
}