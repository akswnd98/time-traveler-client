export default abstract class State {
  nextState?: State = undefined;
  prevState?: State = undefined;
  abstract enterNextState (): Promise<void>;
  abstract enterPrevState (): Promise<void>;
}
