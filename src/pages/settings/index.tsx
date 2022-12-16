import { Avatar, styled } from '@mui/material';
import Navigation from '@src/components/Navigation';
import { useRef } from 'react';
import 'cropperjs/dist/cropper.css';
import ProfileCropPopup from '@src/components/ProfileCropPopup';
import { useController } from '@src/components/ProfileCropPopup/controller';
import { useProfile } from '@src/data-binding/global/Account/Profile';
import { clearProfileImageApi } from '@src/api/BaseApi/PostApi/user/ClearProfileImage';
import { useUpdateProfileImageNotifier } from '@src/data-binding/global/Account/UpdateProfileImageNotifier';

export default function Settings () {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const controller = useController();
  const profile = useProfile();
  const updateProfileImageNotifier = useUpdateProfileImageNotifier();

  return (
    <Root>
      <Navigation />
      <Main>
        <ProfileWrapperLeft>
          <FileInputLabel htmlFor='file-input'>
            {
              profile.profile.profileImageUrl === '' ? (
                <EmptyAvatar />
              ) : (
                <ProfileImage src={profile.profile.profileImageUrl} />
              )
            }
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
          <ImageRemove onClick={async () => {
            await clearProfileImageApi.clearProfileImage();
            await updateProfileImageNotifier.updateProfileImage('');
          }}>
            이미지 제거
          </ImageRemove>
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
  align-items: center;
`;

const EmptyAvatar = styled(Avatar)`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  cursor: pointer;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
`;

const ProfileImage = styled('img')`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  cursor: pointer;
  display: block;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
`;

const FileInputLabel = styled('label')`
  display: block;
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
