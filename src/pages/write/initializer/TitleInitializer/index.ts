import { useRef } from 'react';

export type ConstructorParam = {
  titleRef: React.RefObject<HTMLTextAreaElement>;
  titleViewerRef: React.RefObject<HTMLDivElement>;
};

export default class TitleInitializer {
  titleRef: React.RefObject<HTMLTextAreaElement>;
  titleViewerRef: React.RefObject<HTMLDivElement>;

  constructor (payload: ConstructorParam) {
    this.titleRef = payload.titleRef;
    this.titleViewerRef = payload.titleViewerRef;
  }

  initializeTitle (title: string) {
    this.titleRef.current!.value = title;
    this.autoResizeTextarea();
    this.titleViewerRef.current!.innerHTML = title.replaceAll('\n', '<br />');
  }

  protected autoResizeTextarea () {
    this.titleRef.current!.style.height = `1px`;
    const scrollHeight = this.titleRef.current!.scrollHeight;
    this.titleRef.current!.style.height = `${scrollHeight + 8}px`;
  }
}

export function useTitleInitializer (payload: ConstructorParam) {
  return new TitleInitializer(payload);
}
