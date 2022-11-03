import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { getPostApi } from '@src/api/BaseApi/GetApi/post/GetPost';
import mdHtmlConverter from '@src/utils/mdHtmlConverter';
import Navigation from '@src/components/Navigation';
import Footer from '@src/components/Footer';
import moment from 'moment';
import DiscussionStartingPointWriter from './DiscussionStartingPointWriter';
import Discussions from './Discussions';
import { useSearchParams } from 'react-router-dom';

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  width: 50%;
  margin-left: 25%;
  margin-top: 150px;
  margin-bottom: 150px;
`;

const TitleViewer = styled.div`
  width: 100%;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MetaViewer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Writer = styled.div`
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
`;

const Timestamp = styled.div`
  margin-left: 20px;
`;

const BodyViewer = styled.div`
  margin-top: 150px;
  width: 100%;
`;

const DiscussionStartingPointWriterWrapper = styled.div`
  margin-top: 150px;
`;

const DiscussionsWrapper = styled.div`
  margin-top: 150px;
`;

export default function Post () {
  const titleViewerRef = useRef<HTMLDivElement>(null);
  const bodyViewerRef = useRef<HTMLDivElement>(null);
  const [writer, setWriter] = useState<string>('');
  const [timestamp, setTimestamp] = useState<string>('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      const response = await getPostApi.getPost({ id: parseInt(searchParams.get('no')!) });
      titleViewerRef.current!.innerHTML = response.title;
      bodyViewerRef.current!.innerHTML = (await mdHtmlConverter.process(response.body)).toString();
      setWriter(response.writer);
      setTimestamp(response.lastUpdate);
    })();
  }, []);

  return (
    <Root>
      <Navigation />
      <Main>
        <TitleViewer
          ref={titleViewerRef}
        />
        <MetaViewer>
          <Writer>
            {writer}
          </Writer>
          <Timestamp>
            {moment(timestamp).fromNow()}
          </Timestamp>
        </MetaViewer>
        <BodyViewer
          ref={bodyViewerRef}
        />
        <DiscussionStartingPointWriterWrapper>
          <DiscussionStartingPointWriter />
        </DiscussionStartingPointWriterWrapper>
        <DiscussionsWrapper>
          <Discussions />
        </DiscussionsWrapper>
      </Main>
      <Footer />
    </Root>
  );
}
