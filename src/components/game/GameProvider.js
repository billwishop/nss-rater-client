import React, {useState} from 'react'

export const GameContext = React.createContext()

export const GameProvider = props => {
    const [games, setGames] = useState([])

    const getGames = () => {
        return fetch("http://localhost:8000/games", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("gr_token")}`
            }
        })
        .then(r => r.json())
        .then(setGames)
    }

    return (
        <GameContext.Provider value={{games, getGames}} >
            {props.children}
        </GameContext.Provider>
    )
}