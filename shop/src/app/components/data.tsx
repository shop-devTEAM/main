const slideData: {
  id: number;
  src: string;
  alt: string;
}[] = [
  {
    "id": 1,
    "src": "/images/slide-img01.jpg",
    "alt": "첫번째 슬라이드"
  },
  {
    "id": 2,
    "src": "/images/slide-img02.jpg",
    "alt": "두번째 슬라이드"
  },
  {
    "id": 3,
    "src": "/images/slide-img01.jpg",
    "alt": "세번째 슬라이드"
  },
  {
    "id": 4,
    "src": "/images/slide-img02.jpg",
    "alt": "네번째 슬라이드"
  },
  {
    "id": 5,
    "src": "/images/slide-img01.jpg",
    "alt": "다섯번째 슬라이드"
  } 
]
const noticeData: {
  id: number;
  text: string;
}[] = [
  {id:1, text:"저희 쇼핑몰에 방문해주셔서 감사합니다. "},
  {id:2, text:"이 곳은 공지사항 입니다. next.js와 typescript를 이용하였습니다."},
  {id:3, text:"apple의 UI정책과 무신사 쇼핑몰을 레퍼런스로 작업하였습니다."},
  {id:4, text:"고객친화적인 UIUX를 제공하는 쇼핑몰로 거듭나겠습니다."},
  {id:5, text:"방문해주셔서 감사합니다."},
]
const cardData: {
  id: number;
  title: string;
  contents: string; 
  color:string;
}[] = [
  {id:0, title:"", contents:"", color:""},
  {id:1, title:"제목", contents:"내용 시작", color:"red" },
  {id:2, title:"제목", contents:"내용", color:"red" },
  {id:3, title:"제목", contents:"내용", color:"red" },
  {id:4, title:"제목", contents:"내용", color:"red" },
  {id:5, title:"제목", contents:"내용", color:"red" },
  {id:6, title:"제목", contents:"내용", color:"red" },
  {id:7, title:"제목", contents:"내용", color:"red" },
  {id:8, title:"제목", contents:"내용", color:"red" },
  {id:9, title:"제목", contents:"내용", color:"red" },
  {id:10, title:"제목", contents:"내용 끝", color:"red"},
]
export {slideData, noticeData, cardData};