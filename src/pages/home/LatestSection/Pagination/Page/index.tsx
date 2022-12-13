import { styled } from '@mui/material';
import theme from '@src/theme';
import PaginationModel from '../../model/PaginationModel';

export type PropsType = {
  selectedPage: number;
  page: number;
  paginationModel: PaginationModel;
};

export default function Page (props: PropsType) {
  return (
    <Root onClick={() => props.paginationModel.setPage(props.page)}>
      {
        props.selectedPage === props.page ? (
          <NumberSelected>{props.page}</NumberSelected>
        ) : (
          <Number>{props.page}</Number>
        )
      }
    </Root>
  )
}

const Root = styled('div')`
  :not(&:first-child) {
    margin-left: 8px;
  }
`;

const Number = styled('div')`
  font-size: 16px;
  font-family: NotoSansKR;
  :not(&:first-child) {
    margin-left: 8px;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const NumberSelected = styled(Number)`
  color: ${theme.palette.main};
  text-decoration: underline;
`;
