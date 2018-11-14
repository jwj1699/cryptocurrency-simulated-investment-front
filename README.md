# 가상화폐거래소(front) #

react + boot 환경으로 거래소 API를 사용하여 가상거래를 할수 있는 웹사이트

AWS S3를 사용하여 배포 
[사이트이동.](http://simulated-investment.s3-website.ap-northeast-2.amazonaws.com/)


#### 기획서 ####
https://drive.google.com/open?id=180e9bMkzgP2mICnVTShQaczh3ISUnZRj

#### 개발환경 ####
**client:**  react

**server:**  springBoot + 오라클



#### 가안 ####

+ 메인페이지 (로그인, 코인현황표)
+ 로그인 ( 메인페이지에서 )
+ 회원가입 (반응형으로 위치를 잡을수있다 ? 모달 : 새로운페이지)
+ 거래페이지 ( 차트 , 거래표(매수 매도 호가,접수량) 거래등록form)
+ 개인페이지
+ 회원정보수정 (새로운페이지)
+ 나의잔고 (대시보드느낌! 보유현금, 각코인별 보유량과 현금화금액) 수익률?
수익률통계?
+ 거래내역
+ 자유게시판( [글번호, 카테고리(각코인,정보,잡담) 제목, 작성자, 날짜, 조회수] ,
페이징처리, 글쓰기버튼)

#### 라이브러리  ####
+ axios
+ react-router-dom
+ redux-react-session
+ react-bootstrap-table
+ uxcore
+ echarts
+ uxcore-table