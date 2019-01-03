import React, { Component } from 'react'

import Clavier from '../Clavier'
import WinOrLost from '../WinOrLost'

import './App.scss'

const letters = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
const arrayOfWords = [
  'MAISON',
  'VOITURE',
  'CACHETTE',
  'CHAISE',
  'ORDINATEUR',
]

class App extends Component {

  state = {
    words: this.generateWord(),
    goodLetters: [],
    wrongLetters: [],
    tentatives: 0,
  }

  // Génère les mots aléatoirement à chaque partie
  generateWord() {
    const number = Math.floor(Math.random() * (arrayOfWords.length - 0) + 0)

    const mot = arrayOfWords[number]

    return mot.split('')
  }
  
  // Fonction qui controlle si une lettre cliqué est bonne ou non
  // puis l'ajoute dans le tableau correspondant
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

  // Fonction qui reset le state en lui redonnant ses valeurs par défauts
  handleReset = () => {
    this.setState({
      words: this.generateWord(),
      goodLetters: [],
      wrongLetters: [],
      tentatives: 0,
    })
  }

  // Vérifie si toutes les lettres ont été trouvées
  allLettersFound() {
    const { words, goodLetters } = this.state

    for (let i = 0; i < words.length; i++) {
      if (words[i] !== " " && !goodLetters.includes(words[i])) {
        return false
      }
    }

    return true

  }
  
  render() {
    const { words, goodLetters, tentatives, wrongLetters } = this.state

    return (
          <div id="App">
            <h1 className="h1">Jeu du Pendu</h1>
            <h2 className="tentatives">{tentatives}</h2>
            <h2 className="word">
              {words.map((word, index) => (
                word === " " ? <span key={word + index}>&nbsp;</span> :
                goodLetters.includes(word) ? <span key={word + index} >{word}</span> : ' _ '
              ))}
            </h2>
            {
              // S'il y a eu 5 fautes ou si le joueur a trouvé le mot on affiche le composant "WinOrLost" sinon on affiche le clavier
              tentatives === 5 || this.allLettersFound() ?
                <WinOrLost tentatives={tentatives} handleReset={this.handleReset} /> :
                  <Clavier goodLetters={goodLetters} wrongLetters={wrongLetters} letters={letters.split(' ')} letterClick={this.handleLetterClick} />
            }
          </div>
    );
  }
}

export default App;
