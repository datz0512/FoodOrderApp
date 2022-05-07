import React from 'react'
import classes from './Header.module.scss'
import MealImg from '../../assets/meals1.jpeg'
import HeaderCardButton from './HeaderCardButton'

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCardButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={MealImg} alt='A table full of delicious food!'/>
            </div>
        </React.Fragment>
    )
}

export default Header