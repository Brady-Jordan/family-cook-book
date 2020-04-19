import React from 'react';
import Header from '../components/header';
import Categories from '../components/Categories'
import heroImg from '../assets/landing_hero_spices.jpg'
import heroPotSVG from '../assets/landing_pot.png'
import '../styles/views/landing.css'

const Landing = () => {

    return(
        <div>
            <Header/>
            <div className="container-fluid  w-100">
                <div className="row p-0 ">
                    <div className="col-6 p-0 ">
                        <img src={heroImg} alt="" className="img img-fluid p-0 m-0"/>
                    </div>
                    <div className="col-6 p-5 potSection d-flex flex-column align-items-center justify-content-around">
                        <img src={heroPotSVG} alt="" className='img img-fluid p-5 m-0'/>
                        <button className="btn btn-primary ">Join the family!</button>
                    </div>
                </div>
            </div>
            <Categories/>
            
        </div>
    )
}

export default Landing;