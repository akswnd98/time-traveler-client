import Action from '@src/action';

export type ConstructorParam = {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
};

export default class ClearTextarea extends Action<void> {
  textareaRef: React.RefObject<HTMLTextAreaElement>;

  constructor (payload: ConstructorParam) {
    super();
    this.textareaRef = payload.textareaRef;
  }

  async doAction () {
    this.textareaRef.current!.value = '';
  }
}
