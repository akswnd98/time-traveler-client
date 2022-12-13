import styled from '@emotion/styled';
import theme from '@src/theme';
import PaginationModel from '../model/PaginationModel';
import TotalPageNumModel from '../model/TotalPageNumModel';
import Page from './Page';

export type PropsType = {
  totalPageNumModel: TotalPageNumModel
  paginationModel: PaginationModel;
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Pagination (props: PropsType) {
  const centerMinPage = Math.max(props.paginationModel.page - 2, 1);
  const centerMaxPage = Math.min(props.paginationModel.page + 2, props.totalPageNumModel.num);

  return (
    <Root>
      {
        centerMinPage > 1 && <Page paginationModel={props.paginationModel} page={1} selectedPage={props.paginationModel.page} />
      }
      {
        Array(centerMaxPage - centerMinPage + 1).fill(0).map((v, i) => centerMinPage + i).map((v) => (
          <Page paginationModel={props.paginationModel} page={v} selectedPage={props.paginationModel.page} />
        ))
      }
      {
        centerMaxPage < props.totalPageNumModel.num && <Page paginationModel={props.paginationModel} page={props.totalPageNumModel.num} selectedPage={props.paginationModel.page} />
      }
    </Root>
  );
}
