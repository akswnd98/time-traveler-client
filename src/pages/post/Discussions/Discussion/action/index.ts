import ContainerAction from '@src/action/ContainerAction';
import ServerDelete from './ServerDelete';
import Delete from './Delete';

export type ConstructorParam = {
  id: number;
};

export default class Action extends ContainerAction {
  constructor (payload: ConstructorParam) {
    super({
      actions: [],
    });
    this.addAction(new ServerDelete({ id: payload.id }));
    this.addAction(new Delete({ id: payload.id }));
  }
}