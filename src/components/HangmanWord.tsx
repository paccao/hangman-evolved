import {
	ReactElement, FC
} from 'react'

export const HangmanWord: FC = (): ReactElement => {
	const word = "test"
	const guessedLetters = ["t"]
	return <section style={{
		display: "flex",
		gap: ".25em",
		fontSize: "6rem",
		fontWeight: "bold",
		textTransform: "uppercase",
		fontFamily: "monospace"
	}}>
		<p>
			{word.split("").map((letter, index) => (
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