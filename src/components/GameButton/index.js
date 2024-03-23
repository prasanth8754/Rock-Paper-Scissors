import {Button, Img} from './styledComponents'

const GameButton = props => {
  const {choicesItem, onSelectOption} = props
  const {id, imageUrl} = choicesItem

  const selectOption = () => {
    onSelectOption(id)
  }

  let dataTestId

  if (id === 'ROCK') {
    dataTestId = 'rockButton'
  } else if (id === 'SCISSORS') {
    dataTestId = 'scissorsButton'
  } else {
    dataTestId = 'paperButton'
  }

  return (
    <li>
      <Button type="button" onClick={selectOption} data-testid={dataTestId}>
        <Img src={imageUrl} alt={id} />
      </Button>
    </li>
  )
}

export default GameButton
