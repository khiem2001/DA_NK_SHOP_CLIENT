import styled from 'styled-components';
import Button from './button';

export type ButtonSize = 'small' | 'medium' | 'large';

const getButtonSize = (size: ButtonSize | undefined) => {
  switch (size) {
    case 'small':
      return `
        padding: 0px!important;
        font-size: 14px;
        min-width: 120px;
      `;
    case 'medium':
      return `
        padding: 0px 15px;
        font-size: 16px;
        min-width: 170px;
      `;
    case 'large':
      return `
        padding: 0px 25px;
        font-size: 18px;
      `;
    default:
      return `
        padding: 0px 30px;`;
  }
};

export const PrimaryButton = styled(Button)<{ size?: ButtonSize }>`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(to right, #2b05ff, #ff0101);

  ${({ size }) => getButtonSize(size as ButtonSize)};
`;

export default PrimaryButton;
