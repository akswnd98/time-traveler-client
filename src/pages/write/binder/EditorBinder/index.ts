import { useRef } from 'react';
import mdHtmlConverter from '@src/utils/mdHtmlConverter';

export type ConstructorParam = {
  bodyViewerRef: React.RefObject<HTMLDivElement>;
};

export default class EditorBinder {
  bodyViewerRef: React.RefObject<HTMLDivElement>;

  constructor (payload: ConstructorParam) {
    this.bodyViewerRef = payload.bodyViewerRef;
  }

  async reflectBody (body: string) {
    this.bodyViewerRef.current!.innerHTML = (await mdHtmlConverter.process(body)).toString();
  }
}

export function useEditorBinder (payload: ConstructorParam) {
  return new EditorBinder(payload);
}
