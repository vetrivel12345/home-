import React from 'react'
import { Row, Col } from 'reactstrap';
import './home.css';
import Navbar from './NavBar';
import Categories from './Categories';
import Footer from './Footer';
import Carouselhome from './Carouselhome'

function Home({ locationDataFormApp }) {
    return (
        <div className="homeGowtham">

            <Navbar locationFormHome={locationDataFormApp} />
            <div>
                <Categories />
            </div>
            <Carouselhome />

            <Footer />
        </div>
    );
}

export default Home;