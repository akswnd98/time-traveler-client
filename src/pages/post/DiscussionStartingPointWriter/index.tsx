import styled from '@emotion/styled';
import { Button } from '@mui/material';
import theme from '@src/theme';
import Action from './action';

const Root = styled.div`
  width: 100%;
`;

const SectionTitle = styled.div`
  font-family: NotoSansKR;
  font-size: 32px;
  font-weight: bold;
`;

const Textarea = styled.textarea`
  height: 82px;
  width: calc(100% - 40px);
  font-family: NotoSansKR;
  font-size: 20px;
  outline: none;
  border: none;
  resize: none;
  overflow: hidden;
  margin-top: 20px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
  border-radius: 10px;
  padding:20px;
`;

const SendButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const SendButton = styled(Button)`
  width: 125px;
  height: 40px;
  background-color: ${theme.palette.main};
  margin-top: 20px;
  color: white;
  font-family: NotoSansKR;
  font-size: 20px;
`;

export default function DiscussionStartingPointWriter () {
  const action = new Action();
  return (
    <Root>
      <SectionTitle />
      <Textarea
        ref={action.textareaRef}
        placeholder='논의를 시작해보세요.'
      />
      <SendButtonWrapper>
        <SendButton
          onClick={() => action.doAction()}
        >논의 시작</SendButton>
      </SendButtonWrapper>
    </Root>
  );
}
