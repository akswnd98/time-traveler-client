import { styled } from '@mui/material';
import { useController } from '../controller';
import { useEffect, useRef } from 'react';
import Cropper from 'cropperjs';
import { Button } from '@mui/material';
import theme from '@src/theme';

export default function Body () {
  const controller = useController();
  const cropImageRef = useRef<HTMLImageElement>(null);

  let cropper: Cropper | undefined = undefined
  useEffect(() => {
    cropper = new Cropper(cropImageRef.current!, {
      aspectRatio: 1,
    });
  }, []);

  return (
    <Root>
      <CropImage src={controller.profileImage} ref={cropImageRef} />
      <ApplyButton onClick={() => {
        // cropper!.getCroppedCanvas().toBlob(async (blob) => {
        //   const form = new FormData();
        //   form.append(
        //     'file',
        //     new File([blob!], 'temp.png', {
        //       type: 'image/png',
        //     }),
        //   );
        // });
        const dataURL = cropper!.getCroppedCanvas().toDataURL('image/png');
        console.log(dataURL);
        controller.applyCrop(dataURL);
      }}>
        적용
      </ApplyButton>
    </Root>
  );
}

const Root = styled('div')`
  width: 100%;
`;

const CropImage = styled('img')`
  display: block;
  width: 100%;
`;

const ApplyButton = styled(Button)`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
  border-radius: 10px;
  font-family: NotoSansKR;
  font-size: 16px;
  color: ${theme.palette.main};
`;
