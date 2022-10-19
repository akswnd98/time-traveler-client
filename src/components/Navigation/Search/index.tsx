import styled from '@emotion/styled';
import { IconButton, OutlinedInput } from '@mui/material';
import searchSvg from '@assets/search.svg';

const Root = styled.div`
  width: 530px;
  height: 40px;
`;

const SearchBox = styled(OutlinedInput)`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  &:hover .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

const SearchSvg = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export default function Search () {
  return (
    <Root>
      <SearchBox placeholder='검색어를 입력해주세요.' endAdornment={<IconButton><SearchSvg alt='search' src={searchSvg} /></IconButton>} />
    </Root>
  );
}
