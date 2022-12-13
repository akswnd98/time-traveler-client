import { getTotalLatestPageNumApi } from '@src/api/BaseApi/GetApi/post/GetTotalLatestPageNum';
import { atom, useRecoilState } from 'recoil';

class TotalPageNumModel {
  protected totalPageNumAtom = atom<number>({
    key: 'totalPageNum',
    default: 0,
  })

  public readonly num: number;

  protected setState: ReturnType<typeof useRecoilState<number>>[1];

  constructor () {
    [this.num, this.setState] = useRecoilState(this.totalPageNumAtom);
  }

  async loadNum () {
    this.setState((await getTotalLatestPageNumApi.getTotalPageNum()).num);
  }
}

export default TotalPageNumModel;

export function useTotalPageNumModel () {
  return new TotalPageNumModel();
}
