import Action from '..';

export type ConstructorParam = {
  actions: Action<void>[];
};

export default class ContainerAction extends Action<void> {
  actions: Action<void>[];

  constructor (payload: ConstructorParam) {
    super();
    this.actions = payload.actions
  }

  async doAction () {
    for (let action of this.actions) {
      await action.doAction();
    }
  }

  addAction (action: Action<void>) {
    this.actions.push(action);
  }
}