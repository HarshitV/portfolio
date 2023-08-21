import styled from 'styled-components';

export const Button = styled.a`
display: inline-flex;
justify-content: center;
align-items: center;
border: 1px solid black;
padding: 10px 20px;
border-radius: 50px;
@media only screen and (min-width: 768px) {
  font-size: 14px;
}
@media only screen and (min-width: 1440px) {
  font-size: 15px;
}
font-weight: 100;
transition: 0.3s;
&:hover {
  background-color: black;
  color: white;
}
`;