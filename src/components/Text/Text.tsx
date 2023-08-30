import styled from 'styled-components';

interface Props {
  text: JSX.Element | string;
  fontSize?: string;
  bold?: boolean;
}

const Paragraph = styled.p<{ fontSize?: string; bold?: boolean }>`
  font-size: ${({ fontSize }) => fontSize || '14px'};
    ${({ bold }) => bold && 'font-weight: bold;'};
`;

const Text = ({ text, ...rest }: Props) => {
  return <Paragraph {...rest}>{text}</Paragraph>;
};

export default Text;
