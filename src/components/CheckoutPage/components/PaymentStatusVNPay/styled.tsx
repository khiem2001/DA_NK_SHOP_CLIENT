import { pixel2fontSize } from '@/utils/pixel2fontSize';
import { pixel2vw } from '@/utils/pixel2vw';
import styled from 'styled-components';

export const InnerContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;
  .icon {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    @media only screen and (max-width: 600px) {
      width: 70px;
      height: 70px;
    }
  }

  p {
    font-family: Averta;
    margin-bottom: 0;
  }

  span {
    text-decoration: underline;
  }

  .status {
    margin-bottom: 40px;
    font-weight: 800;
    font-size: ${pixel2fontSize(23)};
    color: #404041;
  }

  .first {
    font-weight: 600;
    font-size: ${pixel2fontSize(18)};
  }

  .second {
    width: 550px;
    margin-bottom: 25px;
    font-weight: 600;
    font-size: ${pixel2fontSize(14)};
    font-style: italic;
    color: #6d6e70;
    text-align: center;
  }

  .third {
    margin-bottom: 25px;
    font-weight: 600;
    font-size: ${pixel2fontSize(14)};
    color: #6d6e70;
  }
  @media only screen and (max-width: 600px) {
    .second {
      width: 350px;
    }
  }
`;

export const InnerContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;

  .icon {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    @media only screen and (max-width: 600px) {
      width: 70px;
      height: 70px;
    }
  }

  p {
    font-family: Averta;
    margin-bottom: 0;
  }

  .status {
    margin-bottom: 20px;
    font-weight: 800;
    font-size: ${pixel2fontSize(23)};
    color: #ffffff;
  }

  .first {
    font-weight: 600;
    font-size: ${pixel2fontSize(14)};
    color: #ffffff;
  }

  .second {
    margin-bottom: 35px;
    font-weight: 600;
    font-size: ${pixel2fontSize(14)};
    color: #ffffff;
  }

  .third {
    font-weight: 600;
    font-size: ${pixel2fontSize(18)};
    color: #ffffff;
  }

  .fourth {
    margin-bottom: 30px;
    font-weight: 600;
    font-size: ${pixel2fontSize(18)};
    color: #eb1c24;
  }
`;
