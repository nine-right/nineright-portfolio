import React from 'react'
import styled from 'styled-components';
import History from '../../components/history';
import Banner from '../../styles/Banner';

const Container = styled.div`
   width: 640px;
   margin: 0 auto;

   @media only screen and (max-width: 1000px) {
      width: 100%;
   }
`;

const ImageBanner = styled.div`
   height: 300px;
   background-image: url('/nineright-portfolio/banner.png');
   background-size: cover;
   background-position: center;
   @media only screen and (max-width: 1000px) {
      height: 84px;
   }
`;

const MainArticle = styled.div`
   border-top: 1px solid #a3a3a34d;
   padding-top: 14px;
   h2 {
      line-height: 1.9;
      color: #9e9e9e;
      margin-bottom: 24px;
   }
   h3 {
      font-size: 17px;
      font-weight: 400;
      line-height: 1.6;
      color: #0f0f0f;
      margin-bottom: 16px;
   }
   p {
      line-height: 1.8;
      color: #2c2c2c;
      &:not(:last-child) {
         margin-bottom: 40px;
      }
   }

   @media only screen and (max-width: 1000px) {
      padding-left: 5%;
      padding-right: 5%;
      h3 { font-size: 16px; }
      p {
         font-size: 14px;
      }
   }
`;

const TextArticle = styled.article`
   padding: 150px 0;
   @media only screen and (max-width: 1000px) {
      padding-left: 5%;
      padding-right: 5%;
   }
`;

const About = () => {
   return (
      <section>
         <Banner.Default>
            <Banner.Container.Default>
               <h1>About us</h1>
            </Banner.Container.Default>
         </Banner.Default>
         <TextArticle>
            <Container>
               <p style={{ textAlign: 'center', fontWeight: 500, lineHeight: 2 }}>
                  게임, 정보보호, 소프트웨어 개발 등 각 분야의 전문가들이 모여 끊임없는 기술혁신을 추구합니다. 
                  이러한 기술력을 토대로 수많은 개인과 파트너님들께서 성공이라는 꽃을 피울 수 있도록 도와드립니다.
               </p>
            </Container>
         </TextArticle>

         <ImageBanner />

         <Container>
            <MainArticle style={{ margin: '140px 0' }}>
               <h2>We can do many things.</h2>
               <h3>
                  개발<br/>
                  #소프트웨어_최적화 #대용량_트래픽_처리 #정보보호 #게임제작 #일정준수 #애자일프로세스
               </h3>
               <p>
                  게임 제작 분야는 운영체제, 임베디드 개발과 더불어 소프트웨어 개발 중 가장 높은 기술력이 요구되는 분야입니다. 
                  저희 개발팀은 게임 개발 과정에서 축적된 소프트웨어 기술력을 바탕으로 다양한 도메인의 모바일 어플리케이션, 웹사이트, PC 응용프로그램 제작을 성공적으로 수행한 경력자들로 구성되어 있습니다.
               </p>
               <h3>
                  디자인<br/>
                  #UI #UX #Animation #Effect
               </h3>
               <p>
                  디자인팀은 어플리케이션, 웹사이트, 제품 디자인, 게임 원화, UI/UX, 애니메이션 및 이펙트 등 다양한 분야의 디자인 전문가들입니다. 
                  의뢰해주신 제품의 목적에 가장 적합한 디자인을 제안드리며 피드백을 철저히 수용하여 파트너님이 만족하시는 결과물을 약속드립니다.
               </p>
               <h3>
                  기획<br/>
                  #레퍼런스분석 #기획안작성 #컨셉기획_구체화
               </h3>
               <p>
                  아웃소싱을 고려할 때 가장 어려움을 겪으시는 부분입니다. 저희는 컨셉과 아이디어만 준비하셔도 기획 담당자님께서 구체적인 기획안 작성을 도와드립니다.
               </p>
            </MainArticle>
            <MainArticle style={{ marginBottom: 120 }}>
               <h2>Hisory</h2>
               <History />
            </MainArticle>
            <div style={{ textAlign: 'center', marginBottom: 185 }}>
               <a href="#" style={{ color: '#003fff', fontSize: 15, lineHeight: 1.33 }}>Top</a>
            </div>
         </Container>
      </section>
   );
}

export default About;