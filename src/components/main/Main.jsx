import React from 'react'
import Welcome from './welcome/Welcome'
import './main.css'
import CarrouselWelcome from './welcome/CarrouselWelcome'
import Nosotros from './nosotros/Nosotros'
import QueHacemos from './queHacemos/QueHacemos'

export default function Main () {
    return(
        <main>
            <Welcome />
            <CarrouselWelcome />
            <Nosotros />
            <QueHacemos />
        </main>
    )
}