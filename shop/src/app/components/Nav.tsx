'use client'

import Link from "next/link";
import styled from "styled-components";

function Nav() {
  const mainNavText: ({
  id: number;
    product: JSX.Element;
    submenu: never[];
} | {
    id: number;
    product: string;
    submenu: {
        id: number;
 title: string;
        links: string[];
    }[];
})[] = [
    { id: 0, product: <img src="#" alt="logo" className="logo" />, submenu:[] },
    { id: 1, product: "스토어", submenu: [
      { id: 1, title: "쇼핑하기", links: ["최신 제품 쇼핑하기", "여성의류", "남성의류", "악세서리", "커피/음료", "베이커리"] },
      { id: 2, title: "의류", links: ["Tops 상의", "Pants 바지", "Dresses 원피스","Skirt 치마", "Outer 아우터"] },
      { id: 3, title: "악세서리", links: ["가방", "벨트", "모자", "선글라스","양말","장갑"] }
    ] },
    { id: 2, product: "제품1", submenu: [
      { id: 1, title: "HTML and CSS", links: ["Learn HTML", "Learn CSS", "Bootstrap 4"] },
      { id: 2, title: "Server Side", links: ["Learn PHP", "Learn Python", "Learn Node.js"] },
      { id: 3, title: "Frameworks", links: ["VueJS", "Laravel", "CodeIgniter"] }
    ] },
    { id: 3, product: "제품2", submenu: [
          { id: 1, title: "HTML and CSS", links: ["Learn HTML", "Learn CSS", "Bootstrap 4"] },
          { id: 2, title: "Server Side", links: ["Learn PHP", "Learn Python", "Learn Node.js"] },
          { id: 3, title: "Frameworks", links: ["VueJS", "Laravel", "CodeIgniter"] }
        ]},
    { id: 4, product: "제품3", submenu: [
      { id: 1, title: "HTML and CSS", links: ["Learn HTML", "Learn CSS", "Bootstrap 4"] },
      { id: 2, title: "Server Side", links: ["Learn PHP", "Learn Python", "Learn Node.js"] },
      { id: 3, title: "Frameworks", links: ["VueJS", "Laravel", "CodeIgniter"] }
    ] },
    { id: 5, product: "제품4", submenu: [
      { id: 1, title: "HTML and CSS", links: ["Learn HTML", "Learn CSS", "Bootstrap 4"] },
      { id: 2, title: "Server Side", links: ["Learn PHP", "Learn Python", "Learn Node.js"] },
      { id: 3, title: "Frameworks", links: ["VueJS", "Laravel", "CodeIgniter"] }
    ] },
    { id: 6, product: "제품5", submenu: [
      { id: 1, title: "HTML and CSS", links: ["Learn HTML", "Learn CSS", "Bootstrap 4"] },
      { id: 2, title: "Server Side", links: ["Learn PHP", "Learn Python", "Learn Node.js"] },
      { id: 3, title: "Frameworks", links: ["VueJS", "Laravel", "CodeIgniter"] }
    ] },
    { id: 7, product: "제품6", submenu: [
      { id: 1, title: "HTML and CSS", links: ["Learn HTML", "Learn CSS", "Bootstrap 4"] },
      { id: 2, title: "Server Side", links: ["Learn PHP", "Learn Python", "Learn Node.js"] },
      { id: 3, title: "Frameworks", links: ["VueJS", "Laravel", "CodeIgniter"] }
    ] },
    { id: 8, product: "제품7", submenu: [
      { id: 1, title: "HTML and CSS", links: ["Learn HTML", "Learn CSS", "Bootstrap 4"] },
      { id: 2, title: "Server Side", links: ["Learn PHP", "Learn Python", "Learn Node.js"] },
      { id: 3, title: "Frameworks", links: ["VueJS", "Laravel", "CodeIgniter"] }
    ] },
    { id: 9, product: "제품8", submenu: [
      { id: 1, title: "HTML and CSS", links: ["Learn HTML", "Learn CSS", "Bootstrap 4"] },
      { id: 2, title: "Server Side", links: ["Learn PHP", "Learn Python", "Learn Node.js"] },
      { id: 3, title: "Frameworks", links: ["VueJS", "Laravel", "CodeIgniter"] }
    ] },
    { id: 10, product: "제품9", submenu: [
      { id: 1, title: "HTML and CSS", links: ["Learn HTML", "Learn CSS", "Bootstrap 4"] },
      { id: 2, title: "Server Side", links: ["Learn PHP", "Learn Python", "Learn Node.js"] },
      { id: 3, title: "Frameworks", links: ["VueJS", "Laravel", "CodeIgniter"] }
    ] },
    { id: 11, product: "검색창", submenu:[] },
    { id: 12, product: "장바구니", submenu:[] },
    { id: 13, product: "메뉴", submenu: [] },
  ];
  // const 
  return (
  <StyledNav>
    <ul>
  {
    mainNavText.map(item => (
      <li key={item.id}>
        <Link href="/" passHref>
         {item.product}
        </Link>
        <div className="content">
          <div className="row">
      {
        item.submenu && (
          item.submenu.map((subitem) => (
            <div key={subitem.id} className="column">
              <h3>{subitem.title}</h3>
              {subitem.links.map((link, index) => (
                <a key={index} href="">{link}</a>
              ))}
            </div>
          ))
        )
          }
        </div>
        </div>
    </li>
  ))}
</ul>
</StyledNav>  
  );
}

