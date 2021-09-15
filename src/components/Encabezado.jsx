import React from 'react'

const Encabezado = () => {
    return (
        <header>
            <h1>The Rick and Morty API</h1>
            <img src="https://http2.mlstatic.com/D_NQ_NP_990315-MLA46759117018_072021-O.webp" alt="" />
            
            <nav>
                <ul>
                    <li>
                        <a href="https://rickandmortyapi.com/documentation">Docs</a>
                    </li>

                    <li>
                        <a href="https://rickandmortyapi.com/about/">About</a>
                    </li>

                    <li>
                        <a href="https://rickandmortyapi.com/help-us/">Help Us</a>
                    </li>
                </ul>
            </nav>
        </header>
            
    )
}

export default Encabezado
