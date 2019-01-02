import React from 'react'

import './Clavier.scss'

const Clavier = ({ letters, letterClick, goodLetters, wrongLetters }) => (
    <div id="Clavier">
        {letters.map(letter => (
            wrongLetters.includes(letter) ? <span key={letter} className="letter letter-wrong">{letter}</span> : <span key={letter} className="letter" onClick={() => letterClick(letter)}>{letter}</span>
        ))}
    </div>
)

export default Clavier