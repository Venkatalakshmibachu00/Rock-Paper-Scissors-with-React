import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  AppContainer,
  MainScoreContainer,
  ScoreContainer,
  Button,
  ResultContainer,
  ChoiceImage,
  PlayAgainButton,
  RulesImage,
  ButtonsContainer,
  Image,
  ResultViewContainer,
  RulesBtn,
  PopupContainer,
  Score,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => {
  const [score, setScore] = useState(0)
  const [userChoice, setUserChoice] = useState(null)
  const [opponentChoice, setOpponentChoice] = useState(null)
  const [result, setResult] = useState('')

  const calculateResult = (user, opponent) => {
    if (user === opponent) return 'IT IS DRAW'
    if (
      (user === 'ROCK' && opponent === 'SCISSORS') ||
      (user === 'SCISSORS' && opponent === 'PAPER') ||
      (user === 'PAPER' && opponent === 'ROCK')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  const handleClick = choice => {
    const opponent = choicesList[Math.floor(Math.random() * 3)]
    setUserChoice(choice)
    setOpponentChoice(opponent)

    const gameResult = calculateResult(choice.id, opponent.id)
    setResult(gameResult)

    if (gameResult === 'YOU WON') setScore(score + 1)
    else if (gameResult === 'YOU LOSE') setScore(score - 1)
  }

  const playAgain = () => {
    setUserChoice(null)
    setOpponentChoice(null)
    setResult('')
  }

  return (
    <AppContainer>
      <h2>Rock Paper Scissors</h2>
      <MainScoreContainer>
        <div>
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
        </div>
        <ScoreContainer>
          <p style={{margin: '0px'}}>Score</p>
          <Score>{score}</Score>
        </ScoreContainer>
      </MainScoreContainer>
      {!userChoice ? (
        <ButtonsContainer>
          <Button
            data-testid="rockButton"
            onClick={() => handleClick(choicesList[0])}
          >
            <Image src={choicesList[0].imageUrl} alt={choicesList[0].id} />
          </Button>
          <Button
            data-testid="scissorsButton"
            onClick={() => handleClick(choicesList[1])}
          >
            <Image src={choicesList[1].imageUrl} alt={choicesList[1].id} />
          </Button>
          <Button
            data-testid="paperButton"
            onClick={() => handleClick(choicesList[2])}
          >
            <Image src={choicesList[2].imageUrl} alt={choicesList[2].id} />
          </Button>
        </ButtonsContainer>
      ) : (
        <ResultContainer>
          <ResultViewContainer>
            <div>
              <h4>YOU</h4>
              <ChoiceImage src={userChoice.imageUrl} alt="your choice" />
            </div>
            <div>
              <h5>OPPONENT</h5>
              <ChoiceImage
                src={opponentChoice.imageUrl}
                alt="opponent choice"
              />
            </div>
          </ResultViewContainer>
          <p>{result}</p>
          <PlayAgainButton onClick={playAgain}>PLAY AGAIN</PlayAgainButton>
        </ResultContainer>
      )}

      <Popup modal trigger={<RulesBtn>Rules</RulesBtn>} closeOnDocumentClick>
        {close => (
          <PopupContainer>
            <RiCloseLine onClick={close} style={{cursor: 'pointer'}} />
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </PopupContainer>
        )}
      </Popup>
    </AppContainer>
  )
}

export default App
