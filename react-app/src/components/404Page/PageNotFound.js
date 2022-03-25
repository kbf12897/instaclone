import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import './PageNotFound.css';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    const history = useHistory();

    useEffect(() => {
    setTimeout(() => {
        history.push('/')
        }, 5000)
    }, [history])


    return (
        <div className='error-container'>
            <h2 className='not-found'>404: Page Not Found</h2>
            <img className='no-photo-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgvecJmyAcwJ7ObjTL-Z5GSe8WNZ95M5ePA&usqp=CAU' alt='no-photos' />
            <div className='alt-container'>
                <p className='alt-link-p'>Go home or we will redirect you shortly.</p>
                <div className='alt-button-div'>
                    <NavLink className={'alt-button'} to='/'>Home</NavLink>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
