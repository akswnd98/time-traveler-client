import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useEffect, useRef } from 'react';
import Editor from './Editor';
import 'katex/dist/katex.min.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { uploadPostApi } from '@src/api/BaseApi/PostApi/post/UploadPost';
import { editorMarkdownModel } from './Editor/EditorMarkdownModel';
import mdHtmlConverter from '@src/utils/mdHtmlConverter';
import { getPostApi } from '@src/api/BaseApi/GetApi/post/GetPost';
import { updatePostApi } from '@src/api/BaseApi/PostApi/post/UpdatePost';
import { useTitleBinder } from './binder/TitleBinder';
import { useEditorBinder } from './binder/EditorBinder';
import { useTitleInitializer } from './initializer/TitleInitializer';
import { useBodyInitializer } from './initializer/BodyInitializer';

let no: number | undefined = undefined;

export default function Write () {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const titleRef = useRef<HTMLTextAreaElement>(null)!;
  const titleViewerRef = useRef<HTMLDivElement>(null)!;
  const bodyViewerRef = useRef<HTMLDivElement>(null)!;
  const titleBinder = useTitleBinder({ titleRef, titleViewerRef });
  const titleInitializer = useTitleInitializer({ titleRef, titleViewerRef });
  const editorBinder = useEditorBinder({ bodyViewerRef });
  const bodyInitializer = useBodyInitializer({ bodyViewerRef });

  useEffect(() => {
    (async () => {
      const noStr = searchParams.get('no');
      if (noStr === null) {
        no = undefined;
        return;
      }
      no = parseInt(noStr);
      const ret = await getPostApi.getPost({ id: no });
      titleInitializer.initializeTitle(ret.title);
      bodyInitializer.initializeBody(ret.body);
    })();
  }, []);

  return (
    <Root>
      <Left>
        <Top>
          <TopMain>
            <Title
              placeholder='제목을 입력해주세요.'
              ref={titleBinder.titleRef}
              onInput={() => titleBinder.reflectTitle()}
            />
            <TitleSeperator />
            <Editor
              editorBinder={editorBinder}
              bodyInitializer={bodyInitializer}
            />
          </TopMain>
        </Top>
        <Bottom>
          <OutButton
            onClick={() => navigate('/')}
          >
            나가기
          </OutButton>
          <RightButtons>
            <TempSaveButton>임시저장</TempSaveButton>
            <UploadButton
              onClick={() => {
                if (no === undefined) {
                  uploadPostApi.uploadPost({ title: titleBinder.titleRef.current!.value, body: editorMarkdownModel.getMarkdown() });
                } else {
                  updatePostApi.updatePost({ id: no, title: titleBinder.titleRef.current!.value, body: editorMarkdownModel.getMarkdown() });
                }
                location.href = '/my-page';
              }}
            >
              올리기
            </UploadButton>
          </RightButtons>
        </Bottom>
      </Left>
      <Right>
        <TitleViewer
          ref={titleBinder.titleViewerRef}
        />
        <BodyViewer
          ref={editorBinder.bodyViewerRef}
        />
      </Right>
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  box-shadow: 3px 0 8px 0 rgba(0, 0, 0, 5%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Right = styled.div`
  width: calc(50% - 80px);
  height: calc(100% - 40px);
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #FBFDFC;
  z-index: 0;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(1, 39, 89, 20%);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #012759;
    border-radius: 4px;
  }
  overflow-y: auto;
`;

const TitleViewer = styled.div`
  width: 100%;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 100px;
`;

const BodyViewer = styled.div`
  width: 100%;
`;

const Top = styled.div`
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(1, 39, 89, 20%);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #012759;
    border-radius: 4px;
  }
  overflow-y: auto;
  width: calc(100% - 80px);
  height: calc(100% - 65px - 40px);
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
`;

const TopMain = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.textarea`
  height: 82px;
  width: calc(100% - 80px);
  font-family: NotoSansKR;
  font-size: 48px;
  font-weight: bold;
  outline: none;
  border: none;
  resize: none;
  overflow: hidden;
`;

const TitleSeperator = styled.div`
  width: 100px;
  height: 8px;
  background-color: black;
  margin-bottom: 20px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 65px;
  box-shadow: 0 -3px 8px 0 rgba(0, 0, 0, 5%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OutButton = styled(Button)`
  margin-left: 20px;
  width: 100px;
  height: 40px;
  color: gray;
  font-weight: bold;
`;

const RightButtons = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadButton = styled(Button)`
  margin-left: 8px;
  width: 100px;
  height: 40px;
  color: white;
  background-color: #012759;
  font-weight: bold;
`;

const TempSaveButton = styled(Button)`
  width: 100px;
  height: 40px;
  color: #012759;
  font-weight: bold;
`;
