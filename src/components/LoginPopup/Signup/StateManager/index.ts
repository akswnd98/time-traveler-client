import State from '../State';

export type ConstructorParam = {
  stateChain: State[];
};

export default class StateManager {
  private curState?: State = undefined;
  private lastState?: State = undefined;

  constructor (payload: ConstructorParam) {
    if (payload.stateChain.length > 0) {
      payload.stateChain.slice(0, payload.stateChain.length - 1).forEach((state, i) => {
        state.nextState = payload.stateChain[i + 1];
        payload.stateChain[i + 1].prevState = state;
      });
      this.curState = payload.stateChain[0];
      this.lastState = payload.stateChain[payload.stateChain.length];
    }
  }

  attachState (state: State) {
    if (this.lastState === undefined) {
      this.curState = state;
      this.lastState = state;
    } else {
      this.lastState.nextState = state;
      state.prevState = this.lastState;
      this.lastState = state;
    }
  }

  attachStates (states: State[]) {
    states.forEach((state) => {
      this.attachState(state);
    });
  }

  async enterNextState () {
    try {
      if (this.curState === undefined) return;
      if (this.curState.nextState === undefined) return;
      await this.curState.enterNextState();
      this.curState = this.curState.nextState;
    } catch (e) {
      throw Error('StateManager.enterNextState failed');
    }
  }

  async enterPrevState () {
    try {
      if (this.curState === undefined) return;
      if (this.curState.prevState === undefined) return;
      await this.curState.enterPrevState();
      this.curState = this.curState.prevState;
    } catch (e) {
    }
  }
}
