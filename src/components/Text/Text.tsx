import styled from 'styled-components';

interface Props {
  text: JSX.Element | string;
  fontSize?: string;
  bold?: boolean;
  italic?: boolean;
}

const Text = ({ text, ...rest }: Props) => {
  return <Paragraph {...rest}>{text}</Paragraph>;
};

export default Text;

const Paragraph = styled.p<{
  fontSize?: string;
  bold?: boolean;
  italic?: boolean;
}>`
  font-size: ${({ fontSize }) => fontSize || '14px'};
  ${({ bold }) => bold && 'font-weight: bold;'};
  ${({ italic }) => italic && 'font-style: italic;'};
  width: 100%;
`;
