import React, { Component } from 'react'

import Clavier from '../Clavier/Clavier'
import WinOrLost from '../WinOrLost/WinOrLost'

import './App.scss'

const letters = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
const essaie = 'AEE'

class App extends Component {

  state = {
    words: essaie.split(''),
    goodLetters: [],
    wrongLetters: [],
    tentatives: 0,
  }

  componentDidMount() {
    
  }
  
  handleLetterClick = letter => {
    const { words, goodLetters, wrongLetters, tentatives } = this.state

    if (words.includes(letter)) {
      this.setState({
        goodLetters: [...goodLetters, letter]
      })
    } else {

      this.setState({
        wrongLetters: [...wrongLetters, letter],
        tentatives: tentatives + 1,
      })
    }
  }

  handleReset = () => {
    this.setState({
      words: essaie.split(''),
      goodLetters: [],
      wrongLetters: [],
      tentatives: 0,
    })
  }
  
  render() {

    const { words, goodLetters, tentatives, wrongLetters } = this.state
    console.log(goodLetters.length === words.length)

    return (
          <div id="App">
            <h1 className="h1">Jeu du Pendu</h1>
            <h2 className="tentatives">{tentatives}</h2>
            <h2 className="word">
              {words.map((word, index) => (
                goodLetters.includes(word) ? <span key={word + index} >{word}</span> : ' _ '
              ))}
            </h2>
            {
              // S'il y a eu 5 fautes ou si le joueur a trouvé le mot on affiche le composant "WinOrLost" sinon on affiche le clavier
              tentatives === 5 || goodLetters.length === words.length ?
                <WinOrLost tentatives={tentatives} handleReset={this.handleReset} /> :
                  <Clavier goodLetters={goodLetters} wrongLetters={wrongLetters} letters={letters.split(' ')} letterClick={this.handleLetterClick} />
            }
          </div>
    );
  }
}

export default App;
