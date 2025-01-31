import { Interaction } from '@/components/rmrk/service/scheme'
import { isAfter, isEqual, parseISO } from 'date-fns'

export function pairListBuyEvent(events: Interaction[]): Interaction[] {
  const res: Interaction[] = []
  try {
    events?.forEach((event, index) => {
      if (
        event.interaction === 'BUY' &&
        index >= 1 &&
        events[index - 1].interaction === 'LIST'
      ) {
        res.push(events[index - 1])
      }
    })
    return res
  } catch (error) {
    console.error(error)
    return res
  }
}

export function getVolume(events: Interaction[]): bigint {
  return events
    .map((x) => x.meta)
    .map((x) => BigInt(x || 0))
    .reduce((acc, cur) => acc + cur, BigInt(0))
}

export const after = (date: Date) => (event: Interaction): boolean =>
  isAfter(parseISO(event.timestamp), date) ||
  isEqual(parseISO(event.timestamp), date)
