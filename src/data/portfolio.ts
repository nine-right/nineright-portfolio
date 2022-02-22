const portfolioData = [
   {
      title: '모바일게임 내일은 대마법사',
      subtitle: '5가지의 속성을 다루는 마법사를 성장시켜 몰려오는 몬스터를 막아내는 디펜스 RPG 게임',
      description: `몰려오는 몬스터들의 속성저항을 고려한 나만의 스킬 덱을 구성하여 전략적인 플레이를 통해 캐릭터를 육성하고 전설급 아이템을 획득해보세요!`,
      scopes: ['Produce', 'Development', 'Design'],
      skills: ['C++', 'Cocos2d-x', 'Node.js', 'MariaDB'],
      categories: ['Client', 'Server', 'Admin', 'Design'],
      thumbnail: '008.png',
      slideImages: ['008.png']
   },
   {
      title: `위치기반 과외중개 플랫폼 '티버'`,
      subtitle: '내 위치를 기반으로 선생님과 학생을 중개하고, 학습관리를 해주는 플랫폼',
      description: `다양한 과외 선생님을 만나볼 수 있는 ‘티처버튼’ 플랫폼을 제작하였습니다. 사용자들의 위치를 기반으로 활동지역 내에 적합한 선생님을 보여주며 매칭 후 수업관리, 스케줄관리, 결제관리까지 수업에 필요한 모든 기능을 지원합니다.`,
      scopes: ['Development'],
      skills: ['React.js', 'React Native', 'Typescript', 'Node.js', 'MariaDB'],
      categories: ['Client', 'Server', 'Admin'],
      thumbnail: '020.png',
      slideImages: ['020.png']
   },
   {
      title: `위치기반 청소중개 플랫폼 ‘청소몬’`,
      subtitle: '소비자가 가까운 청소업자에게 청소의뢰부터 대금결제까지 가능한 플랫폼',
      description: `기존 개발된 어플리케이션을 유지보수하고, 기능추가하는 프로젝트였습니다. PC와 Mobile 웹 및 관리자페이지를 개발하고, React Native Webview 기반으로 제작되었습니다. 개발기능 누락과 버그가 많은 상태로 인계된 프로젝트이기에 기존 소스코드를 안정화 시키는 작업부터 수행하였으며, 현재 안정화가 대부분 완료되어 본격적인 마케팅집행을 앞두고 계십니다.`,
      scopes: ['Development'],
      skills: ['HTML', 'CSS', 'Javascript', 'React Native', 'PHP', 'MySQL'],
      categories: ['Client', 'Server', 'Admin'],
      thumbnail: '007.png',
      slideImages: ['007.png']
   },
   {
      title: '스마트팜 제균기 모니터링, 제어 시스템',
      subtitle: '대규모 스마트팜에 투입되는 제균기 제품의 데이터를 모니터링하고 제어할 수 있는 서비스',
      description: `대규모 스마트팜에 투입되는 제균기 제품의 데이터를 모니터링하고 제어할 수 있는 서비스입니다. React를 이용해 Web기반으로 제작되었으며 제균기 제품을 제어하는 Backend도 함께 제작하였습니다.`,
      scopes: ['Development'],
      skills: ['React.js', 'Node.js', 'MySQL'],
      categories: ['Client', 'Server'],
      thumbnail: '005.png',
      slideImages: ['005.png']
   },
   {
      title: 'OK대전',
      subtitle: '지역상생 직거래 홍보, 이벤트 정보 어플리케이션',
      description: `타 개발사에서 개발한 앱을 참고하여 React Native 기반으로 리뉴얼하는 업무입니다. 프론트는 개발이 완료되었으며 서버연동 작업 후 배포예정입니다.`,
      scopes: ['Development'],
      skills: ['React Native'],
      categories: ['Client'],
      thumbnail: '003.png',
      slideImages: ['003.png']
   },
   {
      title: '클램 커뮤니티 App',
      subtitle: 'NFT와 결합한 위치기반 지역 커뮤니티 서비스',
      description: `위치기반 지역커뮤니티 App입니다. NFT를 연계하여 마켓플레이스 기능도 고도화 계획 중입니다. React Native로 제작되었습니다. `,
      scopes: ['Development'],
      skills: ['React Native', 'Node.js', 'MySQL'],
      categories: ['Client', 'Server'],
      thumbnail: '004.png',
      slideImages: ['004.png']
   },
   {
      title: '밸런스스페이스 랜딩페이지',
      subtitle: '가상오피스 밸런스스페이스의 랜딩페이지 개발',
      description: `가상오피스 서비스 '밸런스 스페이스'의 랜딩페이지를 제작하였습니다.`,
      scopes: ['Development'],
      skills: ['React.js'],
      categories: ['Client'],
      thumbnail: '006.png',
      slideImages: ['006.png']
   },
   {
      title: '키즈브레인',
      subtitle: '전자 주판을 연동하여 주산능력을 키워주는 교육용 게임',
      description: `Unity를 기반으로 제작된 게임입니다. 블루투스기능을 연동한 주판을 이용해 아이들의 사고력 향상을 목적으로 제작한 게임입니다. 클라이언트님의 요청으로 1차개발을 빠르게 마무리 한 후에 게임적인 요소를 추가하여 추가 개발에 관한 논의도 진행 중입니다.`,
      scopes: ['Produce',
         'Development',
         'Design'],
      skills: ['Unity', 'Photon'],
      categories: ['Client',
         'Server',
         'Admin'],
      thumbnail: '002.png',
      slideImages: ['002.png']
   },
   {
      title: '김비서',
      subtitle: '청년과 노인을 위치기반으로 매칭하고, 심부름을 의뢰할 수 있는 서비스',
      description: `약국방문, 장보기에 어려움이 있는 노인들을 대상으로 청년을 매칭해주는 서비스입니다.`,
      scopes: ['Development'],
      skills: ['React Native', 'Node.js', 'MySQL'],
      categories: ['Client',
         'Server'],
      thumbnail: '009.png',
      slideImages: ['009.png']
   },
   {
      title: '1.2m record',
      subtitle: '공간예약 플랫폼 1.2m record',
      description: `담양에 위치한 힐링 카페 1.2m record 의 이야기와 다양한 컨텐츠를 보여줄 수 있는 반응형 홈페이지 제작을 맡게되었습니다.
      1.2m record의 감성에 맞는 컬러와 디자인을 구성하여 다양한 사람들이 편히 이용 할 수 있도록 프로그램 소개와 예약이 가능한 페이지를 제작하는것이 프로젝트의 과업이었습니다.`,
      scopes: ['Development',
         'Design'],
      skills: ['Vue.js', 'Node.js', 'React.js'],
      categories: ['Client',
         'Server',
         'Admin'],
      thumbnail: '022.png',
      slideImages: ['022.png']
   },
   {
      title: '해미국제성지 웹사이트',
      subtitle: '해미순교성지의 글로벌 웹사이트 제작',
      description: `교황청이 승인한 국제 성지로 선포된 해미순교성지의 반응형 웹사이트입니다. 게시판, 갤러리 등이 구현되어 있으며  한국어, 영어, 중국어 버전을 지원합니다. 반응형으로 제작되어 사용자에게 최적의 경험을 제공합니다.`,
      scopes: ['Development'],
      skills: ['HTML', 'CSS', 'Javascript', 'Node.js', 'Express', 'MySQL', 'i18n'],
      categories: ['Client', 'Admin'],
      thumbnail: '021.png',
      slideImages: ['021.png']
   },
   {
      title: 'H&S HighTech 기업 포트폴리오 웹사이트 (다국어 지원)',
      subtitle: '기업정보 및 제품, 솔루션 웹 사이트 개발',
      description: `전자회로에 사용되는 부품을 전문적으로 생산하는 제조사의 반응형 기업 홈페이지입니다. 자체 개발 제품, 솔루션 등을 열람할 수 있으며, 관리자페이지에서 연락처, 제품, 솔루션, 연혁 등을 관리할 수 있습니다.`,
      scopes: ['Development',
         'Design'],
      skills: ['HTML', 'CSS', 'Javascript', 'Node.js', 'Express', 'MySQL'],
      categories: ['Client', 'Admin'],
      thumbnail: '019.png',
      slideImages: ['019.png']
   },
   {
      title: '브랜드옵션 브랜드 전략/컨설팅 서비스',
      subtitle: '브랜드 전략 및 컨설팅 서비스 반응형 웹 제작',
      description: `정책연구, 버벌/비주얼 브랜딩 개발, 마케팅 전략 및 실행, 제반 커뮤니케이션 실행을 전문으로 하는 기업의 반응형 홈페이지입니다. 관리자페이지에서 포트폴리오, 연혁 등을 관리할 수 있습니다.`,
      scopes: ['Development'],
      skills: ['HTML', 'CSS', 'Javascript', 'Node.js', 'Express', 'MySQL'],
      categories: ['Client', 'Admin'],
      thumbnail: '017.png',
      slideImages: ['017.png']
   },
   {
      title: '간판지존 간판 제작문의 반응형 웹사이트',
      subtitle: '간판 제작 문의, 지원을 위한 온라인 웹 사이트 개발',
      description: `간판 견적 온라인 문의 사이트로 반응형으로 제작되었으며 하이브리드 앱으로 출시되었습니다. 관리자 페이지에서 다양한 간판 타입과 디자인에 대한 견적 및 옵션 등을 설정할 수 있고, 견적 요청 및 문의사항을 관리할 수 있습니다.`,
      scopes: ['Development'],
      skills: ['HTML', 'CSS', 'Javascript', 'Node.js', 'Express', 'MySQL'],
      categories: ['Client', 'Admin'],
      thumbnail: '016.png',
      slideImages: ['016.png']
   },
   {
      title: '미래에셋 글로벌 홈페이지 (영문)',
      subtitle: '미래에셋 글로벌(영문) 홈페이지 반응형 웹 개발',
      description: `미래에셋의 글로벌(영문) 반응형 홈페이지입니다. 기업 홈페이지인 만큼 검색엔진 최적화에 중점을 두었으며 관리자 페이지에서 조직도, 포트폴리오 등을 관리할 수 있습니다.`,
      scopes: ['Development'],
      skills: ['HTML', 'CSS', 'Javascript', 'PHP'],
      categories: ['Client', 'Admin'],
      thumbnail: '015.png',
      slideImages: ['015.png']
   },
   {
      title: '커넥티드 유학 플랫폼',
      subtitle: '맞춤형 유학 상품 의뢰할 수 있는 커넥티드 유학플랫폼 Frontend 개발',
      description: `해외 유학에 관련한 각종 액티비티, 홈스테이를 연결해주는 플랫폼입니다. 유학생의 각종 정보를 관리할 수도 있으며 유학 상품도 관리할 수 있는 종합 플랫폼입니다.`,
      scopes: ['Development'],
      skills: ['Vue.js'],
      categories: ['Client'],
      thumbnail: '013.png',
      slideImages: ['013.png']
   },
   {
      title: 'MBio Data Viewer',
      subtitle: '공기 중 미세먼지 및 부유세균 측정값 모니터링을 위한 Data Viewer',
      description: `공기 중 미세먼지와 부유세균을 측정할 수 있는 MBio 디바이스의 계측값을 실시간 모니터링할 수 있도록 지원하는 PC 어플리케이션입니다.`,
      scopes: ['Development'],
      skills: ['Electron'],
      categories: ['Client', 'Serial Connect'],
      thumbnail: '018.png',
      slideImages: ['018.png']
   },
   {
      title: '로잇 법률상담 서비스',
      subtitle: '온라인 법률상담 서비스 개발',
      description: `다양한 법률 상담 서비스와 상품을 제공하여 유사시 법률 지식이 부족하여 곤란한 상황에 빠지기 쉬운 일반인들에게 편리함을 제공하는 온라인 법률 상담 서비스 입니다.`,
      scopes: ['Development'],
      skills: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL', 'IAMPORT'],
      categories: ['Client'],
      thumbnail: '010.png',
      slideImages: ['010.png']
   },
   {
      title: 'LeapMotion 3D 를 이용한 페인팅 시스템',
      subtitle: 'LeapMotion (손가락과 제스쳐) 입력으로 작동하는 3D환경 모델 페인팅 시스템',
      description: `3D 를 이용한 페인팅 시스템`,
      scopes: ['Produce',
         'Development'],
      skills: ['Unity'],
      categories: ['Client'],
      thumbnail: '001.png',
      slideImages: ['001_1.png', '001_2.png']
   },
   {
      title: `인포크 링크 자연어 처리 및 대용량 트래픽 처리 기술 자문`,
      subtitle: 'INPOCK LINK 서비스의 AI 고도화 프로젝트',
      description: `인플루언서 공동구매를 지원하는 서비스 INPOCK LINK 서비스의 자연어처리 및 대용량 트래픽 처리 기술을 도입하기 위해 서비스 분석과 아키텍처 설계 자문을 수행하였습니다.`,
      scopes: ['Produce'],
      skills: [],
      categories: [],
      thumbnail: '',
      slideImages: []
   },
   {
      title: `플레저`,
      subtitle: '라이프 스타일 스포츠 큐레이션 서비스',
      description: `기존에 개발된 모바일 웹에 React Native를 이용해 iPhone 노치 색상변경, 카카오로그인, 페이스북 sdk 삽입 이슈에 대응하고, 빌드 후 납품하는 프로젝트으며 원청의 개발자에게 인수인계 완료되었습니다.`,
      scopes: ['Development'],
      skills: ['React Native'],
      categories: ['Client'],
      thumbnail: '',
      slideImages: ['']
   },
   {
      title: `라바웨이브 정보보호, IT 기술 블로그 콘텐츠 제작`,
      subtitle: '정보보안기업 라바웨이브의 기술블로그 콘텐츠 제작',
      description: `정보보안 서비스 기업 라바웨이브의 기술블로그 콘텐츠 제작을 맡아 진행하였습니다. 정보보안을 중심으로 각종 IT 트렌드에 대해 분석하고 이를 정리하여 배포하였습니다. 배포한 콘텐츠가 네이버 테크 메인에 소개되는 성과가 있었습니다.`,
      scopes: [],
      skills: [],
      categories: [],
      thumbnail: '',
      slideImages: ['']
   },
   {
      title: `열정공`,
      subtitle: '기술교육 검색 서비스',
      description: ``,
      scopes: ['Development'],
      skills: ['React.js', 'Next.js', 'Node.js', 'Express', 'MySQL'],
      categories: ['Client', 'Admin'],
      thumbnail: '',
      slideImages: ['']
   },
   {
      title: `팸하우스`,
      subtitle: '위치기반 쉐어하우스 검색 서비스',
      description: ``,
      scopes: ['Development'],
      skills: ['HTML', 'CSS', 'Javascript', 'Node.js', 'Express', 'MySQL'],
      categories: ['Client', 'Admin'],
      thumbnail: '',
      slideImages: ['']
   },
   {
      title: `국가평생교육진흥원 성인정보문해능력 테스트 어플리케이션`,
      subtitle: '성인의 정보문해능력 테스트 및 결과 시각화 Application',
      description: `충북대학교 연구실과 협업한 프로젝트로서 성인의 정보문해능력을 테스트하기 위한 연구용 어플리케이션 개발 프로젝트입니다.`,
      scopes: ['Development'],
      skills: ['HTML', 'CSS', 'Javascript', 'Cordova'],
      categories: ['Client'],
      thumbnail: '',
      slideImages: ['']
   },
   {
      title: `차량 도어 개폐 센서 신호 모니터링 소프트웨어`,
      subtitle: '현보자동차의 차량 도어 개폐 센서 제어 및 계측값 모니터링 서비스개발',
      description: `현보자동차가 생산하는 차량 도어 개폐센서의 신호를 모니터링하고, CAN프로토콜을 이용해 명령을 송수신 가능한 PC 어플리케이션입니다.`,
      scopes: ['Development'],
      skills: ['PyQT5'],
      categories: ['Client', 'Serial Connect'],
      thumbnail: '',
      slideImages: ['']
   },
   {
      title: `모바일 게임 닌자대전 마케팅 클라이언트`,
      subtitle: '모바일 게임 닌자대전의 마케팅용 웹 게임 개발',
      description: `인기 모바일게임 닌자대전의 Playable Ad 버전으로 사용자에게 미리 게임을 플레이할 수 있는 기회를 제공합니다. 다양한 스킬을 사용하여 몰려오는 적을 물리치는 쾌감을 느낄 수 있는 디펜스 RPG 게임입니다.`,
      scopes: ['Development'],
      skills: ['HTML', 'Javascript', 'Phaser3'],
      categories: ['Client', 'Web Game'],
      thumbnail: '',
      slideImages: ['']
   },
   {
      title: `네트워크 포렌식을 위한 패킷 덤프파일 분석 서비스`,
      subtitle: '네트워크 포렌식 전문가들을 위해 모니터링과정에서 캡처된 Dump파일의 데이터를 분석하고 시각화하여 빠른 초동수사를 돕기위한 서비스',
      description: `네트워크 침해사고는 초동수사가 가장 중요합니다. 이를 위해서 네트워크 상에 캡처된 Packet Dump File을 분석하여 정보를 요약하고 시각화하는 프로젝트입니다. 이를 통해 포렌식 전문가들의 수사효율성을 증대시킵니다.`,
      scopes: ['Produce', 'Development', 'Design'],
      skills: ['HTML', 'CSS', 'Javascript', 'Python', 'PHP'],
      categories: ['Client', 'Server'],
      thumbnail: '',
      slideImages: ['']
   },
   {
      title: `인공지능을 활용한 성적예측 시스템`,
      subtitle: '학생의 현재 학습 정보를 이용하여 미래의 성적을 예측하는 인공지능 솔루션 개발 프로젝트',
      description: `학생의 각종 정보를 수집하여 미래의 성적을 예측하는 프로젝트입니다. 다양한 Factor가 사용되었으며, 호서대학교 학생의 데이터를 기초로 한 테스트 결과에서 80%이상의 정확도를 달성하였습니다.`,
      scopes: ['Produce', 'Development'],
      skills: ['Python', 'Tensorflow'],
      categories: ['Client', 'Server'],
      thumbnail: '',
      slideImages: ['']
   },
   {
      title: `CSR Bluetooth Board의 신호전송 매커니즘 연구개발`,
      subtitle: '모바일 Application을 통해 보청기를 제어하기 위한 신호전송 기술연구',
      description: `CSR Board가 삽입된 보청기를 제어하기 위한 Application 개발과정에서 CSR 규격의 Bluetooth 신호 전송 및 증폭 매커니즘을 연구하였습니다.`,
      scopes: ['Development'],
      skills: ['CSR Bluetooth Framework'],
      categories: ['Research'],
      thumbnail: '',
      slideImages: ['']
   },
   {
      title: `수강신청 알림 서비스 제공방법 및 시스템(특허 등록 1014928080000)`,
      subtitle: '자신과 가까운 지인들의 수강신청 현황을 제공하는 서비스',
      description: `호서대학교 LINC사업단과 협업하여 연구한 기술프로젝트로서 학생들의 정보를 자체 개발한 알고리즘을 통해 분석하여 관계도를 형성하고, 친한 친구가 많이 수강한 과목을 추천 받을 수 있는 시스템입니다.`,
      scopes: ['Development'],
      skills: ['PHP', 'Sencha Touch2'],
      categories: ['Research', 'Client', 'Server'],
      thumbnail: '',
      slideImages: ['']
   }
];

export default portfolioData;