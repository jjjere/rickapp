import React from 'react'
import { Card } from 'react-bootstrap'

const SeccionPrincipal = () => {
    return (
        <main>
            <div className="tarjetero">
                <img src="https://rickandmortyapi.com/api/character/avatar/63.jpeg" alt="" />   
                
                <div>
                    <a href="https://rickandmortyapi.com/api/character/63">Centaur</a>
                    <h3>Alive - Mythological Creature</h3>
                </div>

                <div>
                    <h3>
                    Last known location:
                    <br /> <a href="https://rickandmortyapi.com/api/location/18">Mr. Goldenfold's dream</a>
                    </h3>
                </div>

                <div>
                    <h3>
                    First seen in:
                    <br /><a href="https://rickandmortyapi.com/api/episode/2">Lawnmower Dog</a>
                    </h3>
                </div>
            </div>               
        </main>
    )
}

export default SeccionPrincipal;
