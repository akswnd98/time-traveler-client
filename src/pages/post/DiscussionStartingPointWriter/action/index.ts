import ContainerAction from '@src/action/ContainerAction';
import { useRef } from 'react';
import ClearTextarea from './ClearTextarea';
import UploadAndAppend from './UploadAndAppend';

export default class Action extends ContainerAction {
  readonly textareaRef: React.RefObject<HTMLTextAreaElement>;

  constructor () {
    super({
      actions: [],
    });
    this.textareaRef = useRef<HTMLTextAreaElement>(null);
    this.addAction(new UploadAndAppend({ textareaRef: this.textareaRef }));
    this.addAction(new ClearTextarea({ textareaRef: this.textareaRef }));
  }
}