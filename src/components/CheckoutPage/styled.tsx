import styled from 'styled-components';
import { pixel2fontSize } from '@/utils/pixel2fontSize';
import { pixel2vw } from '@/utils/pixel2vw';

export const CheckBox = styled.div`
  /* The.checkboxWrapper */

  .checkboxWrapper {
    display: block;
    position: relative;
    // padding-left: 35px;
    margin-right: 12px;
    height: 25px;
    width: 25px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */

  .checkboxWrapper input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background: #fff;
    border: 1px solid #4d4d4d;
    text-align: center;
    border-radius: 2px;
  }

  /* On mouse-over, add a grey background color */

  .checkboxWrapper:hover input[type='checkbox'] ~ .checkmark {
  }

  /* When the checkbox is checked, add a blue background */

  .checkboxWrapper input:checked ~ .checkmark {
    background: linear-gradient(90deg, #b82648 -0.01%, #e61c24 53.95%, #ff7500 99.91%);
    border: 1px solid transparent;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */

  .checkboxWrapper input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */

  .checkboxWrapper .checkmark:after {
    left: 6px;
    top: 1px;
    width: 10px;
    height: 15px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
