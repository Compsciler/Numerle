import { HighLowStatus } from '../../lib/statuses'

type Props = {
  rank: HighLowStatus
}

export const HighLowDisplay = ({ rank }: Props) => {
  const display = (() => {
    switch (rank) {
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
