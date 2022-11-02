import { useState } from 'react'
import './App.css'
import { HangmanDrawing } from './components/HangmanDrawing'
import { HangmanWord } from './components/HangmanWord'
import { Keyboard } from './components/Keyboard'
import words from "./word-list.json"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <div className="App" style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
    }}>
      <p style={{
        fontSize: "2rem",
        textAlign: "center"
      }}>Lose Win</p>
      <HangmanDrawing />
      <HangmanWord />
      <div style={{
        alignSelf: "stretch"
      }}>
        <Keyboard />
      </div>
    </div >
  )
}

export default App
