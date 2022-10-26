import styled from '@emotion/styled'
import zero from '@assets/divergence/0.png';
import one from '@assets/divergence/1.png';
import two from '@assets/divergence/2.png';
import three from '@assets/divergence/3.png';
import four from '@assets/divergence/4.png';
import five from '@assets/divergence/5.png';
import six from '@assets/divergence/6.png';
import seven from '@assets/divergence/7.png';
import eight from '@assets/divergence/8.png';
import nine from '@assets/divergence/9.png';

export type PropsType = {
  digits: number;
};

const Root = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const NixieTube = styled.img`
  width: 52px;
  height: 80px;
`;

const digitImageMap = [
  zero, one, two, three, four, five, six, seven, eight, nine,
];

export default function Divergence (props: PropsType) {
  return (
    <Root>
      {
        props.digits.toString().split('').map((v, i) => (
          <NixieTube key={i} src={digitImageMap[Number(v)]} />
        ))
      }
    </Root>
  );
}