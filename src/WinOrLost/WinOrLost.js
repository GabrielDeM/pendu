import React from 'react'

import './WinOrLost.scss'

// Composant qui s'active si le joueur a gagné ou perdu
const WinOrLost = ({ tentatives, handleReset }) => (
    <div id="WinOrLost">
        {tentatives === 5 ? <h2>PERDU!</h2> : <h2>GAGNÉ!</h2>}
        {/* On recommence la partie si le joueur clique sur "Rejouer" */}
        <div onClick={handleReset}>Rejouer</div>
    </div>
)

export default WinOrLost