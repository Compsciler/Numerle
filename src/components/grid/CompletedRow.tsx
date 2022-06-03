import { getGuessStatuses, getGuessHighLowStatus } from '../../lib/statuses'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'

type Props = {
  solution: string
  guess: string
  isRevealing?: boolean
}

export const CompletedRow = ({ solution, guess, isRevealing }: Props) => {
  const statuses = getGuessStatuses(solution, guess)
  const splitGuess = unicodeSplit(guess)
  const highLowStatus = getGuessHighLowStatus(guess, solution)

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
      <div className="ml-2" />
      <Cell
        key={solution.length + 1}
        status={highLowStatus}
        position={solution.length + 1}
        isRevealing={isRevealing}
        isCompleted
        target="rank"
      />
    </div>
  )
}
