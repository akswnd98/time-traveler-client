import styled from '@emotion/styled';

const Root = styled.div`
  width: 280px;
  height: 360px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 5%);
  border-radius: 10px;
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  cursor: pointer;
`;

const Main = styled.div`
  width: 100%;
  height: calc(50% - 40px);
  cursor: pointer;
`;

const Title = styled.div`
  margin-top: 8px;
  margin-left: 8px;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
`;

const Footer = styled.div`
  width: 100%;
  height: 40px;
  box-shadow: 0 -3px 8px 0 rgba(0, 0, 0, 5%);
  border-radius: 0 0 10px 10px;
`;

export type PropsType = {
  thumbnail: string;
  title: string;
  // writerAvatar: string;
  // writer: string;
  // views: number;
};

export default function Item (props: PropsType) {
  return (
    <Root>
      <ThumbnailWrapper>
        <img alt='thumbnail' src={props.thumbnail} />
      </ThumbnailWrapper>
      <Main>
        <Title>{props.title}</Title>
      </Main>
      <Footer>
      </Footer>
    </Root>
  );
}