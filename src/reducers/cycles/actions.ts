import { Cycle } from './reducer'
export enum ActionTypes {
  ADD_NEW_CYCLE = 'addNewCycle',
  INTERRUPT_CURRENT_CYCLE = 'interruptCurrentCycle',
  MARK_CURRENT_CYCLE_AS_FINESHED = 'markCurrentCycleFinished',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINESHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
