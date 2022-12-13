import { Button, styled } from "@mui/material";
import theme from "@src/theme";

export type PropsType = {
  isSelected: boolean;
  text: string;
};

export default function Tab (props: PropsType) {
  return (
    <Root>
      {
        props.isSelected ? (
          <Selected>
            <TextWrapper>{props.text}</TextWrapper>
            <TabSelectedUnderline />
          </Selected>
        ) : (
          <Basic>
            <TextWrapper>{props.text}</TextWrapper>
          </Basic>
        )
      }
    </Root>
  );
}

const Root = styled('div')`
  width: 200px;
`;

const Basic = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Selected = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TabSelectedUnderline = styled('div')`
  width: 200px;
  height: 4px;
  background-color: ${theme.palette.main};
`;

const TextWrapper = styled(Button)`
  font-size: 48px;
  font-family: NotoSansKR;
  font-weight: bold;
  color: ${theme.palette.main};
  width: 100%;
  height: 100%;
`;
