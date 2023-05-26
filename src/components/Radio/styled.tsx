import styled from 'styled-components';

export const RadioWrapper = styled.div<{ isChecked?: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  cursor: pointer;
  user-select: none;

  input {
    z-index: 999;
    opacity: 0;
    position: absolute;
    width: 25px;
    height: 25px;

    &:checked + label:after {
      transform: scale(1);
      background-color: #12e234;
    }

    &:checked + label:before {
      border-color: #4d4d4d;
      background-color: #ffffff;
      animation: ripple 0.1s linear forwards;
    }
  }

  label {
    display: inline-block;
    min-height: 15px;
    position: relative;
    padding: 0 30px;
    margin-bottom: 0;
    cursor: pointer;
    vertical-align: bottom;

    &:before,
    &:after {
      position: absolute;
      content: '';
      border-radius: 50%;
      transition: all 0.1s ease;
      transition-property: transform, border-color;
    }

    &:before {
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border: 2px solid gray;
    }

    &:after {
      /* ${({ isChecked }) => (isChecked ? 'display: block' : 'display: none')}; */
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      transform: scale(0);
      background: #4d4d4d;
    }
  }
`;

export const CustomRadioWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  cursor: pointer;
  user-select: none;

  input {
    z-index: 999;
    opacity: 0;
    position: absolute;
    width: 25px;
    height: 25px;

    &:checked + label:after {
      transform: scale(1);
    }

    &:checked + label:before {
      border-color: #4d4d4d;
      animation: ripple 0.1s linear forwards;
    }
  }

  label {
    display: inline-block;
    min-height: 15px;
    position: relative;
    padding: 0 30px;
    margin-bottom: 0;
    cursor: pointer;
    vertical-align: bottom;
    font-size: 14px;

    &:before,
    &:after {
      position: absolute;
      content: '';
      border-radius: 50%;
      transition: all 0.1s ease;
      transition-property: transform, border-color;
    }

    &:before {
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border: 2px solid gray;
    }

    &:after {
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      transform: scale(0);
      background: #4d4d4d;
    }
  }
`;
