import styled from 'styled-components';

// Please dont style this, it will effect other buttons

export default styled.button`
  width: max-content;
  height: max-content;
  border: none;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  letter-spacing: -0.375px;
  color: white;
  padding: 3px 10px;

  :focus {
    outline: none;
  }

  @media (hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }
`;
