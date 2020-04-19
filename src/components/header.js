import React from 'react';
import {Link, withRouter} from 'react-router-dom'; 
import '../Styles/Components/header.css'

const Header = () => {

    return(
        <div className='header p-2'>
            <div className="row d-flex justify-content-end">
                <div className="col-6 d-flex justify-content-between align-items-center">
                    <Link className='navLink' to='/'>Home</Link>
                    <Link className='navLink' to='/about'>About</Link>
                    <Link className='navLink' to='/recipes'>Recipes</Link>
                    <Link className='navLink' to='/login'>Sign In</Link>
                    {/* <a href=""><p className="navLink">Home</p></a>
                    <a href=""><p className="navLink">Recipes</p></a>
                    <a href=""><p className="navLink">About</p></a>
                    <a href=""><p className="navLink">Sign In</p></a> */}
                    <div className="input-group w-50">
                        <input type="text" class="form-control navSearch"/>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fal fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;