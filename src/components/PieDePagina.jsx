import React from 'react'

const PieDePagina = () => {
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://rickandmortyapi.com/api/character">CHARACTERS: 671</a>
                </li>
                <li>
                    <a href="https://rickandmortyapi.com/api/location">LOCATOINS: 108</a>
                </li>
                <li>
                    <a href="https://rickandmortyapi.com/api/episode">EPISODES: 41</a>
                </li>                
            </ul>

            <ul>
                <li>
                    <a href="https://status.rickandmortyapi.com/">SERVER STATUS</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="https://github.com/afuh/rick-and-morty-api">
                        <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/rickandmortyapi">
                        <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://rickandmortyapi.com/help-us/">
                        <img src="https://cdn2.iconfinder.com/data/icons/gaming-and-beyond-1/80/HeartFull_gray-512.png" alt="" />
                    </a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="https://www.netlify.com/">
                        <p>deploys by netlify</p>
                    </a>
                </li>
            </ul>

            <p> by 
            <a href="https://axelfuhrmann.com/">Axel Fuhrmann</a>
            2021</p>
        </footer>
    )
}

export default PieDePagina
