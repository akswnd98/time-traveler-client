import { useRef } from 'react';

export default class TitleBinder {
  titleRef: React.RefObject<HTMLTextAreaElement>;
  titleViewerRef: React.RefObject<HTMLDivElement>;

  constructor () {
    this.titleRef = useRef<HTMLTextAreaElement>(null)!;
    this.titleViewerRef = useRef<HTMLDivElement>(null)!;
  }

  setTitle (title: string) {
    this.titleRef.current!.value = title;
    this.autoResizeTextarea();
    this.titleViewerRef.current!.innerHTML = title.replaceAll('\n', '<br />');
  }

  reflectTitle () {
    const title = this.titleRef.current!.value;
    this.autoResizeTextarea();
    this.titleViewerRef.current!.innerHTML = title.replaceAll('\n', '<br />');
  }

  protected autoResizeTextarea () {
    this.titleRef.current!.style.height = `1px`;
    const scrollHeight = this.titleRef.current!.scrollHeight;
    this.titleRef.current!.style.height = `${scrollHeight + 8}px`;
  };
}

export function useTitleBinder () {
  return new TitleBinder();
}
