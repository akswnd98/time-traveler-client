import { Dialog } from '@mui/material';
import styled from '@emotion/styled';
import { useController } from './controller';
import Body from './Body';

export default function ProfileCropPopup () {
  const controller = useController();

  return (
    <Root open={controller.profileCropPopup} onClose={() => controller.closeWithoutApply()}>
      <Body />
    </Root>
  );
}

const Root = styled(Dialog)`
  & .MuiPaper-root {
    border-radius: 10px;
    border-color: white;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
