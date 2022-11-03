import Observer from '../Observer';

export type ConstructorParam<EventType> = {
  observers: Observer<EventType>[];
};

export default class Notifier<EventType> {
  observers: Observer<EventType>[];

  constructor (payload: ConstructorParam<EventType>) {
    this.observers = payload.observers;
  }

  async notify (e: EventType) {
    for (let observer of this.observers) {
      await observer.update(e);
    }
  }
}
