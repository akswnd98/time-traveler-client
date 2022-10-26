export default abstract class Task<T> {
  abstract execute (payload: T): Promise<void>;
}
