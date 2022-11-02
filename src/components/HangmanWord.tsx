import {
	ReactElement, FC
} from 'react'

type HangmanWordProps = {
	guessedLetters: string[]
	wordToGuess: string
}

export const HangmanWord: FC<HangmanWordProps> = ({ guessedLetters, wordToGuess }): ReactElement => {

	return <section style={{
		display: "flex",
		gap: ".25em",
		fontSize: "6rem",
		fontWeight: "bold",
		textTransform: "uppercase",
		fontFamily: "monospace"
	}}>
		<p>
			{wordToGuess.split("").map((letter, index) => (
				<span key={index} style={{
					borderBottom: ".1em solid white"
				}}>
					<span style={{
						visibility: guessedLetters.includes(letter)
							? "visible"
							: "hidden"
					}}>
						{letter}
					</span>
				</span>
			))}
		</p>
	</section>
}