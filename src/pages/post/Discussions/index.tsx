import styled from '@emotion/styled';
import Discussion from './Discussion';
import useDiscussionStartingPoints from '@src/data-binding/global/DiscussionStartingPoints';
import { useEffect } from 'react';
import { getDiscussionStartingPointsApi } from '@src/api/BaseApi/GetApi/discussion/GetDiscussionStartingPoints';
import { useSearchParams } from 'react-router-dom';

const Root = styled.div`
  width: 100%;
`;

const DiscussionWrapper = styled.div`
  :not(&:first-child) {
    margin-top: 40px;
  }
`;

export default function Discussions () {
  const discussionStartingPoints = useDiscussionStartingPoints();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      discussionStartingPoints.update((await getDiscussionStartingPointsApi.getDiscussionStartingPoints({
        postId: parseInt(searchParams.get('no')!),
      })).startingPoints);
    })();
  }, []);

  return (
    <Root>
      {
        discussionStartingPoints.discussionStartingPoints.map((v, i) => (
          <DiscussionWrapper key={i}>
            <Discussion
              id={v.id}
              writerId={v.writerId}
              writer={v.writer}
              writerProfileImageUrl={v.writerProfileImageUrl}
              firstUpload={v.firstUpload}
              body={v.body}
            />
          </DiscussionWrapper>
        ))
      }
    </Root>
  );
}
