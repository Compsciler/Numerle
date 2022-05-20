import { HandStatus } from '../../lib/statuses'

type Props = {
  strength: HandStatus
}

export const StrengthDisplay = ({ strength }: Props) => {
  const display = (() => {
    switch (strength) {
      case 'high': {
        return 'TOO HIGH'
      }
      case 'low': {
        return 'TOO LOW'
      }
      case 'equal': {
        return 'EQUAL'
      }
      case 'waiting': {
        return 'WAITING'
      }
      default: {
        return ''
      }
    }
  })()
  if (display === 'WAITING') {
    return (
      <div>
        ?
      </div>
    )
  }
  return (
    <div
      className="text-black text-center text-sm"
      style={{ lineHeight: '1.1em' }}
    >
      {display}
    </div>
  )
}