const StyledNav = styled.nav`
    height:44px;
    font-size:12px;
    line-height:44px;
    padding-left: 22px;
    padding-right: 22px;
    position: relative;
    ul{
      margin: 0 auto;
      max-width : 1024px;
      justify-content:space-between;
    }
    li{
      float: left;
	    overflow: hidden;
    }
    a{
      padding: 5px ,15px;
      line-height:44px;
      margin: 0 15px;
    }
    li:hover > .content { /* submenu hovering */
      display: block;
    }
    li:nth-child(14) {
      display: none;  /* 모바일메뉴버튼 숨김 */
    }

    .content{ /* submenu container */
      display: none;
	    position: absolute;
	    background: #fff;
	    width: 100%;
	    left: 0;
	    z-index: 10;
      -webkit-transition: all .25s ease;
	    -moz-transition: all .25s ease;
	    -ms-transition: all .25s ease;
	    -o-transition: all .25s ease;
	    transition: all 1s ease;
    }
    .content .row{ 
      transform: translate(-50%,0);
      position:relative;
      left:74%;
    }

    .content .column {
	    float: left;
	    width: 18%;
      padding: 10px 10px 40px 10px;
	    background: #FFF;
    }
    .content .column:nth-child(2) {
      width: 12%;
    }
    .content .column a {
	    display: block;
	    float: none;
	    color: #5f5f60;
	    text-align: left;
    }
    .content .column h3 {
	    color: #5f5f60;
	    padding: 10px;
      font-size:12px;
      font-weight: normal;
    }
    .content .column:nth-child(1){
      font-size: 20px;
      font-weight: bold;
    }
    .column a:hover {
	    color:#000;
    }
   .row:after {
	    content: '';
	    display: table;
	    clear: both;
    }

    @media only screen and (max-width: 1700px) {
      .content .row{ 
        left:70%;
      }
    }

    @media only screen and (max-width: 1024px) {
      .content .row{ 
        transform: translate(0);
        left:0%;
      }
    .content .column {
	    width: 33%;
    }
    .content .column:nth-child(2) {
      width: 33%;
    }
  }
  
@media only screen and (max-width: 833px) {  /* 핸드폰 디바이스를 위한 미디어 쿼리 */
   li:nth-child(2),li:nth-child(3),li:nth-child(4),li:nth-child(5),li:nth-child(6),li:nth-child(7),li:nth-child(8),li:nth-child(9),li:nth-child(10),li:nth-child(11) {
      display: none;  /* a 요소 숨김 */
    }
    li:nth-child(1){
      margin-right:auto;
    }
    li:nth-child(14) {
      display: inline-block; 
    }
  }
  


`


export default Nav;