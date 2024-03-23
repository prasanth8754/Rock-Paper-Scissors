import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  BgContainer,
  NavContainer,
  Container,
  ScoreContainer,
  Heading,
  ScoreHeading,
  UlList,
  RulesBtn,
  RulesImg,
  CloseBtn,
  PlayAgainBtn,
} from './styledComponents'

import {Img} from '../GameButton/styledComponents'
import GameButton from '../GameButton'

class Game extends Component {
  state = {isGameOver: false, score: 0, you: '', opponent: ''}

  onSelectOption = id => {
    const {choicesList} = this.props
    const you = id
    const opponent = choicesList[Math.floor(Math.random() * 3)].id
    let winningStatus

    if (you === 'PAPER' && opponent === 'ROCK') {
      winningStatus = 'YOU WON'
    } else if (you === 'SCISSORS' && opponent === 'PAPER') {
      winningStatus = 'YOU WON'
    } else if (you === 'ROCK' && opponent === 'SCISSORS') {
      winningStatus = 'YOU WON'
    } else if (you === opponent) {
      winningStatus = 'IT IS DRAW'
    } else {
      winningStatus = 'YOU LOSE'
    }

    const updateScore = prevScore => {
      if (winningStatus === 'YOU WON') {
        return prevScore + 1
      } else if (winningStatus === 'IT IS DRAW') {
        return prevScore
      } else {
        return prevScore - 1
      }
    }

    this.setState(prevState => ({
      winningStatus,
      score: updateScore(prevState.score),
      you,
      opponent,
      isGameOver: true,
    }))
  }

  onPlayAgainBtn = () => {
    this.setState({isGameOver: false})
  }

  renderResultView = () => {
    const {winningStatus, you, opponent} = this.state
    const {choicesList} = this.props

    const yourChoiceSrc = choicesList.filter(
      eachItem => eachItem.id === you,
    )[0]['imageUrl']

    const opponentChoiceSrc = choicesList.filter(
      eachItem => eachItem.id === opponent,
    )[0]['imageUrl']

    return (
      <UlList as="div" gap>
        <div>
          <Heading as="p" result fontSize="20px">
            YOU
          </Heading>
          <Img src={yourChoiceSrc} alt="your choice" />
        </div>
        <div>
          <Heading as="p" result fontSize="20px">
            OPPONENT
          </Heading>
          <Img src={opponentChoiceSrc} alt="opponent choice" />
        </div>
        <br />
        <div>
          <Heading as="p" result>
            {winningStatus}
          </Heading>
          <PlayAgainBtn type="button" onClick={this.onPlayAgainBtn}>
            PLAY AGAIN
          </PlayAgainBtn>
        </div>
      </UlList>
    )
  }

  renderPlayingView = () => {
    const {choicesList} = this.props
    return (
      <UlList>
        {choicesList.map(eachItem => (
          <GameButton
            choicesItem={eachItem}
            key={eachItem.id}
            onSelectOption={this.onSelectOption}
          />
        ))}
      </UlList>
    )
  }

  render() {
    const {isGameOver, score} = this.state

    return (
      <BgContainer>
        <NavContainer>
          <div>
            <Heading>
              ROCK <br />
              PAPER <br />
              SCISSORS
            </Heading>
          </div>
          <ScoreContainer>
            <Heading as="p" score>
              Score
            </Heading>
            <ScoreHeading as="p">{score}</ScoreHeading>
          </ScoreContainer>
        </NavContainer>

        {isGameOver ? this.renderResultView() : this.renderPlayingView()}

        <Popup modal trigger={<RulesBtn type="button">RULES</RulesBtn>}>
          {close => (
            <Container>
              <CloseBtn type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseBtn>
              <RulesImg
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </Container>
          )}
        </Popup>
      </BgContainer>
    )
  }
}

export default Game
