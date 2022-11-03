import styled from '@emotion/styled';
import { profile } from '@src/data-binding/global/Account/Profile';
import theme from '@src/theme';
import moment from 'moment';
import Action from './action';

const Root = styled.div`
  width: calc(100% - 40px);
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
  padding: 20px;
  border-radius: 10px;
`;

const Top = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Meta = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Console = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: NotoSansKR;
  color: ${theme.palette.gray};
`;

// const EditButton = styled.div`
//   &:hover {
//     text-decoration: underline;
//     cursor: pointer;
//   }
//   margin-right: 8px;
// `;

const DeleteButton = styled.div`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Profile = styled.div`
  width: 60px;
  height: 60px;
  background-color: gray;
  border-radius: 30px;
`;

const NicknameAndUploadDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin-left: 8px;
`;

const Nickname = styled.div`
  font-family: NotoSansKR;
  font-size: 20px;
  font-weight: bold;
`;

const UploadDate = styled.div`
  font-family: NotoSansKR;
  font-size: 16px;
  color: ${theme.palette.gray};
`;

const Body = styled.div`
  margin-top: 20px;
`;

export type PropsType = {
  id: number;
  writerId: number;
  writer: string;
  firstUpload: string;
  body: string;
};

export default function Discussion (props: PropsType) {
  const action = new Action({ id: props.id });
  return (
    <Root>
      <Top>
        <Meta>
          <Profile>
          </Profile>
          <NicknameAndUploadDate>
            <Nickname>{props.writer}</Nickname>
            <UploadDate>{moment(props.firstUpload).fromNow()}</UploadDate>
          </NicknameAndUploadDate>
        </Meta>
        <Console>
          {/* <EditButton>수정</EditButton> */}
          {
            profile?.profile.id === props.writerId && (
              <DeleteButton
                onClick={() => action.doAction()}
              >
                삭제
              </DeleteButton>
            )
          }
        </Console>
      </Top>
      <Body>
        {props.body}
      </Body>
    </Root>
  );
}
