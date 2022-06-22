import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the 5-digit number (00000-99999) in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the number.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <strong>Playing on Hard Mode is recommended. </strong>
        You can find the Hard Mode slider by clicking the Settings gear icon.
        {/*
          Hard mode restricts guesses 
          to use previous hints about digit locations as well as requiring the guess to be
          within the range of the remaining possible solutions
          (between the maximum of the "too low" guesses and the minimum of the "too high" guesses).
        */}
      </p>
      <br />
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Sample guesses if the number is 62831:
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="1" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="2"
          status="correct"
        />
        <Cell value="3" />
        <Cell value="5" />
        <Cell value="8" />
        <div className="ml-2" />
        <Cell
          status={'low'}
          isCompleted={true}
          target="rank"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The digit 2 is in the number and in the correct spot. <br />
        The number is greater than 12358.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="2" />
        <Cell value="5" />
        <Cell value="6" />
        <Cell value="7" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="3"
          status="present"
        />
        <div className="ml-2" />
        <Cell
          status={'low'}
          isCompleted={true}
          target="rank"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The digit 3 is in the number but in the wrong spot. <br />
        The number is greater than 25673.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="9" />
        <Cell value="4" />
        <Cell isRevealing={true} isCompleted={true} value="0" status="absent" />
        <Cell value="2" />
        <Cell value="2" />
        <div className="ml-2" />
        <Cell
          status={'high'}
          isCompleted={true}
          target="rank"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The digit 0 is not in the number in any spot. <br />
        The number is less than 94022.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/Compsciler/Numerle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
