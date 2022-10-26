import Task from '..';

export type ConstructorParam<T> = {
  taskList: Task<T>[];
};

export default class ListTask<T> extends Task<T> {
  protected taskList: Task<T>[];

  constructor (payload: ConstructorParam<T>) {
    super();
    this.taskList = payload.taskList;
  }

  async execute (payload: T) {
    await Promise.all(this.taskList.map((task) => task.execute(payload)));
  }
}
