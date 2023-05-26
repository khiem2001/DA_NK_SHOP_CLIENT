import styled from 'styled-components';

interface ButtonType {
  btnType?: 'primary' | 'default' | 'background';
  background?: any;
}

const Button = styled.button<ButtonType>`
  font-family: Athiti;
  font-weight: 700;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  text-align: center;
  height: 45px;
  font-size: 20px;
  min-width: 200px;
  padding: 0 30px;
  cursor: pointer;

  :disabled {
    opacity: 0.5;
  }
`;

export default Button;
