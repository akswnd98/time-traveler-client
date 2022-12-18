import { styled } from '@mui/material';
import { MyPostSearched } from '@src/api/BaseApi/GetApi/post/SearchMyPosts';
import moment from 'moment';

export type PropsType = MyPostSearched;

export default function Post (props: PropsType) {
  return (
    <Root onClick={() => location.href = `${process.env.REACT_APP_PUBLIC_URL}/write?no=${props.id}`}>
      <Title>{props.title}</Title>
      <BodyPart>
        {props.bodyPart.replace('\n', '<br />')}
      </BodyPart>
      <Meta>{moment(props.firstUpload).fromNow()}</Meta>
    </Root>
  );
}

const Root = styled('div')`
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled('div')`
  font-family: NotoSansKR;
  font-weight: bold;
  font-size: 24px;
`;

const BodyPart = styled('div')`
  font-family: NotoSansKR;
  font-size: 16px;
  color: gray;
  margin-top: 8px;
`;

const Meta = styled('div')`
  font-family: NotoSansKR;
  font-size: 14px;
  color: gray;
  margin-top: 20px;
`;