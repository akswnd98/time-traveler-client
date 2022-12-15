import { styled } from '@mui/material';
import Navigation from '@src/components/Navigation';
import { useEffect, useRef } from 'react';
import blackholeQhd from '@assets/blackhole-qhd.png';
import 'cropperjs/dist/cropper.css';
import ProfileCropPopup from '@src/components/ProfileCropPopup';
import { useController } from '@src/components/ProfileCropPopup/controller';

export default function Settings () {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const controller = useController();

  return (
    <Root>
      <Navigation />
      <Main>
        <ProfileWrapperLeft>
          <ProfileImage src={controller.croppedImage} />
          <FileInputLabel htmlFor='file-input'>
            <FileInputLabelDiv>이미지 업로드</FileInputLabelDiv>
          </FileInputLabel>
          <FileInput
            id='file-input'
            type='file'
            ref={fileInputRef}
            onChange={(e) => {
              if (e.currentTarget.files === null) {
                return;
              }
              const reader = new FileReader();
              reader.addEventListener('load', () => {
                controller.open(reader.result as string);
                fileInputRef.current!.value = '';
              });
              reader.readAsDataURL(e.currentTarget.files[0]);
            }}
          />
          <ImageRemove>이미지 제거</ImageRemove>
        </ProfileWrapperLeft>
      </Main>
      <ProfileCropPopup />
    </Root>
  );
}

const Root = styled('div')`

`;

const Main = styled('div')`
  margin-left: 30%;
  width: 40%;
  margin-top: 150px;
`;

const ProfileWrapperLeft = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const ProfileImage = styled('img')`
  width: 160px;
  height: 160px;
  border-radius: 80px;
`;

const FileInputLabel = styled('label')`
  display: block;
  width: 150px;
  height: 40px;
  border-radius: 10px;
`;

const FileInputLabelDiv = styled('div')`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: NotoSansKR;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
  border-radius: 10px;
`;

const FileInput = styled('input')`
  display: none;
`;

const ImageRemove = styled('div')`
  width: 150px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: NotoSansKR;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
  border-radius: 10px;
  margin-top: 8px;
`;
