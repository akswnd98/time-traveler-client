import { useRef } from 'react';
import mdHtmlConverter from '@src/utils/mdHtmlConverter';

export default class EditorBinder {
  bodyViewerRef: React.RefObject<HTMLDivElement>;

  constructor () {
    this.bodyViewerRef = useRef<HTMLDivElement>(null)!;
  }

  async reflectBody (body: string) {
    this.bodyViewerRef.current!.innerHTML = (await mdHtmlConverter.process(body)).toString();
  }
}

export function useEditorBinder () {
  return new EditorBinder();
}
