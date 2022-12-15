import { Button, styled } from '@mui/material';
import Navigation from '@src/components/Navigation';
import Cropper from 'cropperjs';
import { useEffect, useRef } from 'react';
import blackholeQhd from '@assets/blackhole-qhd.png';
import 'cropperjs/dist/cropper.css';
import ProfileCropPopup from '@src/components/ProfileCropPopup';
import profileCropPopupState from '@src/states/profileCropPopup';
import { useRecoilState } from 'recoil';

export default function Settings () {
  const cropperWrapperRef = useRef<HTMLImageElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [_, setProfileCropPopup] = useRecoilState(profileCropPopupState);

  useEffect(() => {
    fileInputRef.current!.addEventListener('change', (e) => {
      const selectedFiles = fileInputRef.current!.files;
      if (selectedFiles === null) {
        return;
      }
      console.log(selectedFiles[0]);
    });
    const cropper = new Cropper(cropperWrapperRef.current!, {
      aspectRatio: 1,
    });
  }, []);

  return (
    <Root>
      <Navigation />
      <Main>
        <FileInputLabel htmlFor='file-input'>
          <FileInputLabelDiv>이미지 업로드</FileInputLabelDiv>
        </FileInputLabel>
        <FileInput id='file-input' type='file' ref={fileInputRef} />
        <ImageRemove>이미지 제거</ImageRemove>
        <CropImageWrapper>
          <CropImage src={blackholeQhd} ref={cropperWrapperRef} />
        </CropImageWrapper>
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

const FileInputLabel = styled('label')`
  display: inline-block;
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
`;

const CropImageWrapper = styled('div')`
  width: 100%;
`;

const CropImage = styled('img')`
  display: block;
  width: 100%;
`;
