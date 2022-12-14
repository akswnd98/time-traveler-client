import mdHtmlConverter from '@src/utils/mdHtmlConverter';
import { atom, useRecoilState } from 'recoil';

export type ConstructorParam = {
  bodyViewerRef: React.RefObject<HTMLDivElement>;
};

export default class BodyInitializer {
  bodyViewerRef: React.RefObject<HTMLDivElement>;
  protected static initialBodyAtom = atom<string>({
    key: 'initialBodyAtom',
    default: '',
  });
  readonly initialBody: string;
  protected setIntialBodyState: ReturnType<typeof useRecoilState<string>>[1];

  constructor (payload: ConstructorParam) {
    this.bodyViewerRef = payload.bodyViewerRef;
    [this.initialBody, this.setIntialBodyState] = useRecoilState<string>(BodyInitializer.initialBodyAtom);
  }

  async initializeBody (body: string) {
    this.setIntialBodyState(body);
    this.bodyViewerRef.current!.innerHTML = (await mdHtmlConverter.process(body)).toString();
  }
}

export function useBodyInitializer (payload: ConstructorParam) {
  return new BodyInitializer(payload);
}
