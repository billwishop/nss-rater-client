import React, { useContext, useEffect} from 'react'
import {GameContext} from './GameProvider.js'
import './Game.css'
import { Link } from "react-router-dom"

export const GameList = props => {
    const {games, getGames} = useContext(GameContext)

    useEffect(()=>{
        getGames()
    },[])

    return (
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <Link className="game__detailsLink" to={`/games/${game.id}`}>
                            <h3 className="game__title">{game.title}</h3>
                        </Link>
                    </section>
                })
            }
        </article>
    )
}