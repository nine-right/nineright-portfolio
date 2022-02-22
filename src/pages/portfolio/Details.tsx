import React, { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Banner from '../../styles/Banner';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import portfolioData from '../../data/portfolio';

const PorfolioDetails = styled.p`
   line-height: 1.5;
   span.label {
      font-size: 14px;
      margin-right: 10px;
      color: white;
   }
   span.text {
      font-size: 12px;
      color: #bababa;
      margin-right: 21px;
   }
   .show-on-mobile { display: none; }

   @media only screen and (max-width: 1000px) {
      .show-on-mobile { display: inline; }
   }
`;

const PortfolioTitle = styled.div`
   color: white;
   h1 {
      line-height: 1.2;
      font-size: 38px;
      font-weight: 500;
      margin-bottom: 24px;
   }
   p {
      line-height: 1.9;
      color: #fafafa;
   }
   @media only screen and (max-width: 1000px) {
      h1 { font-size: 24px; }
      p { font-size: 14px; }
   }
`;

/* const Container = styled.div`
   width: 860px;
   margin: 0 auto;
`; */

const ChipContainer = styled.div`
   margin: 0 auto;
   padding: 70px 0 58px;
   .row {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 640px;
      margin: 0 auto;
   }
   .chip {
      padding: 8px 20px;
      color: #202121;
      border: 1px solid #202121;
      border-radius: 36px;
      margin-right: 10px;
      margin-bottom: 12px;
      font-size: 13px;
      &:last-child { margin-right: 0; }
   }

   @media only screen and (max-width: 1000px) {
      /* padding-left: 20px;
      padding-right: 20px; */
      .row {
         max-width: none;
         margin-left: 5%;
         margin-right: 5%;
      }
   }
`;

const SwiperContainer = styled.div`
   width: 1248px;
   margin: 160px auto 140px;
   .swiper {
      .swiper-slide {
         height: 702px;
         background-size: cover;
         background-position: center;
      }
   }
   .custom-swiper-pagination {
      display: flex;
      justify-content: center;
      padding: 24px 0 10px;
      .swiper-pagination-bullet {
         opacity: 1;
         background-color: #c4c4c4;
         &.swiper-pagination-bullet-active { background-color: #003fff; }
      }
   }
   .swiper-slide-title {
      color: black;
      line-height: 1.2;
      text-align: center;
   }

   @media only screen and (max-width: 1248px) {
      width: 100%;
      .swiper {
         .swiper-slide {
            height: calc(100vw / 16 * 9);
         }
      }
   }
`;

const MainArticleContainer = styled.div`
   width: 600px;
   margin: 0 auto;

   @media only screen and (max-width: 1000px) {
      width: 100%;
   }
`;

const MainArticle = styled.div`
   border-top: 1px solid #a3a3a34d;
   padding-top: 14px;
   margin-bottom: 60px;
   h2 {
      font-size: 16px;
      line-height: 1.9;
      color: #9e9e9e;
      margin-bottom: 16px;
   }
   p {
      line-height: 1.8;
   }

   @media only screen and (max-width: 1000px) {
      padding-left: 5%;
      padding-right: 5%;

      p {
         font-size: 14px;
      }
   }
`;

/* const Title = styled.h1`
   margin-bottom: 140px;
   font-size: 38px;
   font-weight: 500;
   text-align: center;
`; */

const PortfolioDetails = () => {
   const { id: idx } = useParams();
   const data = useMemo(() => idx ? portfolioData[parseInt(idx)] : null, [idx]);

   useEffect(() => {
      if (!data) window.location.replace('/');
   }, [data]);

   return (
      <section>
         <Banner.Detailed>
            <Banner.Container.Detailed>
               <PorfolioDetails>
                  <span className="label">Scope</span>
                  <span className="text">{data?.scopes.join(', ')}</span>
                  <br className="show-on-mobile" />
                  <span className="label">Skills</span>
                  <span className="text">{data?.skills.join(', ')}</span>
               </PorfolioDetails>
               <PortfolioTitle>
                  <h1>{data?.title}</h1>
                  <p>{data?.subtitle}</p>
               </PortfolioTitle>
            </Banner.Container.Detailed>
         </Banner.Detailed>
         
         <ChipContainer>
            <div className="row">
               {data?.categories.map((category, idx) => <div className="chip" key={idx}>{category}</div>)}
            </div>
         </ChipContainer>
         <div style={{ height: 1, backgroundColor: '#a3a3a34d' }} />
         
         <SwiperContainer>
            <Swiper
               modules={[Pagination]}
               pagination={{
                  clickable: true,
                  el: '.custom-swiper-pagination',
                  renderBullet: (index, className) => {
                     return '<span class="' + className + '"></span>';
                  }
               }}
            >
               {(data && data.slideImages.length) ? 
                  data?.slideImages.map((image, idx) => <SwiperSlide key={image} style={{ backgroundImage: `url(/nineright-portfolio/images/portfolio/slide/${image})` }} />) :
                  <SwiperSlide style={{
                     backgroundImage: `url(/nineright-portfolio/images/thumbnail_default.png)`,
                     backgroundSize: 'contain',
                     backgroundColor: '#0094ff',
                     backgroundRepeat: 'no-repeat'
                  }} />
               }
            </Swiper>
            <div className="custom-swiper-pagination"></div>
            {/* <div className="swiper-slide-title">Main page</div> */}
         </SwiperContainer>

         <MainArticleContainer>
            <MainArticle>
               <h2>Background</h2>
               <p>{data?.description}</p>
            </MainArticle>
            {/* <MainArticle>
               <h2>We can do many things.</h2>
               <p>
                  아무글 펌 네이버(주)는 글로벌 ICT 기업으로서 한국 최대 검색포털 네이버를 서비스하고 있고, 그 계열사에서 모바일 메신저 라인, 동영상 카메라 스노우, 디지털 만화 서비스 네이버웹툰, 메타버스 서비스 제페토 등을 서비스하고 있습니다. 또한, 네이버(주)는 인공지능, 로보틱스, 모빌리티 등 미래 기술에 대한 지속적인 연구개발을 통해 기술 플랫폼의 변화와 혁신을 추구하며 세계 각국의 수많은 이용자와 다양한 파트너들이 함께 성장할 수 있도록 노력하고 있습니다.
               </p>
            </MainArticle> */}
         </MainArticleContainer>

         <div style={{ marginBottom: 250 }} />
         {/* <div style={{ padding: 30, textAlign: 'center', color: '#003fff', marginBottom: 100, textDecoration: 'underline' }}>
            <Link to="#">View site</Link>
         </div> */}

         {/* <Container>

            
         </Container> */}
      </section>
   );
};

export default PortfolioDetails;