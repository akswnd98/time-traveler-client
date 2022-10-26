import styled from '@emotion/styled';
import { OutlinedInput } from '@mui/material';
import eastSvg from '@assets/east.svg';
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import StateManager from '../StateManager';
import EmailEnter from '../State/EmailEnter';
import NicknameEnter from '../State/NicknameEnter';
import PleaseCheckEmail from '../State/PleaseCheckEmail';

const Root = styled.div`
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
  border-radius: 10px;
  margin-top: 60px;
  padding: 0;
  width: 100%;
  height: 40px;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Block = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  position: absolute;
  left: 0;
  top: 0;
`;

const MainInput = styled(OutlinedInput)`
  width: 100%;
  height: 100%;
  margin-right: 40px;
  flex-shrink: 0;
  & .MuiOutlinedInput-root {
    padding: 0;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: none;
    padding: 0px;
  }
`;

const East = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 8px;
`;

const stateManager = new StateManager({
  stateChain: [],
});

export type PropsType = {
  enterPleaseCheckEmailStage: () => void;
  setErrorMessage: (message: string) => void;
};

export default function InputSet (props: PropsType) {
  const emailInputRef = useRef<HTMLInputElement>();
  const nicknameInputRef = useRef<HTMLInputElement>();
  const certificationInputRef = useRef<HTMLInputElement>();

  const [stageNum, setStageNum] = useState(-1);

  const triggerSlide = (stageNum: number) => {
    setStageNum(stageNum);
  };

  useEffect(() => {
    stateManager.attachStates([
      new EmailEnter({
        getEmail: () => emailInputRef.current!.value,
        handleEmailValidationFailed: async () => {
          props.setErrorMessage('이메일이 이미 존재합니다.');
        },
        enterNextStage: () => {
          props.setErrorMessage('');
          triggerSlide(1);
          setTimeout(() => {
            nicknameInputRef.current!.focus();
          }, 500);
        },
        enterPrevStage: () => {},
      }),
      new NicknameEnter({
        getEmail: () => emailInputRef.current!.value,
        getNickname: () => nicknameInputRef.current!.value,
        handleNicknameValidationFailed: async () => {
          props.setErrorMessage('닉네임이 이미 존재합니다.');
        },
        enterNextStage: () => {
          props.setErrorMessage('');
          props.enterPleaseCheckEmailStage();
        },
        enterPrevStage: () => {
          triggerSlide(0);
          setTimeout(() => {
            emailInputRef.current!.focus();
          }, 500);
        },
      }),
      new PleaseCheckEmail(),
    ]);
  }, [props]);

  return (
    <Root>
      <Block
        css={css`
          transform: translateX(-${stageNum * 400}px);
          transition-duration: 0.5s;
        `}
      >
        <MainInput
          placeholder='이메일'
          endAdornment={<East src={eastSvg} onClick={async () => await stateManager.enterNextState()} />}
          inputRef={emailInputRef}
          onKeyDown={async (e) => {
            if (e.key === 'Enter') {
              await stateManager.enterNextState();
            }
          }}
        />
        <MainInput
          placeholder='닉네임'
          endAdornment={<East src={eastSvg} onClick={async () => await stateManager.enterNextState()} />}
          inputRef={nicknameInputRef}
          onKeyDown={async (e) => {
            if (e.key === 'Enter') {
              await stateManager.enterNextState();
            }
          }}
        />
      </Block>
    </Root>
  );
}
