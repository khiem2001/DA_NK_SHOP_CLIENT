import styled from 'styled-components';

export const Skeleton = styled.div`
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-position: left -300px top 0;
  animation: shimmer 1s ease infinite;
`;
