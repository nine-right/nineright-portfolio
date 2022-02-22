import styled from "styled-components";

const DefaultBanner = styled.div`
   height: 410px;
   background-color: black;
   color: white;
   display: flex;
   justify-content: center;
   flex-direction: column;
   box-sizing: border-box;
`;

const DetailedBanner = styled(DefaultBanner)`
   height: 490px;
`;

const DefaultBannerContainer = styled.div`
   height: 100%;
   padding-bottom: 90px;
   box-sizing: border-box;
   display: flex;
   justify-content: center;
   align-items: flex-end;
   h1 {
      font-size: 54px;
   }

   @media only screen and (max-width: 1000px) {
      h1 {
         font-size: 32px;
      }
   }
`;

const DetailedBannerConatiner = styled(DefaultBannerContainer)`
   width: 860px;
   margin: 0 auto;
   padding-top: 72px;
   padding-bottom: 100px;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;

   @media only screen and (max-width: 900px) {
      width: auto;
      margin: 0 5%;
      padding-bottom: 80px;
   }
`;

const Banner:{ [key:string]: any } = {
   Default: DefaultBanner,
   Detailed: DetailedBanner,
   Container: {
      Default: DefaultBannerContainer,
      Detailed: DetailedBannerConatiner
   }
}

export default Banner;