import React from 'react'
import Welcome from './welcome/Welcome'
import './main.css'
import CarrouselWelcome from './welcome/CarrouselWelcome'

export default function Main () {
    return(
        <main>
            <Welcome />
            <CarrouselWelcome />
        </main>
    )
}