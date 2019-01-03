import React from 'react'
import PropTypes from 'prop-types'

import './Clavier.scss'

const Clavier = ({ letters, letterClick, goodLetters, wrongLetters }) => (
    <div id="Clavier">
        {letters.map(letter => (
            wrongLetters.includes(letter) ? <span key={letter} className="letter letter-wrong">{letter}</span> : <span key={letter} className="letter" onClick={() => letterClick(letter)}>{letter}</span>
        ))}
    </div>
)

Clavier.propTypes = {
    letters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    letterClick: PropTypes.func.isRequired,
    goodLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
    wrongLetters: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default Clavier