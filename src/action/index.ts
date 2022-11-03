export default abstract class Action<PayloadParam> {
  abstract doAction (payload: PayloadParam): Promise<void>;
}
